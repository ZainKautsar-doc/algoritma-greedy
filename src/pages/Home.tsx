import { motion } from "motion/react";
import { 
  ArrowRight, Zap, Target, Coins, AlertCircle, 
  Lightbulb, Activity, CheckCircle2, ListOrdered, 
  WalletCards, Receipt, Briefcase, XCircle, TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";

export function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const Divider = () => (
    <motion.div variants={item} className="py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
    </motion.div>
  );

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 max-w-5xl mx-auto pb-16"
    >
      {/* 1. HERO SECTION */}
      <motion.section variants={item} className="text-center space-y-6 py-12 lg:py-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4 border border-blue-800/50">
          <Zap className="w-4 h-4" />
          <span>Edukasi Algoritma Interaktif</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100">
          Algoritma <span className="text-blue-500">Greedy</span>
        </h1>
        <p className="text-xl text-slate-300 font-medium max-w-3xl mx-auto">
          Pendekatan sederhana yang selalu memilih <span className="text-blue-400">keputusan terbaik saat ini</span> dengan harapan mendapatkan solusi akhir yang optimal.
        </p>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-2">
          Website ini dirancang khusus untuk memvisualisasikan cara kerja algoritma Greedy secara interaktif melalui <strong className="text-slate-200 font-semibold">studi kasus pemberian kembalian uang (Coin Change)</strong>.
        </p>
        <div className="pt-8">
          <Link to="/demo">
            <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-xl hover:scale-105 transition-transform duration-300">
              Lihat Visualisasi Demo <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </motion.section>

      <Divider />

      {/* 2. SECTION: PENJELASAN ALGORITMA GREEDY */}
      <motion.section variants={item} className="space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <Lightbulb className="w-8 h-8 text-blue-500" />
            Penjelasan Algoritma Greedy
          </h2>
          <p className="text-slate-400">Mengenal konsep dasar sebelum masuk ke studi kasus.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mb-4 border border-blue-800/50">
                <Target className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-slate-100">A. Apa itu Algoritma Greedy?</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400 space-y-4">
              <p>
                Dalam bahasa sederhana, <strong>Greedy (rakus)</strong> adalah metode memecahkan masalah dengan cara <span className="text-blue-400 font-medium">memilih solusi terbaik pada setiap langkahnya (lokal)</span>, tanpa melihat konsekuensi untuk keseluruhan kemungkinan ke depannya.
              </p>
              <div className="p-4 rounded-lg bg-blue-950/30 border border-blue-900/50">
                <p className="text-sm">
                  💡 <strong>Analogi Sederhana:</strong> Bayangkan Anda ingin mengambil uang sebanyak mungkin dari sebuah kotak. Algoritma Greedy akan menyuruh Anda mengambil <span className="text-blue-400">pecahan uang dengan nilai terbesar yang Anda lihat pertama kali</span>, tanpa memikirkan apa yang tersisa di bawahnya.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mb-4 border border-blue-800/50">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-slate-100">B. Karakteristik Utama</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-1">Greedy Choice Property</strong>
                    <p className="text-sm">Kita bisa membuat pilihan optimal secara lokal pada saat itu juga, tanpa harus memikirkan dampak dari pilihan tersebut di masa depan.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200 block mb-1">Optimal Substructure</strong>
                    <p className="text-sm">Masalah besar dapat dipecahkan dengan memecahkannya menjadi masalah yang lebih kecil, lalu menyelesaikan masalah kecil tersebut satu per satu secara optimal.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-900/40 bg-gradient-to-br from-blue-950/20 to-slate-900/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <ListOrdered className="w-5 h-5 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-slate-100">C. Cara Kerja Umum Algoritma Greedy</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {[
                { title: "Tentukan Pilihan", desc: "Lihat semua pilihan yang tersedia saat ini." },
                { title: "Pilih Terbaik", desc: "Ambil opsi yang memberikan hasil paling menguntungkan (lokal optimum)." },
                { title: "Kunci Keputusan", desc: "Keputusan yang sudah diambil tidak akan pernah diubah lagi." },
                { title: "Ulangi Proses", desc: "Lakukan berulang kali hingga seluruh masalah selesai." }
              ].map((step, i) => (
                <div key={i} className="relative p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white shadow-lg border-2 border-slate-900">
                    {i + 1}
                  </div>
                  <h4 className="font-semibold text-slate-200 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <Divider />

      {/* 3. SECTION: STUDI KASUS COIN CHANGE */}
      <motion.section variants={item} className="space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <Coins className="w-8 h-8 text-amber-500" />
            Studi Kasus: Kembalian Uang (Coin Change)
          </h2>
          <p className="text-slate-400">Penerapan praktis algoritma Greedy dalam kehidupan sehari-hari.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-amber-900/30 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center mb-4 border border-amber-800/50">
                <WalletCards className="w-6 h-6 text-amber-400" />
              </div>
              <CardTitle className="text-xl text-slate-100">A. Penjelasan Masalah</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400 space-y-4">
              <p>
                Dalam masalah <strong>Coin Change</strong>, kita dihadapkan pada situasi di mana pembeli membayar lebih dari total belanjaan, dan kasir harus memberikan uang kembalian.
              </p>
              <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                <p className="text-slate-300">
                  🎯 <strong>Tujuan Utama:</strong> Mencari kombinasi pecahan uang dengan <span className="text-amber-400 font-semibold">jumlah lembar/koin paling sedikit</span> agar efisien.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-900/30 bg-slate-900/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center mb-4 border border-amber-800/50">
                <Briefcase className="w-6 h-6 text-amber-400" />
              </div>
              <CardTitle className="text-xl text-slate-100">B. Cara Kerja Greedy pada Kasus Ini</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Urutkan pecahan uang dari yang terbesar ke terkecil.",
                  "Ambil pecahan terbesar yang nilainya tidak melebihi sisa kembalian.",
                  "Kurangi sisa kembalian dengan nilai pecahan tersebut.",
                  "Ulangi langkah di atas hingga sisa kembalian = 0."
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 text-sm">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-900/50 text-amber-500 flex items-center justify-center font-bold text-xs">
                      {i + 1}
                    </span>
                    <span className="mt-0.5">{text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Real Case Example */}
        <Card className="border-slate-700/50 bg-slate-800/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center border border-emerald-800/50">
                <Receipt className="w-5 h-5 text-emerald-400" />
              </div>
              <CardTitle className="text-xl text-slate-100">C. Contoh Kasus Nyata</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 w-full bg-slate-900/80 p-6 rounded-xl border border-slate-700 shadow-inner">
                <div className="space-y-3">
                  <div className="flex justify-between text-slate-300">
                    <span>Total Belanja:</span>
                    <strong className="text-red-400">Rp 87.500</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Uang Dibayar:</span>
                    <strong className="text-emerald-400">Rp 100.000</strong>
                  </div>
                  <div className="h-px bg-slate-700/50 my-2"></div>
                  <div className="flex justify-between text-slate-100 text-lg">
                    <span>Kembalian:</span>
                    <strong className="text-amber-400">Rp 12.500</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center md:rotate-0 rotate-90 hidden md:block">
                <ArrowRight className="w-8 h-8 text-slate-600" />
              </div>

              <div className="flex-1 w-full space-y-3">
                <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4 border border-slate-700">
                  <div className="w-14 h-8 bg-blue-900/40 rounded flex items-center justify-center text-blue-400-400 font-bold border border-blue-800/50 text-sm">10k</div>
                  <div className="text-sm text-slate-300">Ambil <strong className="text-slate-100">Rp 10.000</strong> &rarr; Sisa <span className="text-amber-400">Rp 2.500</span></div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4 border border-slate-700">
                  <div className="w-14 h-8 bg-blue-900/40 rounded flex items-center justify-center text-blue-400 font-bold border border-blue-800/50 text-sm">2k</div>
                  <div className="text-sm text-slate-300">Ambil <strong className="text-slate-100">Rp 2.000</strong> &rarr; Sisa <span className="text-amber-400">Rp 500</span></div>
                </div>
                <div className="bg-slate-800/80 p-4 rounded-lg flex items-center gap-4 border border-slate-700">
                  <div className="w-14 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 font-bold border border-slate-600 text-sm">500</div>
                  <div className="text-sm text-slate-300">Ambil <strong className="text-slate-100">Rp 500</strong> &rarr; <span className="text-emerald-400 font-medium whitespace-nowrap">Selesai <CheckCircle2 className="w-4 h-4 inline pb-0.5" /></span></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <Divider />

      {/* 4. SECTION: KELEBIHAN & KEKURANGAN */}
      <motion.section variants={item} className="space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-100 mb-4 flex items-center justify-center gap-3">
            <TrendingUp className="w-8 h-8 text-purple-500" />
            Kelebihan & Kekurangan
          </h2>
          <p className="text-slate-400">Evaluasi efektivitas algoritma Greedy.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-emerald-900/50 bg-emerald-950/10 backdrop-blur-sm h-full">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-400 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6" /> 
                A. Kelebihan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-3">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <p><strong>Cepat dan Efisien:</strong> Sangat ringan diproses oleh komputer karena tidak perlu menghitung semua kemungkinan.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <p><strong>Mudah Diimplementasikan:</strong> Logikanya sangat intuitif dan mudah dipahami, cocok untuk dipelajari pemula.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></div>
                  <p><strong>Cocok untuk Sistem Nyata:</strong> Sangat efektif digunakan pada mata uang standar (Rupiah, USD) karena pecahannya dirancang agar Greedy selalu optimal.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-900/50 bg-red-950/10 backdrop-blur-sm h-full">
            <CardHeader>
              <CardTitle className="text-xl text-red-400 flex items-center gap-3">
                <XCircle className="w-6 h-6" /> 
                B. Kekurangan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <p><strong>Tidak Selalu Optimal:</strong> Ada kasus di mana algoritma ini gagal menemukan solusi terbaik atau jumlah koin paling sedikit.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0"></div>
                  <p><strong>Bergantung Struktur Masalah:</strong> Pecahan uang harus memiliki perhitungan yang kompatibel agar algoritma bekerja sempurna.</p>
                </li>
              </ul>

              <div className="mt-6 p-4 rounded-lg bg-red-950/30 border border-red-900/50">
                <p className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> Contoh Kegagalan Greedy
                </p>
                <div className="text-sm text-slate-300 space-y-2">
                  <p>Bayangkan kita punya pecahan buatan: <strong>1, 3, dan 4</strong>. Target kembalian <strong>6</strong>.</p>
                  <div className="space-y-1 bg-black/20 p-3 rounded border border-red-900/30">
                    <p>❌ <span className="text-red-400 font-medium">Algoritma Greedy:</span> <br/>Ambil 4 &rarr; 1 &rarr; 1 (Total: <strong>3 koin</strong>)</p>
                    <p className="border-t border-slate-700/50 pt-1 mt-1">✅ <span className="text-emerald-400 font-medium">Solusi Optimal Nyata:</span> <br/>Ambil 3 &rarr; 3 (Total: <strong>2 koin</strong>)</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

    </motion.div>
  );
}
