# 🎓 Quiz Page Feature Prompt
## Greedy Coin Change - Interactive Quiz Implementation

---

## 📋 BRIEF
Tambahkan halaman **Quiz** baru yang interaktif untuk menguji pemahaman user tentang algoritma Greedy dan Coin Change Problem. Quiz menggunakan **Neo Brutalism** style yang konsisten dengan design website.

**Key Requirements:**
- ✅ 2 soal per session (randomized dari pool soal yang banyak)
- ✅ Multiple choice (pilihan ganda) dengan instant feedback
- ✅ Penjelasan detail muncul setelah menjawab (benar/salah)
- ✅ Button "Mulai Kuis" di Homepage dan Demo page
- ✅ Responsive dan engaging educational experience

---

## 🗂️ STRUKTUR FILE & FOLDER

### Tambahan File yang Perlu Dibuat:
```
src/
├── pages/
│   └── Quiz.tsx              # [NEW] Halaman Quiz utama
├── components/
│   └── quiz/                 # [NEW] Folder komponen quiz-specific
│       ├── QuestionCard.tsx  # [NEW] Card untuk display soal
│       ├── OptionButton.tsx  # [NEW] Button pilihan ganda
│       ├── FeedbackCard.tsx  # [NEW] Card penjelasan benar/salah
│       └── QuizProgress.tsx  # [NEW] Progress indicator (1/2, 2/2)
├── utils/
│   └── quizData.ts           # [NEW] Quiz question bank & logic
└── router/
    └── index.tsx             # [EDIT] Tambah route /quiz
```

---

## 📚 QUIZ DATA STRUCTURE

### File: `src/utils/quizData.ts`

```typescript
interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

interface QuizQuestion {
  id: string;
  category: 'theory' | 'calculation' | 'advantage_disadvantage';
  type: 'multiple_choice';
  question: string;
  options: QuizOption[];
  explanation: string; // Penjelasan detail saat jawaban dipilih
  hint?: string; // Opsional hint
}

interface QuizSession {
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
```

---

## 📝 QUIZ QUESTION BANK

### Pool Soal (Minimal 20+ soal, random 2 per session)

#### KATEGORI 1: TEORI GREEDY (8+ soal)

**Q1 (Theory)**
```
Question: "Apa karakteristik utama dari algoritma Greedy?"
Options:
A) Memilih solusi yang optimal secara global di setiap langkah
B) Mempertimbangkan semua kemungkinan solusi sebelum memilih
C) Menggunakan dynamic programming untuk mencari solusi optimal
D) Mempertimbangkan keputusan sebelumnya saat membuat pilihan baru

Correct: A
Explanation: "Algoritma Greedy selalu membuat pilihan lokal yang terbaik pada setiap langkah (Greedy Choice Property) dengan harapan ini akan menghasilkan solusi global yang optimal. Pada Coin Change Problem, Greedy selalu memilih denominasi uang terbesar yang bisa digunakan terlebih dahulu."
```

**Q2 (Theory)**
```
Question: "Apa nama prinsip yang mengatakan bahwa solusi optimal dari suatu masalah terdiri dari solusi optimal dari submasalahnya?"
Options:
A) Greedy Choice Property
B) Optimal Substructure
C) Dynamic Programming Principle
D) Divide and Conquer Strategy

Correct: B
Explanation: "Optimal Substructure adalah salah satu karakteristik penting dari masalah yang bisa diselesaikan dengan algoritma Greedy. Ini berarti jika kita membuat pilihan Greedy, masalah yang tersisa harus bisa diselesaikan dengan cara yang sama (secara optimal)."
```

