export interface CoinResult {
  coin: number;
  count: number;
  type: 'lembar' | 'keping';
}

export interface Solution {
  result: CoinResult[];
  totalItems: number;
  isOptimal: boolean;
}

export interface GreedyResult {
  optimalSolution: Solution;
  alternatives: Solution[];
  steps: string[];
  remaining: number;
  originalAmount: number;
}

const DENOMINATIONS = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];

function getCoinType(coin: number): 'lembar' | 'keping' {
  return coin >= 1000 ? 'lembar' : 'keping';
}

export function greedySolution(amount: number, availableDenominations: number[] = DENOMINATIONS): { result: CoinResult[], totalItems: number, remaining: number } {
  let remaining = amount;
  const result: CoinResult[] = [];
  let totalItems = 0;

  for (const coin of availableDenominations) {
    if (remaining >= coin) {
      const count = Math.floor(remaining / coin);
      result.push({ coin, count, type: getCoinType(coin) });
      totalItems += count;
      remaining -= count * coin;
    }
  }

  return { result, totalItems, remaining };
}

export function generateAlternativeSolutions(amount: number): Solution[] {
  const alternatives: Solution[] = [];
  const seenSignatures = new Set<string>();

  const addSolution = (sol: { result: CoinResult[], totalItems: number, remaining: number }) => {
    if (sol.remaining !== 0) return;
    const signature = sol.result.map(r => `${r.coin}x${r.count}`).join('-');
    if (!seenSignatures.has(signature)) {
      seenSignatures.add(signature);
      alternatives.push({
        result: sol.result,
        totalItems: sol.totalItems,
        isOptimal: false
      });
    }
  };

  const optimal = greedySolution(amount);
  if (optimal.remaining === 0) {
     seenSignatures.add(optimal.result.map(r => `${r.coin}x${r.count}`).join('-'));
  }

  for (let i = 0; i < DENOMINATIONS.length; i++) {
    if (amount >= DENOMINATIONS[i]) {
      const skippedDenominations = [...DENOMINATIONS];
      skippedDenominations.splice(i, 1);
      addSolution(greedySolution(amount, skippedDenominations));

      if (amount >= DENOMINATIONS[i] * 2) {
         const remaining = amount - DENOMINATIONS[i];
         const partialRes: CoinResult[] = [{ coin: DENOMINATIONS[i], count: 1, type: getCoinType(DENOMINATIONS[i]) }];
         const partialTotal = 1;

         const restSol = greedySolution(remaining, skippedDenominations);
         if (restSol.remaining === 0) {
            const mergedResult = [...partialRes, ...restSol.result];
            addSolution({ result: mergedResult, totalItems: partialTotal + restSol.totalItems, remaining: 0 });
         }
      }
    }
    if (alternatives.length >= 5) break;
  }
  
  if (alternatives.length < 5) {
      for (let i = 0; i < DENOMINATIONS.length; i++) {
          for (let j = i + 1; j < DENOMINATIONS.length; j++) {
              if (amount >= DENOMINATIONS[i]) {
                  const skippedDenominations = [...DENOMINATIONS];
                  skippedDenominations.splice(j, 1);
                  skippedDenominations.splice(i, 1);
                  addSolution(greedySolution(amount, skippedDenominations));
              }
              if (alternatives.length >= 5) break;
          }
          if (alternatives.length >= 5) break;
      }
  }

  alternatives.sort((a, b) => a.totalItems - b.totalItems);
  return alternatives.slice(0, 5);
}

export function calculateChange(amount: number): GreedyResult {
  const steps: string[] = [];
  
  steps.push(`1. Total kembalian awal: Rp ${amount.toLocaleString('id-ID')}`);

  const optimal = greedySolution(amount);
  let currentRemaining = amount;
  
  for (const item of optimal.result) {
    const previousRemaining = currentRemaining;
    const totalValue = item.count * item.coin;
    currentRemaining -= totalValue;
    
    steps.push(
      `Ambil Rp ${item.coin.toLocaleString('id-ID')} karena merupakan pecahan terbesar yang tidak melebihi sisa kembalian.`
    );
    steps.push(
      `Perhitungan: Rp ${previousRemaining.toLocaleString('id-ID')} - ( ${item.count} ${item.type} x Rp ${item.coin.toLocaleString('id-ID')} ) = Rp ${currentRemaining.toLocaleString('id-ID')}`
    );
  }

  if (optimal.remaining > 0) {
    steps.push(`Sisa Rp ${optimal.remaining.toLocaleString('id-ID')} tidak dapat dikembalikan karena lebih kecil dari pecahan terkecil yang tersedia (Rp 100).`);
  }

  steps.push(`Kesimpulan: Metode greedy memilih pecahan terbesar terlebih dahulu untuk meminimalkan jumlah lembar/keping.`);

  const optimalSolution: Solution = {
    result: optimal.result,
    totalItems: optimal.totalItems,
    isOptimal: true
  };

  const alternatives = generateAlternativeSolutions(amount);

  return { 
    optimalSolution, 
    alternatives, 
    steps, 
    remaining: optimal.remaining,
    originalAmount: amount
  };
}
