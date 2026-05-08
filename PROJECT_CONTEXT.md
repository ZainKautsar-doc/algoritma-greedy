# 🧠 PROJECT CONTEXT: Greedy Coin Change

Dokumen ini berisi informasi lengkap mengenai proyek **Greedy Coin Change**, sebuah aplikasi edukasi interaktif untuk memvisualisasikan algoritma Greedy. Dokumen ini dirancang sebagai referensi utama bagi AI atau pengembang lain untuk memahami sistem tanpa perlu menelusuri seluruh codebase.

---

## 1. Informasi Umum
- **Nama Project**: Greedy Coin Change (Visualisasi Algoritma Greedy)
- **Deskripsi Project**: Aplikasi web berbasis React yang dirancang sebagai media pembelajaran interaktif untuk algoritma Greedy, dengan fokus utama pada studi kasus *Coin Change Problem* (pemberian kembalian uang).
- **Tujuan Utama**: 
    - Memberikan visualisasi nyata tentang bagaimana algoritma Greedy mengambil keputusan "lokal optimal".
    - Mengedukasi pengguna mengenai karakteristik, kelebihan, dan kelemahan algoritma Greedy.
    - Menyediakan alat hitung (kalkulator) kembalian yang transparan dengan penjelasan langkah demi langkah.
- **Target User**: Mahasiswa Informatika, pelajar yang mempelajari algoritma, dan pengajar IT.
- **Fitur Utama**:
    1. **Edukasi Teori**: Halaman beranda yang menjelaskan definisi, karakteristik utama (*Greedy Choice Property* & *Optimal Substructure*), serta contoh kegagalan algoritma.
    2. **Kalkulator Interaktif (Demo)**: Input nominal belanja dan uang dibayarkan untuk menghitung kembalian.
    3. **Visualisasi Pecahan**: Menampilkan rincian kembalian dalam bentuk uang kertas (lembar) dan uang logam (keping) sesuai standar mata uang Rupiah.
    4. **Alternatif Solusi**: Menampilkan hingga 5 kombinasi lain yang valid untuk menunjukkan bahwa metode Greedy menghasilkan jumlah item paling sedikit dibandingkan metode konvensional lainnya.
    5. **Analisis Step-by-Step**: Log perhitungan mendetail yang menjelaskan alasan setiap pecahan dipilih oleh sistem.

---

## 2. Teknologi yang Digunakan
- **Bahasa Pemrograman**: TypeScript (v5.8+) untuk pengetikan statis yang kuat.
- **Framework Utama**: React 19 (Vite sebagai build tool) untuk UI reaktif dan performa tinggi.
- **Library / Packages Penting**:
    - **Framer Motion (`motion/react`)**: Digunakan untuk animasi transisi, stagger effect pada daftar, dan micro-interactions agar UI terasa premium.
    - **Lucide React**: Library icon set untuk representasi visual fitur.
    - **React Router Dom (v7)**: Menangani navigasi client-side (SPA).
    - **clsx & tailwind-merge**: Utility untuk manajemen class CSS yang dinamis dan bersih.
- **Design System / UI Framework**: 
    - **Tailwind CSS v4**: Framework CSS utama dengan pendekatan utility-first.
    - **Custom UI Components**: Komponen atomic seperti Button, Input, Card, dan Modal yang dibangun secara modular di folder `components/ui`.
- **Tools Tambahan**:
    - **Vite**: Lingkungan pengembangan cepat.
    - **ESLint/TS**: Untuk menjaga kualitas kode.

---

## 3. Arsitektur & Alur Sistem
- **Arsitektur**: Mengikuti pola **Component-Based Architecture** dengan pemisahan logika bisnis yang ketat.
- **Alur Data End-to-End**:
    1. **Input**: User memasukkan data transaksi di `Demo.tsx`.
    2. **Logic**: Data dikirim ke fungsi `calculateChange` di `src/utils/greedyCoin.ts`.
    3. **Processing**: Algoritma mengiterasi denominasi uang (dari 100rb ke 100), menghitung jumlah optimal, dan mencari alternatif solusi.
    4. **State Update**: Hasil perhitungan (objek `GreedyResult`) disimpan dalam local state React.
    5. **Response**: UI dirender ulang untuk menampilkan hasil, animasi dijalankan oleh Framer Motion.