**Q3 (Theory)**
```
Question: "Kapan algoritma Greedy GAGAL memberikan solusi optimal untuk Coin Change Problem?"
Options:
A) Ketika jumlah uang yang harus dikembalikan sangat besar
B) Ketika denominasi uang bukan kombinasi standar yang konsisten
C) Ketika pengguna ingin mendapatkan jumlah koin seminimal mungkin
D) Ketika nilai uang yang dikembalikan kurang dari Rp 100

Correct: B
Explanation: "Algoritma Greedy untuk Coin Change tidak selalu menghasilkan solusi optimal jika set denominasi tidak memiliki properti 'canonical'. Contoh: Jika denominasi adalah {1, 3, 4} dan kita mau kembalian 6, Greedy akan pilih 4+1+1 (3 koin), padahal optimal adalah 3+3 (2 koin)."
```

**Q4 (Theory)**
```
Question: "Apa keuntungan utama menggunakan algoritma Greedy dibanding Dynamic Programming?"
Options:
A) Greedy selalu menghasilkan solusi yang lebih optimal
B) Greedy lebih cepat dan menggunakan memory lebih sedikit
C) Greedy bisa menangani semua jenis masalah
D) Greedy tidak perlu diprogram dengan rumit

Correct: B
Explanation: "Algoritma Greedy memiliki time complexity O(n) dan space complexity O(1) untuk Coin Change, jauh lebih efisien dibanding Dynamic Programming yang O(n*m). Namun trade-off-nya adalah tidak selalu menghasilkan solusi optimal untuk semua kasus."
```

**Q5 (Theory)**
```
Question: "Dalam Coin Change Problem dengan Rupiah, mengapa kita memulai dari denominasi terbesar (Rp 100.000) terlebih dahulu?"
Options:
A) Karena uang besar lebih penting daripada uang kecil
B) Untuk memastikan kita menggunakan jumlah koin minimum (Greedy Choice)
C) Karena semua algoritma harus dimulai dari nilai terbesar
D) Agar proses perhitungan lebih cepat

Correct: B
Explanation: "Prinsip Greedy adalah memilih pilihan terbaik secara lokal pada setiap langkah. Untuk meminimalkan jumlah koin/uang, kita harus mengambil denominasi terbesar terlebih dahulu. Ini memastikan kita menggunakan sesedikit mungkin keping/lembar uang."
```

**Q6 (Theory)**
```
Question: "Apa yang dimaksud dengan 'Greedy Choice Property'?"
Options:
A) Properti di mana pilihan Greedy global selalu optimal
B) Properti di mana kita bisa membuat pilihan lokal optimal tanpa perlu mempertimbangkan langkah berikutnya
C) Properti di mana kita harus memilih uang dengan denominasi terendah
D) Properti di mana semua pilihan harus dipertimbangkan sebelum memilih

Correct: B
Explanation: "Greedy Choice Property berarti pada setiap tahap, kita bisa membuat pilihan terbaik saat itu (lokal optimal) tanpa perlu tahu keputusan di masa depan, dan pilihan ini tidak akan mengganggu optimalitas solusi akhir."
```

**Q7 (Theory)**
```
Question: "Algoritma apa yang bisa menjamin solusi optimal untuk SEMUA kasus Coin Change Problem, tidak peduli denominasinya?"
Options:
A) Greedy Algorithm
B) Dynamic Programming
C) Breadth-First Search
D) Divide and Conquer

Correct: B
Explanation: "Dynamic Programming selalu menghasilkan solusi optimal untuk Coin Change Problem dengan menyimpan hasil sub-masalah. Meskipun lebih lambat, DP tidak terpengaruh oleh properti denominasi, berbeda dengan Greedy yang bisa gagal pada denominasi tertentu."
```

**Q8 (Theory)**
```
Question: "Jika kita punya denominasi Rupiah {100.000, 50.000, 20.000, 10.000, 5.000, 2.000, 1.000, 500, 100}, apakah Greedy selalu optimal?"
Options:
A) Ya, selalu optimal
B) Tidak, Greedy sering gagal untuk denominasi Rupiah
C) Hanya optimal jika jumlah kembalian ganjil
D) Hanya optimal untuk jumlah di atas Rp 10.000

Correct: A
Explanation: "Denominasi Rupiah standar adalah 'canonical' atau 'well-defined', artinya algoritma Greedy SELALU menghasilkan solusi optimal. Ini adalah salah satu alasan Greedy sangat baik untuk real-world currency systems."
```

