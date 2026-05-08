# 🎨 Neo Brutalism Redesign Prompt
## Greedy Coin Change - Visual Theme Transformation

---

## 📋 BRIEF
Redesign the Greedy Coin Change website dari tema dark minimal futuristic menjadi **Neo Brutalism** yang bold, ekspresif, dan playful. 

**PENTING**: Hanya ubah tampilan (UI/styling/theme) — jangan ubah logika algoritma, struktur konten, navigasi, atau fungsionalitas apapun.

---

## 🎯 DESIGN DIRECTION

### Karakteristik Utama:
- ✅ Thick black borders pada semua elemen (cards, buttons, inputs, modals, sections)
- ✅ Strong geometric layouts dengan hard shadows (offset shadows, bukan blur-heavy)
- ✅ Flat solid colors ONLY — tidak ada gradients, glassmorphism, atau glowing effects
- ✅ High contrast visual hierarchy
- ✅ Large, playful, oversized typography
- ✅ Rounded corners medium-large (16px–28px)
- ✅ Layered card stacking effects dengan offset positioning
- ✅ Slightly asymmetrical spacing untuk dynamic feel
- ✅ Professional educational-tech aesthetic dengan personality

---

## 🎨 WARNA (Color Palette)

Ganti dari tema cyber dark menjadi:

| Warna | Hex Code | Penggunaan |
|-------|----------|-----------|
| **Background** | `#F8F4EC` | Cream/off-white utama |
| **Borders** | `#000000` | Pure black untuk semua borders |
| **Primary** | `#2563FF` | Electric blue (CTA, highlights) |
| **Accent Yellow** | `#FFD84D` | Bright yellow untuk emphasis |
| **Accent Red** | `#FF6B57` | Coral red untuk warning/disadvantages |
| **Accent Green** | `#7DFFB3` | Mint green untuk advantages |
| **Accent Purple** | `#A78BFA` | Soft purple untuk secondary accents |
| **Text Dark** | `#1A1A1A` | Dark text pada light backgrounds |
| **Text Light** | `#FFFFFF` | White text untuk dark sections |

---

## 📝 TIPOGRAFI

Gunakan **bold modern sans serif**:
- **Primary Font**: Space Grotesk, Clash Display, Satoshi, atau General Sans
- **Headings**: Oversized dan impactful (gunakan ukuran lebih besar dari sebelumnya)
- **Body Text**: Clean dan readable, tetap gunakan teks original dari project

---

## 🧩 KOMPONEN STYLES

### Button
```
- Thick black border (3–4px)
- Hard shadow (offset shadow, bukan blur)
- Bold text, ALL CAPS atau Title Case
- Large padding (14px–18px vertical, 24px–32px horizontal)
- Slight hover movement effect (translateY -2px atau -4px)
- Flat solid background color
- No gradient, no glow
```

### Card / Container
```
- Layered brutalist blocks dengan offset shadow
- Thick black border (2–3px)
- Alternating background colors (cream, colored blocks, atau white)
- Uneven/playful composition — slightly rotated atau asymmetrical padding
- Rounded corners 16px–28px
- Hard shadows untuk depth effect
```

### Input Fields
```
- Flat white (#FFFFFF) background
- Thick black border (2px+)
- Bold labels positioned above atau inside
- Large padding (12px+)
- No border-radius blur — keep geometric sharp
- Focus state: thicker border atau color change
```

### Icons
```
- Outline icons dengan stroke yang lebih tebal
- Minimal tapi playful
- Size minimal 24px
```

### Shadows (Brutalist Style)
```
- Hard offset shadows: box-shadow: 4px 4px 0px rgba(0,0,0,0.3)
- Atau: 6px 6px 0px rgba(0,0,0,0.2)
- Bukan blur-heavy, gunakan offset yang jelas dan distinct
```

---

## 📄 PAGE-SPECIFIC REDESIGN

### HOME PAGE (`Home.tsx`)