- **Authentication & API**: Proyek ini sepenuhnya berjalan di sisi client (Client-side logic) dan tidak menggunakan database atau authentication saat ini. API Handling dilakukan secara sinkron melalui utilitas internal.

---

## 4. Struktur Folder & Penjelasan Detail
```text
greedy-coin-change/
├── src/
│   ├── components/
│   │   ├── ui/             # Komponen dasar (Atomic Design)
│   │   │   ├── Button.tsx  # Komponen tombol kustom
│   │   │   ├── Card.tsx    # Komponen kontainer informasi
│   │   │   ├── Input.tsx   # Komponen input field
│   │   │   └── Modal.tsx   # Komponen dialog overlay
│   │   ├── Layout.tsx      # Pembungkus halaman utama (Header/Footer)
│   │   └── Navbar.tsx      # Navigasi atas
│   ├── pages/              # Halaman Utama (Views)
│   │   ├── Home.tsx        # Halaman landing & teori
│   │   ├── Demo.tsx        # Halaman kalkulator interaktif
│   │   └── About.tsx       # Halaman informasi tim/project
│   ├── utils/              # Logika Bisnis & Helper
│   │   ├── greedyCoin.ts   # Core Algorithm (Greedy & Alternative logic)
│   │   └── cn.ts           # Helper untuk tailwind class merging
│   ├── router/
│   │   └── index.tsx       # Konfigurasi React Router
│   ├── App.tsx             # Root Component
│   ├── main.tsx            # Entry point aplikasi
│   └── index.css           # Global styles & Tailwind directives
├── package.json            # Daftar dependensi & scripts
├── tsconfig.json           # Konfigurasi TypeScript
└── vite.config.ts          # Konfigurasi Vite
```

---

## 5. Konvensi & Gaya Coding
- **Gaya Coding**: Mengikuti prinsip **Clean Code** dan **DRY (Don't Repeat Yourself)**. Komponen UI bersifat murni (*presentational*) dan logika dipisahkan ke fungsi utilitas.
- **Naming Convention**:
    - File Komponen: `PascalCase.tsx`
    - Fungsi & Variabel: `camelCase`
    - File Logic: `camelCase.ts`
- **Struktur Penulisan**:
    - Menggunakan Functional Components dengan React Hooks.
    - Tipe data TypeScript didefinisikan secara eksplisit di file logic (`interface`).
- **Error Handling**: Validasi input pada form (misal: uang kurang, input bukan angka) ditangani menggunakan modal informasi (`Modal.tsx`) sebelum proses algoritma dijalankan.
- **Reusable Code**: Komponen di folder `ui` dirancang agar bisa digunakan kembali di seluruh aplikasi dengan props yang fleksibel.

---

## 6. Cara Menjalankan Project
1. **Prasyarat**: Pastikan Node.js sudah terinstall di sistem.
2. **Install Dependensi**:
   ```powershell
   npm install
   ```
3. **Menjalankan Mode Development**:
   ```powershell
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:3000` (atau port yang tersedia).
4. **Build untuk Produksi**:
   ```powershell
   npm run build
   ```

---

## 7. Insight Teknis Tambahan
- **Keputusan Teknis**: Penggunaan **Framer Motion** bertujuan agar aplikasi pendidikan ini tidak terasa membosankan dan membantu pengguna mengikuti alur data secara visual melalui transisi yang halus.
- **Potensi Improvement**:
    - Menambahkan perbandingan dengan **Dynamic Programming** untuk menunjukkan kasus di mana Greedy gagal memberikan solusi optimal.
    - Fitur kustom denominasi (user bisa menentukan sendiri pecahan uang yang tersedia).
- **Known Limitation**: Algoritma saat ini dikeraskan (*hardcoded*) untuk mata uang Rupiah Indonesia (denominasi 100.000 hingga 100).

---

## 8. Ringkasan untuk AI
- **Project**: Aplikasi visualisasi edukasi Algoritma Greedy (Coin Change).
- **Stack**: React 19, TypeScript, Tailwind CSS 4, Framer Motion.
- **Struktur**: Logic utama ada di `src/utils/greedyCoin.ts`, UI di `src/pages/Demo.tsx`.
- **Hal Penting**:
    - Aplikasi ini murni client-side (tidak ada database/API luar).
    - Fokus pada UX/UI yang premium dengan banyak animasi motion.
    - Algoritma tidak hanya mencari solusi optimal, tapi juga menghasilkan alternatif solusi untuk perbandingan edukatif.
