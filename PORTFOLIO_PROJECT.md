# 🚀 Sri Ram Charan Nalla — Personal Portfolio Website

> **Agent Notice:** This file is the single source of truth for this project. Read it fully before making any changes. All design decisions, content, structure, and constraints are defined here. Do not deviate without explicit instruction.

---

## 👤 Owner Profile

| Field | Detail |
|---|---|
| **Full Name** | Sri Ram Charan Nalla |
| **Phone** | +91 7989101146 |
| **Email** | nvsk72@gmail.com |
| **Location** | Chinamiram, Bhimavaram |
| **LinkedIn** | https://linkedin.com/in/nsrcharan |
| **GitHub** | https://github.com/Charan512 |
| **Role** | Full-Stack Developer · ML/DL Engineer · NLP · Conversational AI |
| **Education** | B.Tech in AI & ML — SRKR Engineering College (2023–2027), CGPA: 8.87 |
| **Status** | Open to work / available for hire |
| **Personality** | Calm, mysterious, reliable at work — childish anime fan off-screen |

---

## 🧠 Skills

> ⚠️ Agent: Sri Ram Charan is a **full-stack developer first, ML engineer second**. Present both identities equally on the portfolio. Do not reduce him to just "ML guy".

### Programming Languages
`C` `Java` `Python` `JavaScript` `HTML` `CSS`

### Full-Stack Web Development (MERN + FastAPI)
`React.js` `Node.js` `Express.js` `FastAPI`
`REST API Design` `JWT Auth` `WebSockets` `Async APIs`

### UI Development
`React.js` `HTML` `CSS` `Tailwind CSS` `Responsive Design` `Component Architecture`

> Agent note: Sri Ram Charan can build and design UIs well — not just backend. Reflect this in the About section and Hero bio.

### Backend Development
`Node.js` `Express.js` `FastAPI` `REST APIs` `Middleware` `Rate Limiting` `Authentication`

### Machine Learning & AI
`Supervised Learning` `Classification` `Feature Extraction` `Data Preprocessing`
`Model Training` `Model Evaluation` `TensorFlow` `Scikit-learn` `NumPy` `Pandas`
`Data Analytics` `NLP` `Sentiment Analysis` `Emotion Detection` `Transformer Models`
`EfficientNetV2B3` `PCA` `SVM` `Fuzzy Logic` `LLM Integration`

### Databases (not just MongoDB)
`MongoDB` `PostgreSQL` `MySQL` *(comfortable with both SQL and NoSQL)*

> Agent note: Do NOT label Sri Ram Charan as only a MongoDB developer. He works across SQL and NoSQL databases.

### Tools & Platforms
`Git` `GitHub` `Jupyter Notebook` `Android Studio`
`MS Power BI` `MS Excel` `Vercel` `Render`

### Core CS
`Data Structures` `OOP Concepts`

### Certifications
- Cisco Python Essentials 1
- Cisco Python Essentials 2
- IBM Deep Learning Fundamentals

---

## 🏆 Achievements (show these prominently)

| Award | Detail |
|---|---|
| 🥇 **Winner** — Text Sprouts, E-Summit 2K26 | 1st place, National Level Project Expo — Supply Chain Management solution |
| 🥈 **Runner-up (Finalist)** — Smart India Hackathon 2025 | National level (Dehradun) — innovative problem-solving & technical execution |
| 🏅 **Finalist** — Prajwalan 2025 | Top national team — solution architecture & prototype implementation |

---

## 💼 Experience

**AI Intern — Adverk Technologies Pvt. Ltd.** *(Remote, March 2025 – June 2025)*
- Trained and evaluated supervised ML models on real-world data
- Data preprocessing and feature engineering to improve model performance
- Built analytical dashboards and reports using MS Power BI

---

## 📦 Real Projects (from Resume — replace ALL placeholders with these)

### Project 1 — Herb Species Detection API ⭐ FEATURED
| Field | Detail |
|---|---|
| **Title** | Herb Species Detection API |
| **Description** | Scalable ML inference API using FastAPI to classify 92 herb species from images. Hybrid pipeline: EfficientNetV2B3 feature extraction + PCA dimensionality reduction + SVM classification. 96.6% accuracy with probabilistic top-k predictions. |
| **Stack** | `FastAPI` `EfficientNetV2B3` `PCA` `SVM` `Python` `Scikit-learn` |
| **Card Visual** | Loss/accuracy curve canvas — signals ML precision |
| **Badge** | Featured |