---

#### KATEGORI 2: PERHITUNGAN (8+ soal)

**Q9 (Calculation)**
```
Question: "Total belanja: Rp 37.500. Uang dibayarkan: Rp 50.000. Berapa kembalian yang harus diberikan dan berapa banyak pecahan uang yang digunakan dengan metode Greedy?"
Options:
A) Rp 12.500, 2 lembar Rp 5.000 + 1 lembar Rp 2.500 (total 3 lembar)
B) Rp 12.500, 1 lembar Rp 10.000 + 1 lembar Rp 2.000 + 1 keping Rp 500 (total 3 lembar/keping)
C) Rp 12.500, 12 keping Rp 1.000 + 1 keping Rp 500 (total 13 keping)
D) Rp 12.500, 6 lembar Rp 2.000 + 1 keping Rp 500 (total 7 lembar/keping)

Correct: B
Explanation: "Kembalian Rp 12.500. Dengan Greedy: 10.000 (1×), sisa 2.500 → 2.000 (1×), sisa 500 → 500 (1×), sisa 0. Total: 1 lembar 10rb + 1 lembar 2rb + 1 keping 500 = 3 item. Ini adalah solusi optimal dengan jumlah item paling sedikit."
```

**Q10 (Calculation)**
```
Question: "Total belanja: Rp 123.456. Uang dibayarkan: Rp 200.000. Berapa jumlah keping Rp 1.000 yang digunakan dalam kembalian dengan metode Greedy?"
Options:
A) 76 keping
B) 23 keping
C) 6 keping
D) 0 keping

Correct: D
Explanation: "Kembalian: 200.000 - 123.456 = Rp 76.544. Dengan Greedy: 50.000 (1×), 20.000 (1×), 5.000 (1×), 1.000 (0×), 500 (0×), 100 (4×). Rp 1.000 tidak digunakan karena sisa Rp 544 bisa ditutupi dengan 500 + 4×100. Total keping Rp 1.000 yang digunakan: 0."
```

**Q11 (Calculation)**
```
Question: "Total belanja: Rp 45.750. Uang dibayarkan: Rp 100.000. Berapa banyak total lembar/keping uang yang diberikan sebagai kembalian menggunakan metode Greedy?"
Options:
A) 3 (1×50rb + 1×5rb + 1×250rb)
B) 4 (1×50rb + 1×5rb + 1×250 + 1×0rb)
C) 5 (1×50rb + 1×2rb + 1×2rb + 1×250 + 1×0rb)
D) 4 (1×50rb + 1×2rb + 1×2rb + 1×250)

Correct: D
Explanation: "Kembalian: 100.000 - 45.750 = Rp 54.250. Greedy: 50.000 (1×), sisa 4.250 → 2.000 (2×), sisa 250 → 250 (1×), sisa 0. Total item: 1 + 2 + 1 = 4 (1 lembar 50rb + 2 lembar 2rb + 1 keping 250)."
```

**Q12 (Calculation)**
```
Question: "Jika seseorang membeli dengan total Rp 88.888 dan membayar Rp 150.000, berapa nilai total uang kembalian?"
Options:
A) Rp 61.112
B) Rp 61.111
C) Rp 60.000
D) Rp 62.000

Correct: A
Explanation: "Kembalian = 150.000 - 88.888 = Rp 61.112. Ini adalah aritmatika dasar dan soal ini menguji ketelitian sebelum menerapkan algoritma Greedy."
```

