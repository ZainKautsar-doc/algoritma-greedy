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
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 text-sm text-slate-400 mb-2">
          {lembarCount > 0 && <span className="bg-slate-800 px-2 py-1 rounded">{lembarCount} lembar</span>}
          {kepingCount > 0 && <span className="bg-slate-800 px-2 py-1 rounded">{kepingCount} keping</span>}
          <span className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded font-medium">Total: {solution.totalItems} item</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {solution.result.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between bg-slate-900/80 p-2.5 rounded-md border border-slate-800/60">
              <span className="font-medium text-slate-200">Rp {item.coin.toLocaleString('id-ID')}</span>
              <span className="text-sm text-slate-400">{item.count} {item.type}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100">Demo Algoritma Greedy</h1>
        <p className="text-slate-400">Masukkan total belanja dan uang yang dibayarkan untuk melihat proses perhitungan kembalian.</p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-100">
                <Calculator className="w-5 h-5 text-blue-500" />
                Input Transaksi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Total Belanja (Rp)</label>
                  <Input
                    type="text"
                    placeholder="Contoh: 150.000"
                    value={formatRupiah(totalBelanja)}
                    onChange={(e) => setTotalBelanja(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Uang Dibayar (Rp)</label>
                  <Input
                    type="text"
                    placeholder="Contoh: 200.000"
                    value={formatRupiah(uangDibayar)}
                    onChange={(e) => setUangDibayar(e.target.value)}
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button type="submit" className="flex-1 gap-2">
                    Hitung <ArrowRightCircle className="w-4 h-4" />
                  </Button>
                  <Button type="button" variant="outline" onClick={handleReset} className="px-3">
                    <RotateCcw className="w-4 h-4" />
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

              <Card className="border-blue-500/50 bg-blue-950/10 shadow-[0_0_15px_rgba(59,130,246,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Solusi Optimal (Greedy)
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-slate-100">
                    <Receipt className="w-5 h-5 text-blue-400" />
                    Hasil Utama
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-sm text-slate-400 mb-1">Total Kembalian</p>
                    <p className="text-3xl font-bold text-blue-400">
                      Rp {result.originalAmount.toLocaleString('id-ID')}
                    </p>
                  </div>

                  {result.optimalSolution.result.length > 0 ? (
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-slate-300 border-b border-slate-800 pb-2">Rincian Pecahan Optimal:</h4>
                      {renderSolutionDetails(result.optimalSolution)}
                    </div>
                  ) : (
                    <p className="text-slate-400 italic">Tidak ada pecahan yang diberikan.</p>
                  )}
                </CardContent>
              </Card>

              {result.alternatives.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-slate-100">
                      <ListTree className="w-5 h-5 text-emerald-500" />
                      Alternatif Solusi
                    </CardTitle>
                    <p className="text-sm text-slate-400 mt-1">
                      Kombinasi lain yang valid namun membutuhkan lebih banyak lembar/keping.
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {result.alternatives.map((alt, idx) => (
                      <div key={idx} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-3">
                          <h5 className="font-medium text-slate-300">Alternatif {idx + 1}</h5>
                        </div>
                        {renderSolutionDetails(alt)}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-slate-100">
                    <Info className="w-5 h-5 text-purple-400" />
                    Proses Algoritma (Step-by-step)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
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
                          className={`flex gap-4 items-start ${isCalculation ? 'ml-10 mt-[-10px] text-slate-400 bg-slate-900/50 p-3 rounded-md border border-slate-800' : ''} ${isConclusion ? 'mt-6 pt-4 border-t border-slate-800 text-blue-300' : ''}`}
                        >
                          {!isCalculation && !isConclusion && !isInitial && (
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-medium text-slate-400 mt-0.5">
                              <ArrowRightCircle className="w-4 h-4" />
                            </div>
                          )}
                          <p className={`text-sm leading-relaxed ${isCalculation ? 'font-mono text-xs' : 'text-slate-300'}`}>
                            {step.split(/(Rp [\d.]+)/).map((part, i) => 
                              part.startsWith('Rp') ? (
                                <span key={i} className="font-medium text-blue-400">{part}</span>
                              ) : (
                                <span key={i}>{part}</span>
                              )
                            )}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-xl p-8 text-center">
              <Calculator className="w-12 h-12 mb-4 text-slate-700" />
              <p className="text-lg font-medium text-slate-400">Belum ada perhitungan</p>
              <p className="text-sm mt-2 max-w-sm">Masukkan total belanja dan uang dibayar di form sebelah kiri untuk melihat hasil.</p>
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
