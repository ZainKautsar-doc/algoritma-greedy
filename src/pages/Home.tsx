import { motion } from "motion/react";
import { ArrowRight, Zap, Target, Coins, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

export function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-12 max-w-5xl mx-auto"
    >
      {/* Hero Section */}
      <motion.section variants={item} className="text-center space-y-6 py-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4">
          <Zap className="w-4 h-4" />
          <span>Algoritma Optimal</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100">
          Penyelesaian <span className="text-blue-500">Coin Change</span><br />
          dengan Algoritma Greedy
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Pelajari bagaimana algoritma Greedy bekerja dalam menyelesaikan masalah penukaran uang dengan cara yang cepat dan efisien.
        </p>
        <div className="pt-4">
          <Link to="/demo">
            <Button size="lg" className="gap-2 text-base">
              Coba Demo Sekarang <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Definition & Concept */}
      <motion.section variants={item} className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <CardTitle className="text-xl text-slate-100">Apa itu Algoritma Greedy?</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-400 leading-relaxed">
            Algoritma Greedy adalah pendekatan pemecahan masalah yang membuat pilihan optimal secara lokal pada setiap langkahnya, dengan harapan bahwa pilihan-pilihan tersebut akan mengarah pada solusi optimal secara global. Prinsip utamanya adalah "ambil apa yang bisa didapatkan sekarang".
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-blue-400" />
            </div>
            <CardTitle className="text-xl text-slate-100">Kasus Coin Change</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-400 leading-relaxed">
            Dalam masalah kembalian uang (Coin Change), tujuannya adalah memberikan kembalian dengan jumlah koin/lembar uang sesedikit mungkin. Algoritma Greedy menyelesaikannya dengan selalu memilih pecahan terbesar yang lebih kecil atau sama dengan sisa kembalian.
          </CardContent>
        </Card>
      </motion.section>

      {/* How it works */}
      <motion.section variants={item}>
        <Card className="border-blue-900/50 bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-100">Cara Kerja (Step by Step)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">1</div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Urutkan Pecahan</h4>
                  <p className="text-slate-400">Pastikan pecahan uang diurutkan dari nilai terbesar ke terkecil (misal: 100.000, 50.000, 20.000, dst).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">2</div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Pilih Pecahan Terbesar</h4>
                  <p className="text-slate-400">Ambil pecahan terbesar yang nilainya tidak melebihi sisa kembalian yang harus dibayar.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">3</div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Kurangi Sisa</h4>
                  <p className="text-slate-400">Kurangi total kembalian dengan nilai pecahan yang baru saja diambil.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white">4</div>
                <div>
                  <h4 className="text-lg font-medium text-slate-200">Ulangi</h4>
                  <p className="text-slate-400">Ulangi langkah 2 dan 3 sampai sisa kembalian menjadi nol.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Pros & Cons */}
      <motion.section variants={item} className="grid md:grid-cols-2 gap-6">
        <Card className="border-emerald-900/50 bg-emerald-950/10">
          <CardHeader>
            <CardTitle className="text-xl text-emerald-400">Kelebihan</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-400 space-y-2">
            <ul className="list-disc list-inside space-y-2">
              <li>Sangat cepat dan efisien (kompleksitas waktu rendah).</li>
              <li>Mudah diimplementasikan dan dipahami.</li>
              <li>Memberikan solusi optimal untuk sistem mata uang standar (seperti Rupiah, USD).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-900/50 bg-red-950/10">
          <CardHeader>
            <CardTitle className="text-xl text-red-400 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" /> Kekurangan
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-400 space-y-2">
            <ul className="list-disc list-inside space-y-2">
              <li>Tidak selalu menghasilkan solusi optimal untuk sembarang sistem koin.</li>
              <li>Bisa gagal menemukan solusi jika kombinasi koin tidak memungkinkan, meskipun sebenarnya ada solusi.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