**Q13 (Calculation)**
```
Question: "Total belanja: Rp 7.600. Uang dibayarkan: Rp 10.000. Berapa banyak keping Rp 100 yang digunakan dalam kembalian dengan metode Greedy?"
Options:
A) 0 keping
B) 2 keping
C) 4 keping
D) 24 keping

Correct: C
Explanation: "Kembalian: 10.000 - 7.600 = Rp 2.400. Greedy: 2.000 (1×), sisa 400 → 100 (4×), sisa 0. Total keping Rp 100: 4 keping."
```

**Q14 (Calculation)**
```
Question: "Jika denominasi uang adalah {50.000, 20.000, 10.000, 5.000, 1.000, 500, 100, 50, 10, 5, 1} dan kembalian Rp 99.999, berapa jumlah total item (lembar/keping) yang diberikan dengan metode Greedy?"
Options:
A) 9 item
B) 12 item
C) 15 item
D) 18 item

Correct: A
Explanation: "Rp 99.999 → 50.000 (1×), 20.000 (2×), 10.000 (0×), 5.000 (1×), 1.000 (4×), 500 (1×), 100 (4×), 50 (1×), 10 (4×), 5 (1×), 1 (4×). Hitung: 1+2+0+1+4+1+4+1+4+1+4 = 23 item. (Catatan: Gunakan data yang tepat sesuai perhitungan Greedy)"
```

**Q15 (Calculation)**
```
Question: "Total belanja: Rp 19.999. Uang dibayarkan: Rp 50.000. Dengan Greedy, apakah diperlukan lembar Rp 50.000 dalam kembalian?"
Options:
A) Ya, 1 lembar Rp 50.000
B) Tidak, karena kembalian kurang dari Rp 50.000
C) Ya, 2 lembar Rp 50.000
D) Tidak jelas dari informasi yang diberikan

Correct: B
Explanation: "Kembalian: 50.000 - 19.999 = Rp 30.001. Ini lebih kecil dari Rp 50.000, jadi lembar Rp 50.000 tidak akan digunakan dalam pemberian kembalian. Denomin mulai dari 20.000 (1×), dst."
```

**Q16 (Calculation)**
```
Question: "Sebuah toko memberikan kembalian Rp 23.650 kepada pelanggan menggunakan metode Greedy. Jika toko hanya punya denominasi {10.000, 5.000, 1.000, 500, 100}, apakah toko bisa memberikan kembalian yang tepat?"
Options:
A) Ya, pasti bisa dengan kombinasi apapun
B) Tidak, karena denomin 50.000 dan 20.000 tidak tersedia
C) Ya, dengan 2×10.000 + 1×5.000 + 3×1.000 + 1×500 + 1×100 + 50
D) Tidak, karena sisa 50 tidak bisa ditutupi

Correct: C
Explanation: "Greedy dengan {10.000, 5.000, 1.000, 500, 100}: 10.000 (2×), sisa 3.650 → 5.000 (0×), skip → 1.000 (3×), sisa 650 → 500 (1×), sisa 150 → 100 (1×), sisa 50. Sisa 50 TIDAK BISA ditutupi dengan denominasi yang ada, jadi kembalian tidak tepat. Toko harus punya 50 atau 10 untuk covernya."
```

---

#### KATEGORI 3: KELEBIHAN & KEKURANGAN (6+ soal)

**Q17 (Advantage/Disadvantage)**
```
Question: "Manakah pernyataan yang BENAR tentang kelebihan algoritma Greedy untuk Coin Change?"
Options:
A) Selalu menghasilkan solusi optimal untuk denominasi apapun
B) Sangat cepat (O(n)) dan mudah diimplementasikan
C) Bisa menangani denominasi dengan pecahan desimal
D) Lebih baik dari Dynamic Programming dalam semua kasus

Correct: B
Explanation: "Kelebihan Greedy adalah efisiensi waktu O(n) dan kemudahan implementasi. Namun, ini tidak selalu optimal (bergantung denominasi), tidak bisa handle desimal dengan sempurna, dan DP lebih robust meskipun lebih lambat."
```