### Project 2 — Soul Connect
| Field | Detail |
|---|---|
| **Title** | Soul Connect |
| **Description** | AI mental health assistant using FastAPI, React, and MongoDB. NLP-based sentiment, emotion, and risk detection with fuzzy logic and LLM-driven responses. Real-time chat, session tracking, and emergency alert mechanisms. |
| **Stack** | `FastAPI` `React` `MongoDB` `NLP` `LLM` `Fuzzy Logic` |
| **Card Visual** | Waveform / sentiment signal canvas |

### Project 3 — Herbal Supply Chain
| Field | Detail |
|---|---|
| **Title** | Herbal Supply Chain |
| **Description** | End-to-end traceability system using MERN stack. Eliminates data opacity across multi-stage lifecycles. Deployed Hyperledger blockchain infrastructure for immutable tracking from farm to consumer. |
| **Stack** | `MongoDB` `Express.js` `React` `Node.js` `Hyperledger Blockchain` |
| **Card Visual** | Node graph / chain diagram canvas |
| **Badge** | 🥇 National Winner |

### projects.js schema (agent must follow this exactly)
```js
// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Herb Species Detection API",
    description: "Scalable ML inference API classifying 92 herb species. EfficientNetV2B3 + PCA + SVM pipeline achieving 96.6% accuracy.",
    tags: ["FastAPI", "EfficientNetV2B3", "PCA", "SVM", "Python"],
    highlightTags: ["FastAPI", "EfficientNetV2B3"],
    year: "2024",
    github: "https://github.com/Charan512",
    featured: true,
    visual: "lossChart",
    badge: "Featured",
    easterEgg: null,
  },
  {
    id: 2,
    title: "Soul Connect",
    description: "AI mental health assistant with NLP sentiment/emotion detection, fuzzy logic, LLM responses, real-time chat & emergency alerts.",
    tags: ["FastAPI", "React", "MongoDB", "NLP", "LLM"],
    highlightTags: ["FastAPI", "NLP"],
    year: "2024",
    github: "https://github.com/Charan512",
    featured: false,
    visual: "waveform",
    badge: null,
    easterEgg: "Even AI needs to listen sometimes.",
  },
  {
    id: 3,
    title: "Herbal Supply Chain",
    description: "MERN stack traceability system with Hyperledger blockchain for immutable farm-to-consumer lifecycle tracking.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Blockchain"],
    highlightTags: ["Node.js", "Blockchain"],
    year: "2024",
    github: "https://github.com/Charan512",
    featured: false,
    visual: "nodeGraph",
    badge: "🥇 National Winner",
    easterEgg: null,
  },
];
```

---

## 📱 Responsive Design (MANDATORY — every screen size must work perfectly)

> ⚠️ Agent: The portfolio MUST be fully responsive across all screen sizes — from 320px mobile to 4K desktop. No horizontal scrolling. No broken layouts. No hidden content. Test every section at every breakpoint before considering any task done.

### Breakpoints (Tailwind standard)
| Name | Width | Target Devices |
|---|---|---|
| `xs` | < 480px | Small phones (iPhone SE, Galaxy A series) |
| `sm` | 480px – 639px | Large phones (iPhone 14, Pixel) |
| `md` | 640px – 767px | Large phones landscape, small tablets |
| `lg` | 768px – 1023px | Tablets (iPad, Surface) |
| `xl` | 1024px – 1279px | Laptops, small desktops |
| `2xl` | 1280px+ | Large desktops, wide monitors |

### Section-by-Section Responsive Rules

#### Navbar
- `xl+` — full horizontal nav: logo + pill links + Resume + Hire Me buttons
- `lg` — same as xl, slightly tighter padding
- `md` and below — hamburger icon replaces pill links; Resume + Hire Me hidden; frosted full-width drawer opens on tap
- Logo always visible at all sizes
- Height: `56px` fixed at all sizes

#### Hero
- `xl+` — two columns: text left (50%), globe right (50%)
- `lg` — two columns: text left (55%), globe right (45%), globe slightly smaller
- `md` — single column, globe moves below text, centered, reduced size
- `sm` and below — single column, globe hidden entirely (too small to be useful), particles only
- Name font: `clamp(2.4rem, 6vw, 5rem)` — scales fluidly, never overflows
- Skill pills: wrap naturally, never overflow container
- CTA buttons: stack vertically on `sm` and below
- Padding: `4rem` on xl → `2rem` on md → `1.2rem` on sm

#### About
- `lg+` — two columns: bio left, orbiting ring right
- `md` and below — single column, orbiting ring hidden (`hidden md:flex`), stats go full width
- Stats grid: `2×2` on `lg+` → `2×2` on `md` → `1×4` stacked on `sm`
- Bio text: never smaller than `13px`