#### Hero Section:
- Title: Buat HUGE dan dominant (48px–72px)
- Tambahkan floating geometric decorative elements (shapes/svgs)
- CTA button: Style seperti physical sticker/card dengan bold shadow
- Background: Tambahkan layered brutalist shapes/rectangles di belakang hero text
- Color scheme: Mix of cream background + accent colors (blue/yellow)

#### Explanation Section (Greedy Characteristics):
- Convert informational cards menjadi colorful brutalist cards
- Alternate card sizes dan positions sedikit asymmetrical
- Gunakan flat colors: yellow, blue, purple, green untuk setiap card
- Tambahkan playful numbered labels (❶ ❷ ❸)
- Hard shadows dan thick borders pada setiap card

#### Greedy Algorithm Workflow:
- Transform step cards menjadi connected brutalist blocks
- Gunakan arrows/connectors (thick strokes)
- Bold numbering untuk setiap step
- Alternating colors per step card

#### Coin Change Case Study:
- Gunakan stacked cards dengan contrasting colors
- Money breakdown terlihat seperti draggable UI panels
- Thick borders, hard shadows
- Bold typography untuk denominasi

#### Advantages & Disadvantages:
- Split into two contrasting sections
- **Advantages**: Green/mint + yellow backgrounds
- **Disadvantages**: Red/coral + yellow backgrounds
- Add comic-like emphasis blocks atau badges
- Use larger typography untuk impact

---

### DEMO PAGE (`Demo.tsx`)

#### Main Layout:
- Pertahankan two-column structure
- Left/Input Panel: Style seperti brutalist control box
- Right/Results Panel: Stacked dashboard cards dengan alternating colors

#### Input Form:
- Large chunky inputs (thick borders, 2–3px)
- Big bold CTA button dengan hover effect
- Bold labels
- Add playful hover interactions (shadow change, slight scale)
- Form spacing: generous dan breathable

#### Result Cards:
- Setiap denominasi ditampilkan sebagai colorful blocks
- Use tag-like brutalist badges
- Strong visual separation antar card
- Hard shadows, thick borders

#### Alternative Solutions Section:
- Convert menjadi stacked colorful cards
- Setiap solusi card: different background color (rotate antar: cream, light blue, light yellow, light green)
- Use numbered labels (①, ②, ③, dst)
- Hard shadows dan thick borders

#### Step-by-Step Algorithm:
- Timeline style dengan bold numbered circles (16px–24px circles)
- Visual arrows/connector lines (thick strokes)
- Setiap step terasa seperti sticky note/process card
- Alternating left-right alignment untuk dynamic feel
- Use accent colors untuk numbered circles

---

### ABOUT PAGE (`About.tsx`)

#### Profile/Team Cards:
- Transform menjadi bold identity cards
- Large avatar frames dengan thick black borders
- Add playful social icon buttons (outline icons dengan stroke tebal)
- Layered shadow effect (stacking offset shadows)
- Background: alternating cream/light colors
- Bold typography untuk nama/role

#### About Project Section:
- Large brutalist content container dengan thick border
- Big heading typography (oversized)
- Add decorative geometric shapes di around content (background rectangles, shapes)
- Magazine/editorial inspired spacing
- Use flat colors untuk section backgrounds

---

## 🔄 GLOBAL STYLING CHANGES

### Tailwind CSS Configuration:
```typescript
// Extend atau update tailwind.config.ts
extend: {
  colors: {
    cream: '#F8F4EC',
    'neo-black': '#000000',
    'neo-blue': '#2563FF',
    'neo-yellow': '#FFD84D',
    'neo-red': '#FF6B57',
    'neo-green': '#7DFFB3',
    'neo-purple': '#A78BFA',
  },
  boxShadow: {
    'neo-brutal': '4px 4px 0px rgba(0,0,0,0.3)',
    'neo-brutal-lg': '6px 6px 0px rgba(0,0,0,0.2)',
    'neo-brutal-xl': '8px 8px 0px rgba(0,0,0,0.25)',
  },
  borderWidth: {
    'neo': '3px',
  },
  borderRadius: {
    'neo': '20px',
  },
  fontSize: {
    'neo-xs': ['14px', { lineHeight: '1.5' }],
    'neo-sm': ['16px', { lineHeight: '1.5' }],
    'neo-base': ['18px', { lineHeight: '1.6' }],
    'neo-lg': ['24px', { lineHeight: '1.6' }],
    'neo-xl': ['32px', { lineHeight: '1.2' }],
    'neo-2xl': ['48px', { lineHeight: '1.1' }],
    'neo-3xl': ['64px', { lineHeight: '1.0' }],
  },
}
```