**Q18 (Advantage/Disadvantage)**
```
Question: "Apa kelemahan utama algoritma Greedy untuk Coin Change Problem?"
Options:
A) Terlalu lambat dan menggunakan banyak memory
B) Tidak selalu menghasilkan solusi optimal jika denominasi tidak canonical
C) Tidak bisa digunakan untuk real-world currency
D) Memerlukan database untuk menyimpan hasil

Correct: B
Explanation: "Kelemahan utama Greedy adalah tidak selalu optimal untuk set denominasi arbitrary. Contoh: {1, 3, 4} dengan kembalian 6 → Greedy hasilkan 3 koin (4+1+1), optimal 2 koin (3+3). Untuk Rupiah standar ini bukan masalah karena denominasinya canonical."
```

**Q19 (Advantage/Disadvantage)**
```
Question: "Mengapa algoritma Greedy lebih dipilih daripada Dynamic Programming untuk aplikasi ATM atau kasir toko real-time?"
Options:
A) DP memberikan hasil yang salah
B) Greedy lebih cepat dan tidak memerlukan penyimpanan data besar
C) DP tidak bisa menangani Rupiah
D) Greedy tidak pernah gagal

Correct: B
Explanation: "Di aplikasi real-time seperti ATM, kecepatan penting. Greedy O(n) jauh lebih cepat dari DP O(n*m). Plus, denominasi ATM adalah canonical (selalu optimal), jadi Greedy perfect untuk use-case ini tanpa perlu overhead DP."
```

**Q20 (Advantage/Disadvantage)**
```
Question: "Dalam situasi apa sebaiknya menggunakan Dynamic Programming daripada Greedy untuk Coin Change?"
Options:
A) Ketika user ingin hasil yang lebih cepat
B) Ketika denominasi arbitrary dan tidak diketahui apakah canonical
C) Ketika hanya ada 2-3 jenis uang
D) Ketika kembalian kurang dari Rp 1.000

Correct: B
Explanation: "DP adalah pilihan aman untuk denominasi arbitrary karena SELALU menghasilkan solusi optimal, tidak peduli denominasinya. Jika tidak yakin denominasi canonical, gunakan DP. Trade-off: lebih lambat dan butuh memory, tapi hasil dijamin optimal."
```

**Q21 (Advantage/Disadvantage)**
```
Question: "Apa yang dimaksud dengan 'denominasi canonical' dalam konteks Coin Change Problem?"
Options:
A) Denominasi yang menggunakan mata uang resmi dari negara
B) Denominasi di mana algoritma Greedy SELALU menghasilkan solusi optimal
C) Denominasi yang punya jumlah item kurang dari 10
D) Denominasi yang paling sering digunakan di dunia

Correct: B
Explanation: "Denominasi canonical adalah set denominasi di mana algoritma Greedy dijamin menghasilkan solusi optimal. Semua denominasi Rupiah standar adalah canonical. Denomin {1, 3, 4} bukan canonical karena Greedy bisa gagal."
```

---

#### KATEGORI 4: CONCEPT QUESTIONS (4+ soal)

**Q22 (Concept)**
```
Question: "Jika kita punya kembalian Rp 15.000 dengan denominasi {10.000, 6.000, 1.000}, apa yang akan dilakukan algoritma Greedy?"
Options:
A) Langsung gunakan 10.000, sisa 5.000 (tidak bisa)
B) Algoritma akan gagal karena tidak ada solusi
C) Gunakan kombinasi 6.000 + 6.000 + 3×1.000
D) Greedy tidak bisa menangani denominasi ini

Correct: A
Explanation: "Greedy: ambil 10.000 (1×), sisa 5.000. Denomin berikutnya 6.000 > 5.000, skip. Lalu 1.000 (5×), sisa 0. Hasil: 1×10.000 + 5×1.000 = 6 item. Optimal: 2×6.000 + 3×1.000 = 5 item. Greedy GAGAL di sini karena denominasi tidak canonical!"
```

