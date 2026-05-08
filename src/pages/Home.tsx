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
    <motion.div variants={item} className="py-12">
      <div className="h-[4px] w-full bg-neo-black"></div>
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
      <motion.section variants={item} className="text-center space-y-8 py-12 lg:py-24 relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-neo bg-neo-yellow text-neo-black text-sm font-bold mb-4 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
          <Zap className="w-5 h-5 stroke-[2.5px]" />
          <span>Edukasi Algoritma Interaktif</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-neo-black uppercase">
          Algoritma <span className="text-neo-blue" style={{textShadow: '4px 4px 0px #000'}}>Greedy</span>
        </h1>
        <p className="text-xl md:text-2xl text-neo-black font-bold max-w-3xl mx-auto leading-relaxed">
          Pendekatan sederhana yang selalu memilih <span className="bg-neo-blue text-white px-2 py-1 rounded-md border-2 border-neo-black">keputusan terbaik saat ini</span> dengan harapan mendapatkan solusi akhir yang optimal.
        </p>
        <p className="text-lg md:text-xl text-neo-black/80 font-medium max-w-2xl mx-auto mt-4">
          Website ini dirancang khusus untuk memvisualisasikan cara kerja algoritma Greedy secara interaktif melalui <strong className="text-neo-black bg-neo-yellow px-1 border border-neo-black font-bold">studi kasus pemberian kembalian uang (Coin Change)</strong>.
        </p>
        <div className="pt-8">
          <Link to="/demo">
            <Button size="lg" className="gap-2 text-xl px-10 py-6 rounded-neo hover:-translate-y-2 transition-transform duration-300">
              Lihat Visualisasi Demo <ArrowRight className="w-6 h-6 stroke-[3px]" />
            </Button>
          </Link>
        </div>
      </motion.section>

      <Divider />

      {/* 2. SECTION: PENJELASAN ALGORITMA GREEDY */}
      <motion.section variants={item} className="space-y-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-neo-black mb-4 flex items-center justify-center gap-4 uppercase">
            <Lightbulb className="w-10 h-10 text-neo-blue stroke-[3px]" />
            Penjelasan Algoritma Greedy
          </h2>
          <p className="text-xl font-medium text-neo-black/80">Mengenal konsep dasar sebelum masuk ke studi kasus.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-cream -rotate-1 hover:rotate-0 transition-transform">
            <CardHeader className="bg-neo-blue text-white border-b-[3px] border-neo-black">
              <div className="w-14 h-14 rounded-neo bg-white flex items-center justify-center mb-4 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <Target className="w-7 h-7 text-neo-black stroke-[2.5px]" />
              </div>
              <CardTitle className="text-2xl text-white">A. Apa itu Algoritma Greedy?</CardTitle>
            </CardHeader>
            <CardContent className="text-neo-black font-medium space-y-4 pt-6">
              <p className="text-lg">
                Dalam bahasa sederhana, <strong>Greedy (rakus)</strong> adalah metode memecahkan masalah dengan cara <span className="bg-neo-yellow px-1 border border-neo-black font-bold">memilih solusi terbaik pada setiap langkahnya (lokal)</span>, tanpa melihat konsekuensi untuk keseluruhan kemungkinan ke depannya.
              </p>
              <div className="p-4 rounded-neo bg-white border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <p className="text-base font-bold">
                  💡 Analogi Sederhana:<br/><span className="font-medium">Bayangkan Anda ingin mengambil uang sebanyak mungkin dari sebuah kotak. Algoritma Greedy akan menyuruh Anda mengambil <span className="text-neo-blue font-bold">pecahan uang dengan nilai terbesar yang Anda lihat pertama kali</span>, tanpa memikirkan apa yang tersisa di bawahnya.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cream rotate-1 hover:rotate-0 transition-transform">
            <CardHeader className="bg-neo-purple text-white border-b-[3px] border-neo-black">
              <div className="w-14 h-14 rounded-neo bg-white flex items-center justify-center mb-4 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <Activity className="w-7 h-7 text-neo-black stroke-[2.5px]" />
              </div>
              <CardTitle className="text-2xl text-white">B. Karakteristik Utama</CardTitle>
            </CardHeader>
            <CardContent className="text-neo-black pt-6">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neo-yellow border-2 border-neo-black flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <strong className="text-neo-black text-lg block mb-1">Greedy Choice Property</strong>
                    <p className="font-medium text-neo-black/80">Kita bisa membuat pilihan optimal secara lokal pada saat itu juga, tanpa harus memikirkan dampak dari pilihan tersebut di masa depan.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-neo-yellow border-2 border-neo-black flex items-center justify-center flex-shrink-0 mt-1 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <strong className="text-neo-black text-lg block mb-1">Optimal Substructure</strong>
                    <p className="font-medium text-neo-black/80">Masalah besar dapat dipecahkan dengan memecahkannya menjadi masalah yang lebih kecil, lalu menyelesaikan masalah kecil tersebut satu per satu secara optimal.</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-neo-yellow">
          <CardHeader className="border-b-[3px] border-neo-black bg-white">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-neo bg-neo-blue flex items-center justify-center border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <ListOrdered className="w-6 h-6 text-white stroke-[2.5px]" />
              </div>
              <CardTitle className="text-2xl text-neo-black uppercase">C. Cara Kerja Umum Algoritma Greedy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-2">
              {[
                { title: "Tentukan Pilihan", desc: "Lihat semua pilihan yang tersedia saat ini.", color: "bg-cream" },
                { title: "Pilih Terbaik", desc: "Ambil opsi yang memberikan hasil paling menguntungkan (lokal optimum).", color: "bg-neo-green" },
                { title: "Kunci Keputusan", desc: "Keputusan yang sudah diambil tidak akan pernah diubah lagi.", color: "bg-neo-red text-white" },
                { title: "Ulangi Proses", desc: "Lakukan berulang kali hingga seluruh masalah selesai.", color: "bg-neo-purple text-white" }
              ].map((step, i) => (
                <div key={i} className={`relative p-6 rounded-neo border-[3px] border-neo-black shadow-neo-brutal ${step.color} hover:-translate-y-2 transition-transform`}>
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-neo-black flex items-center justify-center font-bold text-white text-xl border-[3px] border-white shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-xl mb-3">{step.title}</h4>
                  <p className="font-medium leading-relaxed">{step.desc}</p>
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
          <h2 className="text-4xl font-black text-neo-black mb-4 flex items-center justify-center gap-4 uppercase">
            <Coins className="w-10 h-10 text-neo-yellow stroke-[3px]" />
            Studi Kasus: Kembalian Uang (Coin Change)
          </h2>
          <p className="text-xl font-medium text-neo-black/80">Penerapan praktis algoritma Greedy dalam kehidupan sehari-hari.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-cream rotate-1 hover:rotate-0 transition-transform">
            <CardHeader className="bg-neo-blue text-white border-b-[3px] border-neo-black">
              <div className="w-14 h-14 rounded-neo bg-white flex items-center justify-center mb-4 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <WalletCards className="w-7 h-7 text-neo-black stroke-[2.5px]" />
              </div>
              <CardTitle className="text-2xl text-white">A. Penjelasan Masalah</CardTitle>
            </CardHeader>
            <CardContent className="text-neo-black space-y-4 pt-6">
              <p className="text-lg font-medium">
                Dalam masalah <strong>Coin Change</strong>, kita dihadapkan pada situasi di mana pembeli membayar lebih dari total belanjaan, dan kasir harus memberikan uang kembalian.
              </p>
              <div className="p-4 rounded-neo bg-neo-yellow border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <p className="text-neo-black text-base font-bold">
                  🎯 Tujuan Utama:<br/><span className="font-medium">Mencari kombinasi pecahan uang dengan <span className="bg-white px-1 border border-neo-black font-bold">jumlah lembar/koin paling sedikit</span> agar efisien.</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-cream -rotate-1 hover:rotate-0 transition-transform">
            <CardHeader className="bg-neo-purple text-white border-b-[3px] border-neo-black">
              <div className="w-14 h-14 rounded-neo bg-white flex items-center justify-center mb-4 border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <Briefcase className="w-7 h-7 text-neo-black stroke-[2.5px]" />
              </div>
              <CardTitle className="text-2xl text-white">B. Cara Kerja Greedy pada Kasus Ini</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  "Urutkan pecahan uang dari yang terbesar ke terkecil.",
                  "Ambil pecahan terbesar yang nilainya tidak melebihi sisa kembalian.",
                  "Kurangi sisa kembalian dengan nilai pecahan tersebut.",
                  "Ulangi langkah di atas hingga sisa kembalian = 0."
                ].map((text, i) => (
                  <li key={i} className="flex gap-4 text-neo-black text-lg font-medium">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neo-yellow border-2 border-neo-black text-neo-black flex items-center justify-center font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                      {i + 1}
                    </span>
                    <span className="mt-1">{text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Real Case Example */}
        <Card className="bg-cream">
          <CardHeader className="bg-white border-b-[3px] border-neo-black">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-neo bg-neo-green flex items-center justify-center border-[3px] border-neo-black shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <Receipt className="w-6 h-6 text-neo-black stroke-[2.5px]" />
              </div>
              <CardTitle className="text-2xl text-neo-black uppercase">C. Contoh Kasus Nyata</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 w-full bg-white p-6 rounded-neo border-[3px] border-neo-black shadow-neo-brutal">
                <div className="space-y-4 font-bold text-lg">
                  <div className="flex justify-between text-neo-black/80">
                    <span>Total Belanja:</span>
                    <strong className="text-neo-red">Rp 87.500</strong>
                  </div>
                  <div className="flex justify-between text-neo-black/80">
                    <span>Uang Dibayar:</span>
                    <strong className="text-neo-green">Rp 100.000</strong>
                  </div>
                  <div className="h-[3px] bg-neo-black my-4"></div>
                  <div className="flex justify-between text-neo-black text-xl">
                    <span>Kembalian:</span>
                    <strong className="bg-neo-yellow px-2 py-1 rounded border-2 border-neo-black">Rp 12.500</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center md:rotate-0 rotate-90 hidden md:block">
                <ArrowRight className="w-12 h-12 text-neo-black stroke-[3px]" />
              </div>

              <div className="flex-1 w-full space-y-4">
                <div className="bg-white p-4 rounded-neo flex items-center gap-4 border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-10 bg-neo-blue rounded flex items-center justify-center text-white font-bold border-[3px] border-neo-black text-base">10k</div>
                  <div className="text-base text-neo-black font-medium">Ambil <strong className="font-bold">Rp 10.000</strong> &rarr; Sisa <span className="bg-neo-yellow px-1 border border-neo-black">Rp 2.500</span></div>
                </div>
                <div className="bg-white p-4 rounded-neo flex items-center gap-4 border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-10 bg-neo-blue rounded flex items-center justify-center text-white font-bold border-[3px] border-neo-black text-base">2k</div>
                  <div className="text-base text-neo-black font-medium">Ambil <strong className="font-bold">Rp 2.000</strong> &rarr; Sisa <span className="bg-neo-yellow px-1 border border-neo-black">Rp 500</span></div>
                </div>
                <div className="bg-white p-4 rounded-neo flex items-center gap-4 border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-10 bg-neo-black rounded-full flex items-center justify-center text-white font-bold border-[3px] border-neo-black text-base">500</div>
                  <div className="text-base text-neo-black font-medium">Ambil <strong className="font-bold">Rp 500</strong> &rarr; <span className="text-neo-green font-bold whitespace-nowrap">Selesai <CheckCircle2 className="w-5 h-5 inline pb-0.5 stroke-[3px]" /></span></div>
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
          <h2 className="text-4xl font-black text-neo-black mb-4 flex items-center justify-center gap-4 uppercase">
            <TrendingUp className="w-10 h-10 text-neo-purple stroke-[3px]" />
            Kelebihan & Kekurangan
          </h2>
          <p className="text-xl font-medium text-neo-black/80">Evaluasi efektivitas algoritma Greedy.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-neo-green h-full rotate-1 hover:rotate-0 transition-transform">
            <CardHeader className="bg-white border-b-[3px] border-neo-black">
              <CardTitle className="text-2xl text-neo-black flex items-center gap-4 uppercase">
                <CheckCircle2 className="w-8 h-8 stroke-[3px]" /> 
                A. Kelebihan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-neo-black space-y-4 pt-6">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-neo-black border-2 border-white mt-2 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                  <p className="font-medium text-lg"><strong className="font-bold bg-white px-1 border border-neo-black">Cepat dan Efisien:</strong> Sangat ringan diproses oleh komputer karena tidak perlu menghitung semua kemungkinan.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-neo-black border-2 border-white mt-2 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                  <p className="font-medium text-lg"><strong className="font-bold bg-white px-1 border border-neo-black">Mudah Diimplementasikan:</strong> Logikanya sangat intuitif dan mudah dipahami, cocok untuk dipelajari pemula.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-neo-black border-2 border-white mt-2 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                  <p className="font-medium text-lg"><strong className="font-bold bg-white px-1 border border-neo-black">Cocok untuk Sistem Nyata:</strong> Sangat efektif digunakan pada mata uang standar (Rupiah, USD) karena pecahannya dirancang agar Greedy selalu optimal.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-neo-red h-full -rotate-1 hover:rotate-0 transition-transform">
            <CardHeader className="bg-white border-b-[3px] border-neo-black">
              <CardTitle className="text-2xl text-neo-black flex items-center gap-4 uppercase">
                <XCircle className="w-8 h-8 stroke-[3px]" /> 
                B. Kekurangan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-neo-black space-y-4 pt-6">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-neo-black border-2 border-white mt-2 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                  <p className="font-medium text-lg text-white"><strong className="font-bold bg-white text-neo-black px-1 border border-neo-black">Tidak Selalu Optimal:</strong> Ada kasus di mana algoritma ini gagal menemukan solusi terbaik atau jumlah koin paling sedikit.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-neo-black border-2 border-white mt-2 shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
                  <p className="font-medium text-lg text-white"><strong className="font-bold bg-white text-neo-black px-1 border border-neo-black">Bergantung Struktur Masalah:</strong> Pecahan uang harus memiliki perhitungan yang kompatibel agar algoritma bekerja sempurna.</p>
                </li>
              </ul>

              <div className="mt-8 p-6 rounded-neo bg-white border-[3px] border-neo-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                <p className="text-lg font-bold text-neo-black mb-3 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 stroke-[2.5px] text-neo-red" /> Contoh Kegagalan Greedy
                </p>
                <div className="text-base text-neo-black font-medium space-y-3">
                  <p>Bayangkan kita punya pecahan buatan: <strong>1, 3, dan 4</strong>. Target kembalian <strong>6</strong>.</p>
                  <div className="space-y-2 bg-cream p-4 rounded-md border-[3px] border-neo-black shadow-inner">
                    <p>❌ <span className="text-neo-red font-bold uppercase">Algoritma Greedy:</span> <br/>Ambil 4 &rarr; 1 &rarr; 1 (Total: <strong className="bg-neo-yellow px-1 border border-neo-black">3 koin</strong>)</p>
                    <p className="border-t-[3px] border-neo-black pt-3 mt-3">✅ <span className="text-neo-green font-bold uppercase">Solusi Optimal Nyata:</span> <br/>Ambil 3 &rarr; 3 (Total: <strong className="bg-neo-yellow px-1 border border-neo-black">2 koin</strong>)</p>
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
