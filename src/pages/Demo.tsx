import React, { useState } from "react";
import { motion } from "motion/react";
import { Calculator, RotateCcw, Receipt, ArrowRightCircle, AlertCircle, CheckCircle2, ListTree, Info } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Modal } from "../components/ui/Modal";
import { calculateChange, type GreedyResult, type Solution } from "../utils/greedyCoin";

export function Demo() {
  const [totalBelanja, setTotalBelanja] = useState<string>("");
  const [uangDibayar, setUangDibayar] = useState<string>("");
  const [result, setResult] = useState<GreedyResult | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const belanja = parseInt(totalBelanja.replace(/\D/g, ""), 10);
    const dibayar = parseInt(uangDibayar.replace(/\D/g, ""), 10);

    if (isNaN(belanja) || isNaN(dibayar)) {
      setModalMessage("Mohon masukkan nominal yang valid.");
      setIsModalOpen(true);
      return;
    }

    if (belanja <= 0) {
      setModalMessage("Total belanja harus lebih dari 0.");
      setIsModalOpen(true);
      return;
    }

    if (dibayar < belanja) {
      setModalMessage("Uang yang dibayarkan kurang dari total belanja.");
      setIsModalOpen(true);
      return;
    }

    const kembalian = dibayar - belanja;
    
    if (kembalian === 0) {
      setResult({
        optimalSolution: { result: [], totalItems: 0, isOptimal: true },
        alternatives: [],
        steps: ["Tidak ada kembalian (Uang pas)."],
        remaining: 0,
        originalAmount: 0
      });
      return;
    }

    const greedyResult = calculateChange(kembalian);
    setResult(greedyResult);
  };

  const handleReset = () => {
    setTotalBelanja("");
    setUangDibayar("");
    setResult(null);
  };

  const formatRupiah = (value: string) => {
    const numberString = value.replace(/\D/g, "");
    if (!numberString) return "";
    return new Intl.NumberFormat("id-ID").format(parseInt(numberString, 10));
  };

  const renderSolutionDetails = (solution: Solution) => {
    const lembarCount = solution.result.filter(r => r.type === 'lembar').reduce((acc, curr) => acc + curr.count, 0);
    const kepingCount = solution.result.filter(r => r.type === 'keping').reduce((acc, curr) => acc + curr.count, 0);

    return (
      <div className="space-y-4 mt-4">
        <div className="flex flex-wrap gap-2 text-sm text-neo-black font-bold mb-2">
          {lembarCount > 0 && <span className="bg-neo-blue text-white px-2 py-1 border-2 border-neo-black">{lembarCount} lembar</span>}
          {kepingCount > 0 && <span className="bg-neo-blue text-white px-2 py-1 border-2 border-neo-black">{kepingCount} keping</span>}
          <span className="bg-neo-yellow px-2 py-1 border-2 border-neo-black">Total: {solution.totalItems} item</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {solution.result.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-md border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <span className="font-bold text-neo-black text-lg">Rp {item.coin.toLocaleString('id-ID')}</span>
              <span className="text-sm font-bold bg-cream px-2 py-1 border border-neo-black">{item.count} {item.type}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-4xl md:text-5xl font-black text-neo-black uppercase">Demo Algoritma Greedy</h1>
        <p className="text-neo-black font-medium text-lg">Masukkan total belanja dan uang yang dibayarkan untuk melihat proses perhitungan kembalian.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <Card className="sticky top-28 bg-neo-purple overflow-hidden">
            <CardHeader className="bg-white border-b-[3px] border-neo-black rounded-t-[17px]">
              <CardTitle className="flex items-center gap-3 text-neo-black uppercase">
                <Calculator className="w-6 h-6 stroke-[3px]" />
                Input Transaksi
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 bg-white">
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-base font-bold text-neo-black">Total Belanja (Rp)</label>
                  <Input
                    type="text"
                    placeholder="Contoh: 150.000"
                    value={formatRupiah(totalBelanja)}
                    onChange={(e) => setTotalBelanja(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-base font-bold text-neo-black">Uang Dibayar (Rp)</label>
                  <Input
                    type="text"
                    placeholder="Contoh: 200.000"
                    value={formatRupiah(uangDibayar)}
                    onChange={(e) => setUangDibayar(e.target.value)}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button type="submit" className="flex-1 gap-2 text-lg">
                    Hitung <ArrowRightCircle className="w-5 h-5 stroke-[3px]" />
                  </Button>
                  <Button type="button" variant="outline" onClick={handleReset} className="px-4">
                    <RotateCcw className="w-5 h-5 stroke-[3px]" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-8">
          {result ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              {result.remaining > 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-amber-950/40 border border-amber-900/50 rounded-xl p-4 flex gap-3 text-amber-200"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
                  <div>
                    <h4 className="font-medium text-amber-400 mb-1">Sisa Kembalian Tidak Dapat Dibagi</h4>
                    <p className="text-sm opacity-90">
                      Terdapat sisa Rp {result.remaining.toLocaleString('id-ID')} yang tidak dapat dikembalikan karena lebih kecil dari pecahan terkecil yang tersedia (Rp 100).
                    </p>
                  </div>
                </motion.div>
              )}

              <Card className="bg-neo-blue shadow-neo-brutal-xl relative overflow-visible border-[3px] border-neo-black mt-8">
                <div className="absolute -top-4 -right-4 bg-neo-yellow text-neo-black text-sm font-bold px-4 py-2 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center gap-2 transform rotate-3 z-10">
                  <CheckCircle2 className="w-5 h-5 stroke-[3px]" /> Solusi Optimal (Greedy)
                </div>
                <CardHeader className="pb-4 bg-white border-b-[3px] border-neo-black rounded-t-[17px]">
                  <CardTitle className="flex items-center gap-3 text-neo-black uppercase">
                    <Receipt className="w-6 h-6 stroke-[3px]" />
                    Hasil Utama
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white rounded-b-lg pt-6">
                  <div className="mb-8 border-[3px] border-neo-black p-4 inline-block bg-neo-yellow shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-1">
                    <p className="text-lg font-bold text-neo-black mb-1">Total Kembalian</p>
                    <p className="text-4xl md:text-5xl font-black text-neo-black">
                      Rp {result.originalAmount.toLocaleString('id-ID')}
                    </p>
                  </div>

                  {result.optimalSolution.result.length > 0 ? (
                    <div className="space-y-4 border-[3px] border-neo-black p-6 rounded-neo bg-cream shadow-inner">
                      <h4 className="text-xl font-bold text-neo-black border-b-[3px] border-neo-black pb-3 uppercase">Rincian Pecahan Optimal:</h4>
                      {renderSolutionDetails(result.optimalSolution)}
                    </div>
                  ) : (
                    <p className="text-neo-black font-bold italic bg-cream p-4 border-[3px] border-neo-black rounded-neo shadow-[2px_2px_0px_rgba(0,0,0,1)]">Tidak ada pecahan yang diberikan.</p>
                  )}
                </CardContent>
              </Card>

              {result.alternatives.length > 0 && (
                <Card className="bg-white mt-8 border-[3px] border-neo-black shadow-neo-brutal">
                  <CardHeader className="bg-neo-green border-b-[3px] border-neo-black">
                    <CardTitle className="flex items-center gap-3 text-neo-black uppercase">
                      <ListTree className="w-6 h-6 stroke-[3px]" />
                      Alternatif Solusi
                    </CardTitle>
                    <p className="text-base font-bold text-neo-black mt-2 bg-white inline-block px-3 py-1 border-[2px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      Kombinasi lain yang valid namun membutuhkan lebih banyak lembar/keping.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-8 pt-8">
                    {result.alternatives.map((alt, idx) => {
                      const colors = ['bg-cream', 'bg-neo-yellow', 'bg-neo-blue', 'bg-neo-red', 'bg-neo-purple'];
                      const bgColor = colors[idx % colors.length];
                      const textColor = (bgColor === 'bg-neo-blue' || bgColor === 'bg-neo-red' || bgColor === 'bg-neo-purple') ? 'text-white' : 'text-neo-black';
                      return (
                      <div key={idx} className={`border-[3px] border-neo-black rounded-neo p-6 shadow-[4px_4px_0px_rgba(0,0,0,1)] ${bgColor} ${textColor} hover:-translate-y-1 transition-transform`}>
                        <div className="flex justify-between items-center mb-6">
                          <h5 className="font-black text-xl uppercase bg-white text-neo-black px-4 py-2 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)] -rotate-1">
                            Alternatif {idx + 1}
                          </h5>
                        </div>
                        <div className="bg-white text-neo-black p-4 rounded-neo border-[3px] border-neo-black">
                          {renderSolutionDetails(alt)}
                        </div>
                      </div>
                    )})}
                  </CardContent>
                </Card>
              )}

              <Card className="bg-white mt-8 border-[3px] border-neo-black shadow-neo-brutal overflow-hidden">
                <CardHeader className="bg-cream border-b-[3px] border-neo-black rounded-t-[17px]">
                  <CardTitle className="flex items-center gap-3 text-neo-black uppercase">
                    <Info className="w-6 h-6 text-neo-purple stroke-[3px]" />
                    Proses Algoritma (Step-by-step)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-10 pb-8 px-4 md:px-8">
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[4px] before:bg-neo-black">
                    {result.steps.map((step, idx) => {
                      const isCalculation = step.startsWith("Perhitungan:");
                      const isConclusion = step.startsWith("Kesimpulan:");
                      const isInitial = step.startsWith("1.");
                      
                      return (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          key={idx} 
                          className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
                        >
                          <div className={`flex items-center justify-center w-12 h-12 rounded-full border-[3px] border-neo-black bg-neo-yellow shadow-[2px_2px_0px_rgba(0,0,0,1)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-black text-xl`}>
                            {idx + 1}
                          </div>
                          
                          <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 rounded-neo border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] bg-white hover:-translate-y-1 transition-transform ${isCalculation ? 'bg-cream text-neo-black font-mono' : isConclusion ? 'bg-neo-blue text-white' : 'text-neo-black'}`}>
                            <p className="font-bold text-base md:text-lg leading-relaxed">
                              {step.split(/(Rp [\d.]+)/).map((part, i) => 
                                part.startsWith('Rp') ? (
                                  <span key={i} className={`font-black ${isConclusion ? 'text-neo-yellow' : 'text-neo-blue bg-white px-2 py-0.5 border-[2px] border-neo-black mx-1 inline-block shadow-[1px_1px_0px_rgba(0,0,0,1)]'}`}>{part}</span>
                                ) : (
                                  <span key={i}>{part}</span>
                                )
                              )}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-neo-black border-[4px] border-dashed border-neo-black bg-cream rounded-neo p-8 text-center shadow-neo-brutal">
              <Calculator className="w-16 h-16 mb-6 text-neo-blue stroke-[2.5px]" />
              <p className="text-2xl font-black uppercase">Belum ada perhitungan</p>
              <p className="text-lg font-medium mt-4 max-w-sm bg-white p-3 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)] -rotate-1">Masukkan total belanja dan uang dibayar di form sebelah kiri untuk melihat hasil.</p>
            </div>
          )}
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Validasi Error"
      >
        <div className="flex items-start gap-3 text-red-400">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p>{modalMessage}</p>
        </div>
      </Modal>
    </div>
  );
}