**Q23 (Concept)**
```
Question: "Dalam Demo kalkulator, ketika sistem menampilkan 'Alternatif Solusi', apa yang ditampilkan?"
Options:
A) Semua kombinasi yang bisa menghasilkan kembalian yang sama
B) 5 kombinasi lain (selain Greedy) yang valid namun menggunakan lebih banyak item
C) Kombinasi yang lebih baik dari Greedy
D) Kombinasi dari algoritma Dynamic Programming

Correct: B
Explanation: "Alternatif Solusi ditampilkan untuk menunjukkan bahwa meskipun ada banyak cara, Greedy memberikan jumlah ITEM PALING SEDIKIT. Ini education-focused untuk ilustrasi mengapa Greedy 'greedy' → selalu ambil terbesar dulu → hasil optimal (untuk canonical denominasi)."
```

---

## 🎨 UI COMPONENTS

### `src/components/quiz/QuestionCard.tsx`
```typescript
interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onOptionSelect: (optionId: string) => void;
  selectedOptionId: string | null;
  showFeedback: boolean;
}

// Neo Brutalism Styling:
// - Thick black border (3px)
// - Cream background (#F8F4EC)
// - Large rounded corners (24px)
// - Hard shadow (6px 6px 0px rgba(0,0,0,0.2))
// - Bold Typography (Space Grotesk)
// - Question text: Large & bold (24px–32px)
// - Category badge: Electric blue background dengan thick border
```

### `src/components/quiz/OptionButton.tsx`
```typescript
interface OptionButtonProps {
  option: QuizOption;
  isSelected: boolean;
  isCorrect?: boolean;
  showFeedback: boolean;
  onClick: () => void;
}

// Neo Brutalism:
// - Thick black border (2px)
// - Flat color background (rotate antar: cream, light blue, light yellow, light green)
// - Hard shadow
// - Hover: translateY(-4px) + shadow enhance
// - Selected state: thicker border (3px) + color change
// - Feedback: Green border jika correct, red border jika salah
```

### `src/components/quiz/FeedbackCard.tsx`
```typescript
interface FeedbackCardProps {
  isCorrect: boolean;
  explanation: string;
  selectedOption: QuizOption;
}

// Neo Brutalism:
// - Card with thick border (3px)
// - Background: Light green (#F0FFF0) jika correct, Light red (#FFF0F0) jika salah
// - Hard shadow
// - Rounded corners 20px
// - Bold heading: "Jawaban Benar! ✓" atau "Jawaban Salah ✗"
// - Explanation text: Bold typography, readable font size (16px–18px)
// - Icon: Large playful checkmark atau X icon
```

### `src/components/quiz/QuizProgress.tsx`
```typescript
interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
}

// Neo Brutalism:
// - Progress bar dengan thick black border
// - Filled: Electric blue (#2563FF)
// - Text: "Soal 1 dari 2" dengan bold typography
// - Score display jika quiz selesai
```

---

## 📄 PAGE STRUCTURE

### `src/pages/Quiz.tsx`

#### Layout:
```
┌─────────────────────────────────────────────────┐
│  Header: "GREEDY ALGORITHM QUIZ"                │
│  Progress: [Soal 1/2]   Score: 0/2              │
├─────────────────────────────────────────────────┤
│                                                  │
│  [QuestionCard]                                 │
│  ┌──────────────────────────────────────────┐  │
│  │ Kategori: TEORI                          │  │
│  │                                           │  │
│  │ Apa karakteristik utama algoritma Greedy?│  │
│  │                                           │  │
│  │ [ ] A) Optimal global di setiap langkah  │  │
│  │ [ ] B) Pertimbang semua kemungkinan      │  │
│  │ [ ] C) Gunakan dynamic programming       │  │
│  │ [ ] D) Pertimbang keputusan sebelumnya   │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
│  [FeedbackCard] - Show setelah jawab            │
│  ┌──────────────────────────────────────────┐  │
│  │ ✓ JAWABAN BENAR!                         │  │
│  │                                           │  │
│  │ Penjelasan detail...                     │  │
│  │                                           │  │
│  │ [Soal Berikutnya →]                      │  │
│  └──────────────────────────────────────────┘  │
│                                                  │
├─────────────────────────────────────────────────┤
│  [Soal Berikutnya] atau [Lihat Hasil]          │
└─────────────────────────────────────────────────┘
```

