export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  category: 'theory' | 'calculation' | 'advantage_disadvantage' | 'concept';
  type: 'multiple_choice';
  question: string;
  options: QuizOption[];
  explanation: string;
  hint?: string;
}

export interface QuizSession {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  answers: {
    questionId: string;
    selectedOptionId: string;
    isCorrect: boolean;
    timestamp: number;
  }[];
  isCompleted: boolean;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    category: 'theory',
    type: 'multiple_choice',
    question: "Apa karakteristik utama dari algoritma Greedy?",
    options: [
      { id: 'a', text: "Memilih solusi yang optimal secara global di setiap langkah", isCorrect: true },
      { id: 'b', text: "Mempertimbangkan semua kemungkinan solusi sebelum memilih", isCorrect: false },
      { id: 'c', text: "Menggunakan dynamic programming untuk mencari solusi optimal", isCorrect: false },
      { id: 'd', text: "Mempertimbangkan keputusan sebelumnya saat membuat pilihan baru", isCorrect: false }
    ],
    explanation: "Algoritma Greedy selalu membuat pilihan lokal yang terbaik pada setiap langkah (Greedy Choice Property) dengan harapan ini akan menghasilkan solusi global yang optimal. Pada Coin Change Problem, Greedy selalu memilih denominasi uang terbesar yang bisa digunakan terlebih dahulu."
  },
  {
    id: 'q2',
    category: 'theory',
    type: 'multiple_choice',
    question: "Apa nama prinsip yang mengatakan bahwa solusi optimal dari suatu masalah terdiri dari solusi optimal dari submasalahnya?",
    options: [
      { id: 'a', text: "Greedy Choice Property", isCorrect: false },
      { id: 'b', text: "Optimal Substructure", isCorrect: true },
      { id: 'c', text: "Dynamic Programming Principle", isCorrect: false },
      { id: 'd', text: "Divide and Conquer Strategy", isCorrect: false }
    ],
    explanation: "Optimal Substructure adalah salah satu karakteristik penting dari masalah yang bisa diselesaikan dengan algoritma Greedy. Ini berarti jika kita membuat pilihan Greedy, masalah yang tersisa harus bisa diselesaikan dengan cara yang sama (secara optimal)."
  },
  {
    id: 'q3',
    category: 'theory',
    type: 'multiple_choice',
    question: "Kapan algoritma Greedy GAGAL memberikan solusi optimal untuk Coin Change Problem?",
    options: [
      { id: 'a', text: "Ketika jumlah uang yang harus dikembalikan sangat besar", isCorrect: false },
      { id: 'b', text: "Ketika denominasi uang bukan kombinasi standar yang konsisten", isCorrect: true },
      { id: 'c', text: "Ketika pengguna ingin mendapatkan jumlah koin seminimal mungkin", isCorrect: false },
      { id: 'd', text: "Ketika nilai uang yang dikembalikan kurang dari Rp 100", isCorrect: false }
    ],
    explanation: "Algoritma Greedy untuk Coin Change tidak selalu menghasilkan solusi optimal jika set denominasi tidak memiliki properti 'canonical'. Contoh: Jika denominasi adalah {1, 3, 4} dan kita mau kembalian 6, Greedy akan pilih 4+1+1 (3 koin), padahal optimal adalah 3+3 (2 koin)."
  },
  {
    id: 'q4',
    category: 'theory',
    type: 'multiple_choice',
    question: "Apa keuntungan utama menggunakan algoritma Greedy dibanding Dynamic Programming?",
    options: [
      { id: 'a', text: "Greedy selalu menghasilkan solusi yang lebih optimal", isCorrect: false },
      { id: 'b', text: "Greedy lebih cepat dan menggunakan memory lebih sedikit", isCorrect: true },
      { id: 'c', text: "Greedy bisa menangani semua jenis masalah", isCorrect: false },
      { id: 'd', text: "Greedy tidak perlu diprogram dengan rumit", isCorrect: false }
    ],
    explanation: "Algoritma Greedy memiliki time complexity O(n) and space complexity O(1) untuk Coin Change, jauh lebih efisien dibanding Dynamic Programming yang O(n*m). Namun trade-off-nya adalah tidak selalu menghasilkan solusi optimal untuk semua kasus."
  },
  {
    id: 'q5',
    category: 'theory',
    type: 'multiple_choice',
    question: "Dalam Coin Change Problem dengan Rupiah, mengapa kita memulai dari denominasi terbesar (Rp 100.000) terlebih dahulu?",
    options: [
      { id: 'a', text: "Karena uang besar lebih penting daripada uang kecil", isCorrect: false },
      { id: 'b', text: "Untuk memastikan kita menggunakan jumlah koin minimum (Greedy Choice)", isCorrect: true },
      { id: 'c', text: "Karena semua algoritma harus dimulai dari nilai terbesar", isCorrect: false },
      { id: 'd', text: "Agar proses perhitungan lebih cepat", isCorrect: false }
    ],
    explanation: "Prinsip Greedy adalah memilih pilihan terbaik secara lokal pada setiap langkah. Untuk meminimalkan jumlah koin/uang, kita harus mengambil denominasi terbesar terlebih dahulu. Ini memastikan kita menggunakan sesedikit mungkin keping/lembar uang."
  },
  {
    id: 'q6',
    category: 'theory',
    type: 'multiple_choice',
    question: "Apa yang dimaksud dengan 'Greedy Choice Property'?",
    options: [
      { id: 'a', text: "Properti di mana pilihan Greedy global selalu optimal", isCorrect: false },
      { id: 'b', text: "Properti di mana kita bisa membuat pilihan lokal optimal tanpa perlu mempertimbangkan langkah berikutnya", isCorrect: true },
      { id: 'c', text: "Properti di mana kita harus memilih uang dengan denominasi terendah", isCorrect: false },
      { id: 'd', text: "Properti di mana semua pilihan harus dipertimbangkan sebelum memilih", isCorrect: false }
    ],
    explanation: "Greedy Choice Property berarti pada setiap tahap, kita bisa membuat pilihan terbaik saat itu (lokal optimal) tanpa perlu tahu keputusan di masa depan, dan pilihan ini tidak akan mengganggu optimalitas solusi akhir."
  },
  {
    id: 'q7',
    category: 'theory',
    type: 'multiple_choice',
    question: "Algoritma apa yang bisa menjamin solusi optimal untuk SEMUA kasus Coin Change Problem, tidak peduli denominasinya?",
    options: [
      { id: 'a', text: "Greedy Algorithm", isCorrect: false },
      { id: 'b', text: "Dynamic Programming", isCorrect: true },
      { id: 'c', text: "Breadth-First Search", isCorrect: false },
      { id: 'd', text: "Divide and Conquer", isCorrect: false }
    ],
    explanation: "Dynamic Programming selalu menghasilkan solusi optimal untuk Coin Change Problem dengan menyimpan hasil sub-masalah. Meskipun lebih lambat, DP tidak terpengaruh oleh properti denominasi, berbeda dengan Greedy yang bisa gagal pada denominasi tertentu."
  },
  {
    id: 'q8',
    category: 'theory',
    type: 'multiple_choice',
    question: "Jika kita punya denominasi Rupiah {100.000, 50.000, 20.000, 10.000, 5.000, 2.000, 1.000, 500, 100}, apakah Greedy selalu optimal?",
    options: [
      { id: 'a', text: "Ya, selalu optimal", isCorrect: true },
      { id: 'b', text: "Tidak, Greedy sering gagal untuk denominasi Rupiah", isCorrect: false },
      { id: 'c', text: "Hanya optimal jika jumlah kembalian ganjil", isCorrect: false },
      { id: 'd', text: "Hanya optimal untuk jumlah di atas Rp 10.000", isCorrect: false }
    ],
    explanation: "Denominasi Rupiah standar adalah 'canonical' atau 'well-defined', artinya algoritma Greedy SELALU menghasilkan solusi optimal. Ini adalah salah satu alasan Greedy sangat baik untuk real-world currency systems."
  },
  {
    id: 'q9',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Total belanja: Rp 37.500. Uang dibayarkan: Rp 50.000. Berapa kembalian yang harus diberikan dan berapa banyak pecahan uang yang digunakan dengan metode Greedy?",
    options: [
      { id: 'a', text: "Rp 12.500, 2 lembar Rp 5.000 + 1 lembar Rp 2.500 (total 3 lembar)", isCorrect: false },
      { id: 'b', text: "Rp 12.500, 1 lembar Rp 10.000 + 1 lembar Rp 2.000 + 1 keping Rp 500 (total 3 lembar/keping)", isCorrect: true },
      { id: 'c', text: "Rp 12.500, 12 keping Rp 1.000 + 1 keping Rp 500 (total 13 keping)", isCorrect: false },
      { id: 'd', text: "Rp 12.500, 6 lembar Rp 2.000 + 1 keping Rp 500 (total 7 lembar/keping)", isCorrect: false }
    ],
    explanation: "Kembalian Rp 12.500. Dengan Greedy: 10.000 (1×), sisa 2.500 → 2.000 (1×), sisa 500 → 500 (1×), sisa 0. Total: 1 lembar 10rb + 1 lembar 2rb + 1 keping 500 = 3 item. Ini adalah solusi optimal dengan jumlah item paling sedikit."
  },
  {
    id: 'q10',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Total belanja: Rp 123.456. Uang dibayarkan: Rp 200.000. Berapa jumlah keping Rp 1.000 yang digunakan dalam kembalian dengan metode Greedy?",
    options: [
      { id: 'a', text: "76 keping", isCorrect: false },
      { id: 'b', text: "23 keping", isCorrect: false },
      { id: 'c', text: "6 keping", isCorrect: false },
      { id: 'd', text: "0 keping", isCorrect: true }
    ],
    explanation: "Kembalian: 200.000 - 123.456 = Rp 76.544. Dengan Greedy: 50.000 (1×), 20.000 (1×), 5.000 (1×), 1.000 (0×), 500 (0×), 100 (4×). Rp 1.000 tidak digunakan karena sisa Rp 544 bisa ditutupi dengan 500 + 4×100. Total keping Rp 1.000 yang digunakan: 0."
  },
  {
    id: 'q11',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Total belanja: Rp 45.750. Uang dibayarkan: Rp 100.000. Berapa banyak total lembar/keping uang yang diberikan sebagai kembalian menggunakan metode Greedy?",
    options: [
      { id: 'a', text: "3 (1×50rb + 1×5rb + 1×250rb)", isCorrect: false },
      { id: 'b', text: "4 (1×50rb + 1×5rb + 1×250 + 1×0rb)", isCorrect: false },
      { id: 'c', text: "5 (1×50rb + 1×2rb + 1×2rb + 1×250 + 1×0rb)", isCorrect: false },
      { id: 'd', text: "4 (1×50rb + 2 lembar 2rb + 1 keping 250)", isCorrect: true }
    ],
    explanation: "Kembalian: 100.000 - 45.750 = Rp 54.250. Greedy: 50.000 (1×), sisa 4.250 → 2.000 (2×), sisa 250 → 250 (1×), sisa 0. Total item: 1 + 2 + 1 = 4 (1 lembar 50rb + 2 lembar 2rb + 1 keping 250)."
  },
  {
    id: 'q12',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Jika seseorang membeli dengan total Rp 88.888 dan membayar Rp 150.000, berapa nilai total uang kembalian?",
    options: [
      { id: 'a', text: "Rp 61.112", isCorrect: true },
      { id: 'b', text: "Rp 61.111", isCorrect: false },
      { id: 'c', text: "Rp 60.000", isCorrect: false },
      { id: 'd', text: "Rp 62.000", isCorrect: false }
    ],
    explanation: "Kembalian = 150.000 - 88.888 = Rp 61.112. Ini adalah aritmatika dasar dan soal ini menguji ketelitian sebelum menerapkan algoritma Greedy."
  },
  {
    id: 'q13',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Total belanja: Rp 7.600. Uang dibayarkan: Rp 10.000. Berapa banyak keping Rp 100 yang digunakan dalam kembalian dengan metode Greedy?",
    options: [
      { id: 'a', text: "0 keping", isCorrect: false },
      { id: 'b', text: "2 keping", isCorrect: false },
      { id: 'c', text: "4 keping", isCorrect: true },
      { id: 'd', text: "24 keping", isCorrect: false }
    ],
    explanation: "Kembalian: 10.000 - 7.600 = Rp 2.400. Greedy: 2.000 (1×), sisa 400 → 100 (4×), sisa 0. Total keping Rp 100: 4 keping."
  },
  {
    id: 'q14',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Jika denominasi uang adalah {50.000, 20.000, 10.000, 5.000, 1.000, 500, 100, 50, 10, 5, 1} dan kembalian Rp 99.999, berapa jumlah total item (lembar/keping) yang diberikan dengan metode Greedy?",
    options: [
      { id: 'a', text: "23 item", isCorrect: true },
      { id: 'b', text: "12 item", isCorrect: false },
      { id: 'c', text: "15 item", isCorrect: false },
      { id: 'd', text: "18 item", isCorrect: false }
    ],
    explanation: "Rp 99.999 → 50.000 (1×), 20.000 (2×), 10.000 (0×), 5.000 (1×), 1.000 (4×), 500 (1×), 100 (4×), 50 (1×), 10 (4×), 5 (1×), 1 (4×). Hitung: 1+2+0+1+4+1+4+1+4+1+4 = 23 item."
  },
  {
    id: 'q15',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Total belanja: Rp 19.999. Uang dibayarkan: Rp 50.000. Dengan Greedy, apakah diperlukan lembar Rp 50.000 dalam kembalian?",
    options: [
      { id: 'a', text: "Ya, 1 lembar Rp 50.000", isCorrect: false },
      { id: 'b', text: "Tidak, karena kembalian kurang dari Rp 50.000", isCorrect: true },
      { id: 'c', text: "Ya, 2 lembar Rp 50.000", isCorrect: false },
      { id: 'd', text: "Tidak jelas dari informasi yang diberikan", isCorrect: false }
    ],
    explanation: "Kembalian: 50.000 - 19.999 = Rp 30.001. Ini lebih kecil dari Rp 50.000, jadi lembar Rp 50.000 tidak akan digunakan dalam pemberian kembalian. Denomin mulai dari 20.000 (1×), dst."
  },
  {
    id: 'q16',
    category: 'calculation',
    type: 'multiple_choice',
    question: "Sebuah toko memberikan kembalian Rp 23.650 kepada pelanggan menggunakan metode Greedy. Jika toko hanya punya denominasi {10.000, 5.000, 1.000, 500, 100}, apakah toko bisa memberikan kembalian yang tepat?",
    options: [
      { id: 'a', text: "Ya, pasti bisa dengan kombinasi apapun", isCorrect: false },
      { id: 'b', text: "Tidak, karena denomin 50.000 dan 20.000 tidak tersedia", isCorrect: false },
      { id: 'c', text: "Tidak, karena sisa 50 tidak bisa ditutupi", isCorrect: true },
      { id: 'd', text: "Ya, dengan 2x10.000 + 3x1.000 + 1x500 + 1x100 + 50", isCorrect: false }
    ],
    explanation: "Greedy dengan {10.000, 5.000, 1.000, 500, 100}: 10.000 (2×), sisa 3.650 → 5.000 (0×), skip → 1.000 (3×), sisa 650 → 500 (1×), sisa 150 → 100 (1×), sisa 50. Sisa 50 TIDAK BISA ditutupi dengan denominasi yang ada, jadi kembalian tidak tepat."
  },
  {
    id: 'q17',
    category: 'advantage_disadvantage',
    type: 'multiple_choice',
    question: "Manakah pernyataan yang BENAR tentang kelebihan algoritma Greedy untuk Coin Change?",
    options: [
      { id: 'a', text: "Selalu menghasilkan solusi optimal untuk denominasi apapun", isCorrect: false },
      { id: 'b', text: "Sangat cepat (O(n)) dan mudah diimplementasikan", isCorrect: true },
      { id: 'c', text: "Bisa menangani denominasi dengan pecahan desimal", isCorrect: false },
      { id: 'd', text: "Lebih baik dari Dynamic Programming dalam semua kasus", isCorrect: false }
    ],
    explanation: "Kelebihan Greedy adalah efisiensi waktu O(n) dan kemudahan implementasi. Namun, ini tidak selalu optimal (bergantung denominasi), tidak bisa handle desimal dengan sempurna, dan DP lebih robust meskipun lebih lambat."
  },
  {
    id: 'q18',
    category: 'advantage_disadvantage',
    type: 'multiple_choice',
    question: "Apa kelemahan utama algoritma Greedy untuk Coin Change Problem?",
    options: [
      { id: 'a', text: "Terlalu lambat dan menggunakan banyak memory", isCorrect: false },
      { id: 'b', text: "Tidak selalu menghasilkan solusi optimal jika denominasi tidak canonical", isCorrect: true },
      { id: 'c', text: "Tidak bisa digunakan untuk real-world currency", isCorrect: false },
      { id: 'd', text: "Memerlukan database untuk menyimpan hasil", isCorrect: false }
    ],
    explanation: "Kelemahan utama Greedy adalah tidak selalu optimal untuk set denominasi arbitrary. Contoh: {1, 3, 4} dengan kembalian 6 → Greedy hasilkan 3 koin (4+1+1), optimal 2 koin (3+3). Untuk Rupiah standar ini bukan masalah karena denominasinya canonical."
  },
  {
    id: 'q19',
    category: 'advantage_disadvantage',
    type: 'multiple_choice',
    question: "Mengapa algoritma Greedy lebih dipilih daripada Dynamic Programming untuk aplikasi ATM atau kasir toko real-time?",
    options: [
      { id: 'a', text: "DP memberikan hasil yang salah", isCorrect: false },
      { id: 'b', text: "Greedy lebih cepat dan tidak memerlukan penyimpanan data besar", isCorrect: true },
      { id: 'c', text: "DP tidak bisa menangani Rupiah", isCorrect: false },
      { id: 'd', text: "Greedy tidak pernah gagal", isCorrect: false }
    ],
    explanation: "Di aplikasi real-time seperti ATM, kecepatan penting. Greedy O(n) jauh lebih cepat dari DP O(n*m). Plus, denominasi ATM adalah canonical (selalu optimal), jadi Greedy perfect untuk use-case ini tanpa perlu overhead DP."
  },
  {
    id: 'q20',
    category: 'advantage_disadvantage',
    type: 'multiple_choice',
    question: "Dalam situasi apa sebaiknya menggunakan Dynamic Programming daripada Greedy untuk Coin Change?",
    options: [
      { id: 'a', text: "Ketika user ingin hasil yang lebih cepat", isCorrect: false },
      { id: 'b', text: "Ketika denominasi arbitrary dan tidak diketahui apakah canonical", isCorrect: true },
      { id: 'c', text: "Ketika hanya ada 2-3 jenis uang", isCorrect: false },
      { id: 'd', text: "Ketika kembalian kurang dari Rp 1.000", isCorrect: false }
    ],
    explanation: "DP adalah pilihan aman untuk denominasi arbitrary karena SELALU menghasilkan solusi optimal, tidak peduli denominasinya. Jika tidak yakin denominasi canonical, gunakan DP. Trade-off: lebih lambat dan butuh memory, tapi hasil dijamin optimal."
  },
  {
    id: 'q21',
    category: 'advantage_disadvantage',
    type: 'multiple_choice',
    question: "Apa yang dimaksud dengan 'denominasi canonical' dalam konteks Coin Change Problem?",
    options: [
      { id: 'a', text: "Denominasi yang menggunakan mata uang resmi dari negara", isCorrect: false },
      { id: 'b', text: "Denominasi di mana algoritma Greedy SELALU menghasilkan solusi optimal", isCorrect: true },
      { id: 'c', text: "Denominasi yang punya jumlah item kurang dari 10", isCorrect: false },
      { id: 'd', text: "Denominasi yang paling sering digunakan di dunia", isCorrect: false }
    ],
    explanation: "Denominasi canonical adalah set denominasi di mana algoritma Greedy dijamin menghasilkan solusi optimal. Semua denominasi Rupiah standar adalah canonical. Denomin {1, 3, 4} bukan canonical karena Greedy bisa gagal."
  },
  {
    id: 'q22',
    category: 'concept',
    type: 'multiple_choice',
    question: "Jika kita punya kembalian Rp 15.000 dengan denominasi {10.000, 6.000, 1.000}, apa yang akan dilakukan algoritma Greedy?",
    options: [
      { id: 'a', text: "Gunakan 10.000 (1x) dan 1.000 (5x) = 6 item", isCorrect: true },
      { id: 'b', text: "Algoritma akan gagal karena tidak ada solusi", isCorrect: false },
      { id: 'c', text: "Gunakan kombinasi 6.000 + 6.000 + 3×1.000", isCorrect: false },
      { id: 'd', text: "Greedy tidak bisa menangani denominasi ini", isCorrect: false }
    ],
    explanation: "Greedy: ambil 10.000 (1×), sisa 5.000. Denomin berikutnya 6.000 > 5.000, skip. Lalu 1.000 (5×), sisa 0. Hasil: 1×10.000 + 5×1.000 = 6 item. Optimal: 2×6.000 + 3×1.000 = 5 item. Greedy GAGAL di sini karena denominasi tidak canonical!"
  },
  {
    id: 'q23',
    category: 'concept',
    type: 'multiple_choice',
    question: "Dalam Demo kalkulator, ketika sistem menampilkan 'Alternatif Solusi', apa yang ditampilkan?",
    options: [
      { id: 'a', text: "Semua kombinasi yang bisa menghasilkan kembalian yang sama", isCorrect: false },
      { id: 'b', text: "5 kombinasi lain (selain Greedy) yang valid namun menggunakan lebih banyak item", isCorrect: true },
      { id: 'c', text: "Kombinasi yang lebih baik dari Greedy", isCorrect: false },
      { id: 'd', text: "Kombinasi dari algoritma Dynamic Programming", isCorrect: false }
    ],
    explanation: "Alternatif Solusi ditampilkan untuk menunjukkan bahwa meskipun ada banyak cara, Greedy memberikan jumlah ITEM PALING SEDIKIT. Ini education-focused untuk ilustrasi mengapa Greedy 'greedy' → selalu ambil terbesar dulu → hasil optimal (untuk canonical denominasi)."
  }
];

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export function getRandomQuestions(count: number): QuizQuestion[] {
  return shuffleArray(QUIZ_QUESTIONS).slice(0, count);
}

export function calculateScore(answers: { isCorrect: boolean }[]): number {
  return answers.filter(a => a.isCorrect).length;
}