#### Projects
- `xl+` — featured card spans 2 columns + 2 regular cards in same row
- `lg` — featured card spans 2 columns + 2 regular cards below
- `md` — all cards single column, featured loses wide span
- `sm` and below — single column, card canvas height reduced to `120px`
- Card title: never truncate — wrap instead
- Tags: wrap naturally

#### Experience
- `lg+` — horizontal card layout
- `md` and below — vertical stacked cards
- Certification badges: wrap on small screens

#### Contact
- All sizes — centered single column, always readable
- Buttons: row on `lg+`, wrap to 2-per-row on `md`, full width stack on `sm`

#### Footer
- `md+` — two columns: left text, right easter egg
- `sm` and below — single column centered

### Typography — Fluid Scaling
```css
/* Agent: use clamp() for all major headings — never fixed px on headings */
h1 (hero name)     : clamp(2.4rem, 6vw, 5rem)
h2 (section title) : clamp(1.6rem, 3.5vw, 2.6rem)
h3 (card title)    : clamp(0.95rem, 2vw, 1.1rem)
body text          : 13px – 14px (fixed, readable at all sizes)
mono tags/labels   : 10px – 11px (fixed)
```

### Global Responsive Rules (agent must follow always)
- `overflow-x: hidden` on `body` and `#app` — no horizontal scroll ever
- All images/canvases: `max-width: 100%` — never overflow their container
- Padding pattern: `px-16 md:px-10 sm:px-5` (tighten on small screens)
- No fixed pixel widths on layout containers — use `%`, `vw`, or `max-w-*`
- Touch targets (buttons, links): minimum `44px × 44px` on mobile
- Globe canvas: resize listener on `window resize` — always redraws to fit container
- Particle canvas: same — resize on window resize
- Navbar drawer: `z-index: 99` — always above all content
- Easter egg tooltips: on mobile use `click` to toggle instead of hover (hover doesn't exist on touch)

---

## 🎨 Design Language

| Property | Value |
|---|---|
| **Theme** | Dark futuristic |
| **Primary BG** | `#03060e` |
| **Secondary BG** | `#060d1a` |
| **Tertiary BG** | `#080f1f` |
| **Accent Color** | Electric blue `#3b9eff` |
| **Accent Dim** | `#1a4a7a` |
| **Accent Glow** | `#3b9eff18` |
| **Text Primary** | `#deeeff` |
| **Text Mid** | `#4a85b0` |
| **Text Dim** | `#2a5a8a` |
| **Font — Display** | Inter (800 weight for headings) |
| **Font — Mono** | JetBrains Mono (tags, labels, nav, eyebrows) |
| **Personality Layer** | Subtle Re:Zero / anime easter eggs on hover tooltips |
| **Visitor Feeling** | "I can trust and work with this person" |

### Visual Effects
- Animated **3D rotating globe** with lat/lng grid + hub connection lines (canvas) — Hero right side
- **Glassmorphic sticky navbar** — `backdrop-filter: blur(22px)`, scroll opacity transition, active link underline dot
- **Particle network** background — mouse-reactive floating connected dots
- Per-project **canvas visualizations** — loss curve, waveform, node graph
- **Orbiting dot ring** around avatar in About section
- **Typed cycling role** text in Hero with blinking cursor
- Subtle **background grid** (`rgba(59,158,255,0.025)`) on all sections

---

## 🏗️ Tech Stack

```
Framework     : React 18 (Vite)
Styling       : Tailwind CSS
Components    : React Bits (pre-built animated components — user will provide code)
Animations    : Framer Motion (via React Bits)
3D / Canvas   : HTML5 Canvas (globe, project visuals)
Deployment    : Vercel
Version Ctrl  : GitHub — https://github.com/Charan512
Node version  : 18+
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── CharansResume.pdf           # Resume for download button
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Glassmorphic sticky nav
│   │   ├── Hero.jsx                # Globe + typed text + skills + CTA
│   │   ├── About.jsx               # Bio + orbiting ring + stats + achievements
│   │   ├── Projects.jsx            # Project cards grid
│   │   ├── Experience.jsx          # Internship + certifications
│   │   ├── Contact.jsx             # Contact buttons section
│   │   └── Footer.jsx              # Footer with easter egg
│   ├── reactbits/
│   │   └── [ComponentName].jsx     # React Bits components dropped here by user
│   ├── data/
│   │   └── projects.js             # Real project metadata (see schema above)
│   ├── hooks/
│   │   └── useTyped.js             # Typed cycling text hook
│   ├── utils/
│   │   └── canvasDrawers.js        # Canvas visual functions: lossChart, waveform, nodeGraph
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                   # CSS variables (see below)
├── index.html
├── tailwind.config.js
├── vite.config.js
├── vercel.json
└── PORTFOLIO_PROJECT.md            # This file — agent source of truth
```

---

## 📄 Sections & Content Plan

### 1. Navbar
- Sticky top, glassmorphic (`backdrop-filter: blur(22px)`)
- Logo: `[src●]` in JetBrains Mono — dot pulses
- Links: Home · About · Projects · Experience · Contact
- Active link auto-highlights on scroll with underline dot
- Right: `Resume ↗` (ghost) + `Hire Me` (solid blue)
- Hamburger on mobile → frosted drawer

### 2. Hero
- **Eyebrow tag**: `// full-stack developer · ml engineer`
- **Left**: eyebrow, name (`Sri Ram` / `Charan.`), typed role, divider, bio, skill pills, CTAs
- **Right**: rotating 3D globe canvas
- Typed roles cycle: `full-stack developer` → `building intelligent systems` → `MERN stack engineer` → `training neural networks` → `designing fast APIs` → `shipping things that work`
- Skills (show these — balanced between fullstack and ML): `React.js` `Node.js` `FastAPI` `Express.js` `TensorFlow` `Scikit-learn` `MongoDB` `PostgreSQL`
- Bio: *"I build full-stack products, ML pipelines, and REST APIs — from polished UIs to intelligent backends. Calm under pressure, precise in execution."*
- CTAs: `Download Resume` (→ `/CharansResume.pdf`) + `View Projects`
- Status badge: `● open to work`
- Easter egg on "Relentless in iteration." → `Re:Zero — even in loops, keep moving forward`

### 3. About
- Two-column: bio left, orbiting ring avatar right
- Bio:
  > "I'm Sri Ram Charan Nalla — a 3rd year AI & ML student at SRKR Engineering College. I'm a full-stack developer who builds complete products: polished React UIs, robust Node/Express/FastAPI backends, and ML systems that actually think. MongoDB, PostgreSQL — I pick what fits. Off-screen I'm deep in anime arcs — drawing quiet lessons from loud stories."
- Stats grid (2×2): `Full-Stack` · `8.85 CGPA` · `ML/DL` · `∞ Episodes`
- Easter egg on ∞: `Power level: over 9000`
- Achievements strip: 3 badge cards (Winner · Runner-up · Finalist)

### 4. Projects
- Grid: 1 featured wide card + 2 regular cards
- Data from `src/data/projects.js` — never hardcode
- Hover: `translateY(-5px)` + blue border glow

### 5. Experience
- Internship card: Adverk Technologies · AI Intern · Remote · Mar–Jun 2025
- Certifications row: Cisco Python Essentials 1 & 2 · IBM Deep Learning Fundamentals
- Extra-curricular: ACE Executive Body Member, SRKREC

### 6. Contact
- Headline: `Got a problem worth solving?`
- Sub: `I'm open to full-stack projects, ML work, UI builds & interesting collabs.`
- Easter egg sub line: *"I respond fast. Always."* → `Unlike Subaru, I reply on the first timeline`
- Buttons: `Email Me` · `GitHub` · `LinkedIn` · `Anime List`
- Email: nvsk72@gmail.com
- LinkedIn: https://linkedin.com/in/nsrcharan
- GitHub: https://github.com/Charan512

### 7. Footer
- Left: `Sri Ram Charan Nalla © 2025`
- Right easter egg: `Built with caffeine & curiosity` → `// TODO: sleep()`

---

## 🧩 React Bits Integration

> **Agent workflow when user provides a React Bits component:**
> 1. Save pasted code to `src/reactbits/[ComponentName].jsx`
> 2. Import it into the target section component
> 3. Wrap with appropriate layout div — do not modify internal logic
> 4. Pass color/font props to match the design language above
> 5. Mark the slot as ✅ in the table below

| Section | Component Slot | File | Status |
|---|---|---|---|
| Hero background | HeroBg | `src/reactbits/HeroBg.jsx` | ⏳ Awaiting |
| Navbar | Navbar | `src/reactbits/Navbar.jsx` | ⏳ Awaiting |
| Project cards | ProjectCard | `src/reactbits/ProjectCard.jsx` | ⏳ Awaiting |
| Scroll reveal | ScrollReveal | `src/reactbits/ScrollReveal.jsx` | ⏳ Awaiting |
| Typed text | TypingText | `src/reactbits/TypingText.jsx` | ⏳ Awaiting |
| Buttons | MagneticButton | `src/reactbits/MagneticButton.jsx` | ⏳ Awaiting |
| About spotlight | SpotlightCard | `src/reactbits/SpotlightCard.jsx` | ⏳ Awaiting |

---

## 🐣 Easter Eggs Map

| Location | Element | Hover Tooltip |
|---|---|---|
| Hero tagline | "Relentless in iteration." | `Re:Zero — even in loops, keep moving forward` |
| Hero skill | `PyTorch` tag | `Sharingan: pattern recognition maxed` |
| Hero skill | `Scikit-learn` tag | `Every model is a new arc` |
| About ∞ stat | Stat card | `Power level: over 9000` |
| About bio | Anime reference line | `Subaru would've given up. I don't.` |
| Projects | Soul Connect card | `Even AI needs to listen sometimes.` |
| Contact | Subtext line | `Unlike Subaru, I reply on the first timeline` |
| Contact | `Anime List` button | `MAL profile loading...` |
| Footer | Right text | `// TODO: sleep()` |

---

## ⚙️ Setup Instructions

```bash
# 1. Scaffold project
npm create vite@latest portfolio -- --template react
cd portfolio

# 2. Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion three

# 3. Configure Tailwind — tailwind.config.js
# content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]

# 4. Add Google Fonts to index.html
# Inter + JetBrains Mono via fonts.googleapis.com

# 5. Copy CharansResume.pdf into /public folder

# 6. Drop React Bits components into src/reactbits/ as user provides them

# 7. Run dev server
npm run dev

# 8. Deploy
npm install -g vercel
vercel --prod
```

### vercel.json
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### index.css — CSS variables (required in :root)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --bg: #03060e;
  --bg2: #060d1a;
  --bg3: #080f1f;
  --blue: #3b9eff;
  --blue-dim: #1a4a7a;
  --blue-glow: #3b9eff18;
  --text: #deeeff;
  --text-mid: #4a85b0;
  --text-dim: #2a5a8a;
  --mono: 'JetBrains Mono', monospace;
  --sans: 'Inter', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: var(--bg); color: var(--text); font-family: var(--sans); }