#### State Management:
```typescript
const [quizSession, setQuizSession] = useState<QuizSession>(initializeQuiz());
const [selectedOption, setSelectedOption] = useState<string | null>(null);
const [showFeedback, setShowFeedback] = useState(false);

function initializeQuiz(): QuizSession {
  // Shuffle & pick 2 random questions dari pool
  const randomQuestions = shuffleArray(ALL_QUIZ_QUESTIONS).slice(0, 2);
  return {
    questions: randomQuestions,
    currentQuestionIndex: 0,
    answers: [],
    isCompleted: false,
  };
}

function handleOptionSelect(optionId: string) {
  setSelectedOption(optionId);
  setShowFeedback(true);
  // Record answer
}

function handleNextQuestion() {
  const nextIndex = quizSession.currentQuestionIndex + 1;
  if (nextIndex < quizSession.questions.length) {
    setQuizSession(prev => ({ ...prev, currentQuestionIndex: nextIndex }));
    setSelectedOption(null);
    setShowFeedback(false);
  } else {
    // Quiz selesai
    setQuizSession(prev => ({ ...prev, isCompleted: true }));
  }
}
```

---

## 🔗 ROUTING & NAVIGATION

### Update `src/router/index.tsx`:
```typescript
import Quiz from '../pages/Quiz';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
  {
    path: '/quiz',  // [NEW]
    element: <Quiz />,
  },
  {
    path: '/about',
    element: <About />,
  },
];
```

---

## 🔘 BUTTON PLACEMENT

### 1. Homepage (`Home.tsx`)
**Location:** Bawah section "Demo Visualisasi" atau sebelum "Keuntungan & Kerugian"

```
┌─────────────────────────┐
│  [Lihat Visualisasi     │
│   Demo →]               │
│                         │
│  [Mulai Quiz →]  [NEW]  │
└─────────────────────────┘
```