### Global CSS (index.css):
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --bg-cream: #F8F4EC;
  --black: #000000;
  --blue: #2563FF;
  --yellow: #FFD84D;
  --red: #FF6B57;
  --green: #7DFFB3;
  --purple: #A78BFA;
}

* {
  font-family: 'Space Grotesk', sans-serif;
}

body {
  background-color: var(--bg-cream);
  color: #1A1A1A;
}

/* Smooth transitions untuk hover effects */
* {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
```

---

## ⚠️ CRITICAL CONSTRAINTS

### ✅ DO:
- ✅ Ubah HANYA visual/styling/theme
- ✅ Pertahankan ALL struktur HTML/JSX
- ✅ Pertahankan ALL logika algoritma di `greedyCoin.ts`
- ✅ Pertahankan routing/navigation
- ✅ Pertahankan ALL content teks dari project original
- ✅ Update hanya Tailwind classes, colors, shadows
- ✅ Add playful interactions (hover, focus states)
- ✅ Ensure tetap responsive dan readable

### ❌ DON'T:
- ❌ Jangan ubah algoritma atau logic
- ❌ Jangan ubah struktur navigasi
- ❌ Jangan ubah content/teks
- ❌ Jangan tambah fitur baru
- ❌ Jangan gunakan glassmorphism, gradients, atau neon effects
- ❌ Jangan gunakan transparent overlays (kecuali modal dengan dark overlay)
- ❌ Jangan ubah file structure

---

## 📐 SPACING & LAYOUT

- **Section gaps**: 48px–64px (generous spacing)
- **Card padding**: 24px–32px (chunky padding)
- **Component gaps**: 16px–24px
- **Button padding**: 14px–18px (vertical), 24px–32px (horizontal)
- **Border radius**: 16px–28px untuk cards dan large elements
- **Line height**: 1.6 untuk body, 1.2–1.4 untuk headings

---

## 🎬 INTERACTION & ANIMATION

Gunakan **Framer Motion** (sudah ada di project):
- Hover button: `translateY(-4px)` + shadow change
- Card hover: Slight scale increase (1.02x) atau shadow enhancement
- Page transitions: Fade in + slide up gentle
- Keep animations SHORT (200ms–300ms) untuk responsiveness

---

## ✅ DELIVERABLES

Update/create:
1. **Tailwind config** dengan color & shadow utilities
2. **Components**: Update semua UI components dengan neo-brutalism styles
3. **Pages**: Update Home.tsx, Demo.tsx, About.tsx dengan new color scheme & layouts
4. **Global CSS**: Add neo-brutalism global styles
5. **Typography**: Import dan apply bold sans serif fonts

---

## 🎯 SUCCESS CRITERIA

Website harus:
- ✅ Look bold, modern, dan playful (Neo Brutalism style)
- ✅ Maintain semua functionality original
- ✅ Have strong visual identity dengan consistent color palette
- ✅ Feel professional untuk educational tech
- ✅ Responsive pada semua device sizes
- ✅ No performance degradation
- ✅ Readable dan accessible (good contrast ratio)

---

## 📝 NOTES

- Teks & content: Gunakan ORIGINAL dari project
- Warna palette: Tidak boleh diubah/diganti
- Neo Brutalism essence: Thick borders, hard shadows, flat colors, playful asymmetry
- Educational vibe: Maintain focus pada clarity & learning experience
- Modern professional: Balance antara playful dan polished

**Happy redesigning! 🚀**