```

---

## 🎯 Agent Hard Rules (Antigravity — read before every edit)

1. **Color palette is locked** — `#03060e` bg, `#3b9eff` accent. Never substitute without instruction.
2. **JetBrains Mono** for eyebrows, tags, nav links, badges, code, footers. **Inter** for body text and headings.
3. **Easter eggs are intentional features** — never remove or "fix" them.
4. **Globe canvas stays in Hero** — it is the signature visual. Do not remove or replace.
5. **Sections are content-sized** — never add `min-height: 100vh` to any section except Hero.
6. **Glassmorphic navbar is mandatory** — `backdrop-filter: blur(22px)`, dark semi-transparent bg, electric blue border.
7. **Project cards use canvas visuals** — never replace with static images or colored placeholder boxes.
8. **Projects data lives in `src/data/projects.js`** — never hardcode project content inside JSX.
9. **Fully responsive at ALL screen sizes** — follow the detailed breakpoint rules in the `📱 Responsive Design` section above. Every section has specific layout rules per breakpoint. No exceptions. No horizontal scroll. No broken layouts on any device from 320px to 4K.
10. **React Bits components go in `src/reactbits/`** — never inline large third-party code into section files.
11. **Resume PDF** at `public/CharansResume.pdf` — Hero "Download Resume" button must link here.
12. **Real projects only** — use the 3 real projects defined in this file. Do not invent projects.
13. **Contact info is real** — email: nvsk72@gmail.com · LinkedIn: linkedin.com/in/nsrcharan · GitHub: github.com/Charan512

---

## 🔜 TODO / Roadmap

- [ ] Wire all React Bits components as user provides them (update status table above)
- [ ] Add resume PDF to `public/CharansResume.pdf`
- [ ] Fetch repos dynamically from GitHub API (`https://api.github.com/users/Charan512/repos`)
- [ ] Add contact form (EmailJS or Formspree → nvsk72@gmail.com)
- [ ] Add OG meta tags for social sharing
- [ ] Animate sections with Framer Motion scroll reveal
- [ ] Add magnetic cursor effect
- [ ] Add custom domain on Vercel
- [ ] Add animated achievement counters

---

## 📋 Changelog

| Date | Change |
|---|---|
| April 2026 | Initial project description created |
| April 2026 | Enhanced with real resume data — skills, real projects, achievements, experience, certifications, contact info |

---

*Agent: This is Sri Ram Charan Nalla's portfolio — built with precision, shipped with confidence.*
*Last updated: April 2026*