**Button Style (Neo Brutalism):**
- Thick black border (3px)
- Electric blue background (#2563FF)
- White text "MULAI KUIS"
- Hard shadow (6px 6px 0px rgba(0,0,0,0.2))
- Hover: translateY(-4px), enhanced shadow
- Padding: 16px 32px
- Font weight: 700
- Border radius: 20px

### 2. Demo Page (`Demo.tsx`)
**Location:** Paling bawah, setelah "Step-by-Step Algorithm" section

```
┌──────────────────────────────────┐
│  [Kembali ke Home ←]             │
│                                  │
│  [Mulai Quiz →]        [NEW]     │
│  [Lihat Penjelasan Teori ←]      │
└──────────────────────────────────┘
```

---

## 📊 QUIZ FLOW

### Flow Diagram:
```
1. User klik "Mulai Quiz" di Home/Demo
   ↓
2. Quiz initialized dengan 2 soal random dari pool
   ↓
3. QuestionCard ditampilkan (Soal 1/2)
   ↓
4. User klik salah satu option
   ↓
5. FeedbackCard muncul dengan penjelasan
   ↓
6. User klik "Soal Berikutnya →"
   ↓
7. QuestionCard Soal 2/2 ditampilkan
   ↓
8. User jawab → FeedbackCard
   ↓
9. Quiz selesai → Tampilkan score (X/2)
   ↓
10. Button options:
    - [Mulai Quiz Lagi] → Reset & random soal baru
    - [Kembali ke Home] → Navigate to Home
    - [Lihat Demo] → Navigate to Demo
```

---

## 💾 DATA MANAGEMENT

### Quiz Data Organization (`src/utils/quizData.ts`):
```typescript
// Question Bank (Minimal 20 soal)
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // Teori (8+)
  // Perhitungan (8+)
  // Kelebihan/Kekurangan (6+)
  // Konsep (4+)
];

// Utility Functions
export function getRandomQuestions(count: number): QuizQuestion[] {
  return shuffleArray(QUIZ_QUESTIONS).slice(0, count);
}

export function calculateScore(answers: Answer[]): number {
  return answers.filter(a => a.isCorrect).length;
}

export function shuffleArray<T>(array: T[]): T[] {
  // Fisher-Yates shuffle
}
```

---

## 🎨 NEO BRUTALISM STYLING DETAILS

### Colors Used in Quiz:
- **Background**: Cream (#F8F4EC)
- **Cards**: Alternate antara cream, white, light blue (#E0F2FE), light yellow (#FFFACD), light green (#F0FFF0)
- **Borders**: Pure black (#000000), thick 2-3px
- **Accents**: 
  - Correct feedback: Mint green (#7DFFB3) border
  - Incorrect feedback: Coral red (#FF6B57) border
  - Category badge: Electric blue (#2563FF)
- **Shadows**: Hard offset shadows (6px 6px 0px rgba(0,0,0,0.2))
- **Typography**: Space Grotesk, bold weights (600–700)

### Animations:
- Option select: Framer Motion `whileTap` dengan scale 0.98
- Card transitions: `fadeIn` + `slideUp` saat question change
- Feedback appear: `fadeIn` dengan stagger animation
- Button hover: `translateY(-4px)` + shadow enhance
- Progress bar fill: Smooth transition dengan duration 400ms

---

## ✅ SUCCESS CRITERIA

- ✅ Quiz page fully functional dengan 2 soal per session
- ✅ Minimal 20+ soal di pool (diverse & educational)
- ✅ Random selection setiap kali mulai quiz baru
- ✅ Instant feedback dengan penjelasan detail
- ✅ Neo Brutalism styling konsisten dengan design website
- ✅ Responsive di semua device sizes
- ✅ Smooth animations menggunakan Framer Motion
- ✅ Score tracking & display
- ✅ Button "Mulai Quiz" di Home & Demo pages
- ✅ Navigation back to Home/Demo after quiz complete
- ✅ Accessible & readable (good contrast ratio)
- ✅ No breaking changes ke existing features/logic

---

## 🔄 IMPLEMENTATION CHECKLIST

- [ ] Buat `src/utils/quizData.ts` dengan 20+ soal
- [ ] Buat `src/pages/Quiz.tsx` page utama
- [ ] Buat `src/components/quiz/QuestionCard.tsx`
- [ ] Buat `src/components/quiz/OptionButton.tsx`
- [ ] Buat `src/components/quiz/FeedbackCard.tsx`
- [ ] Buat `src/components/quiz/QuizProgress.tsx`
- [ ] Update routing di `src/router/index.tsx`
- [ ] Add "Mulai Quiz" button di `Home.tsx`
- [ ] Add "Mulai Quiz" button di `Demo.tsx`
- [ ] Test quiz flow (2 soal, feedback, navigation)
- [ ] Test responsive di mobile/tablet
- [ ] Verify Neo Brutalism styling consistent
- [ ] Test random question selection
- [ ] Verify no breaking changes ke existing features

---

## 📝 NOTES

- **Pool Soal**: Bisa ditambah/dikurangi sesuai kebutuhan, minimal 20 soal untuk variety
- **Difficulty**: Mix antara easy (teori), medium (perhitungan), dan hard (edge cases)
- **Penjelasan**: Harus detail & educational, bukan cuma jawaban
- **Mobile**: Pastikan button options tidak overlap di mobile screen
- **Performance**: Random selection harus instant, tidak ada loading delay
- **Accessibility**: Ensure proper color contrast & readable font sizes

---

**Happy coding the quiz feature! 🎓✨**