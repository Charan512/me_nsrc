import "./globals.css";
import { ResumeModalProvider } from "@/context/ResumeModalContext";
import ResumeModal from "@/components/ResumeModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://nsrcharan.vercel.app"),
  title: "Sri Ram Charan Nalla | nsrcharan — AI & Full-Stack Developer",
  description: "Portfolio of Sri Ram Charan Nalla (nsrcharan) — AI engineer, full-stack and mobile developer. Building agentic systems, LLM pipelines, and production-ready web apps.",
  keywords: "sri ram charan, Sri Ram Charan, Sri Ram Charan Nalla, nsrcharan, nsrc, AI developer, full stack developer, portfolio, LLM, FastAPI, React, Flutter",
  authors: [{ name: "Sri Ram Charan Nalla" }],
  openGraph: {
    title: "Sri Ram Charan Nalla | nsrcharan",
    description: "AI engineer and full-stack developer. Building agentic systems, LLM pipelines, and production-ready apps.",
    url: "https://nsrcharan.vercel.app",
    type: "website",
    images: [
      {
        url: "/api/og", // We will build an OG API route
        width: 1200,
        height: 630,
        alt: "Sri Ram Charan Nalla Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Ram Charan Nalla | nsrcharan",
    description: "AI engineer and full-stack developer. Agentic systems, LLMs, React, Flutter.",
    images: ["/api/og"],
  },
  alternates: {
    canonical: "https://nsrcharan.vercel.app",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sri Ram Charan Nalla",
    alternateName: "nsrcharan",
    url: "https://nsrcharan.vercel.app",
    jobTitle: "AI & Full-Stack Developer",
    sameAs: [
      "https://github.com/Charan512",
      "https://www.linkedin.com/in/sri-ram-charan/"
    ],
    knowsAbout: ["React", "Node.js", "FastAPI", "Flutter", "Machine Learning", "Agentic AI", "Next.js", "MongoDB", "Python"]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var palette = [
                    { hex: '#3b9eff', dim: '#1d4ed8', glow: '#3b9eff33', rgb: '59,158,255', contrastHex: '#34d399', contrastDim: '#059669', contrastRgb: '52,211,153', cardGlow: 'rgba(59,158,255,0.60)', cardInnerGradient: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)' },
                    { hex: '#d4a373', dim: '#a07840', glow: '#d4a37333', rgb: '212,163,115', contrastHex: '#5eead4', contrastDim: '#0f766e', contrastRgb: '94,234,212', cardGlow: 'rgba(212,163,115,0.52)', cardInnerGradient: 'linear-gradient(145deg,#5e3a1a8c 0%,#d4a37344 100%)' },
                    { hex: '#f43f5e', dim: '#be123c', glow: '#f43f5e33', rgb: '244,63,94', contrastHex: '#fbbf24', contrastDim: '#d97706', contrastRgb: '251,191,36', cardGlow: 'rgba(244,63,94,0.52)', cardInnerGradient: 'linear-gradient(145deg,#6e1f2a8c 0%,#fb718544 100%)' },
                    { hex: '#10b981', dim: '#059669', glow: '#10b98133', rgb: '16,185,129', contrastHex: '#38bdf8', contrastDim: '#0284c7', contrastRgb: '56,189,248', cardGlow: 'rgba(16,185,129,0.52)', cardInnerGradient: 'linear-gradient(145deg,#1a4a3a8c 0%,#6ee7b744 100%)' },
                    { hex: '#38bdf8', dim: '#0284c7', glow: '#38bdf833', rgb: '56,189,248', contrastHex: '#a78bfa', contrastDim: '#7c3aed', contrastRgb: '167,139,250', cardGlow: 'rgba(56,189,248,0.55)', cardInnerGradient: 'linear-gradient(145deg,#1a3a508c 0%,#7dd3fc44 100%)' }
                  ];
                  var idx = Math.floor(Math.random() * palette.length);
                  sessionStorage.setItem('portfolio_accent_idx', idx);
                  var accent = palette[Math.min(idx, palette.length - 1)];
                  
                  var css = ':root { ' +
                    '--color-accent: ' + accent.hex + '; ' +
                    '--color-accent-dim: ' + accent.dim + '; ' +
                    '--color-accent-glow: ' + accent.glow + '; ' +
                    '--accent-rgb: ' + accent.rgb + '; ' +
                    '--color-contrast: ' + accent.contrastHex + '; ' +
                    '--color-contrast-dim: ' + accent.contrastDim + '; ' +
                    '--contrast-rgb: ' + accent.contrastRgb + '; ' +
                    '--card-glow-color: ' + accent.cardGlow + '; ' +
                    '--card-inner-gradient: ' + accent.cardInnerGradient + '; ' +
                  '}';
                  
                  var style = document.createElement('style');
                  style.id = 'dynamic-accent-theme';
                  style.textContent = css;
                  document.head.appendChild(style);
                } catch(e) {}
              })();
            `
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ResumeModalProvider>
          <div className="min-h-screen w-full bg-bg text-txt font-sans relative pb-24 md:pb-0">
            {/* Availability Marker — desktop only */}
            <div className="hidden md:block fixed top-8 left-10 z-50 group pointer-events-auto">
              <a
                href="#contact"
                className="font-mono text-2xl font-black tracking-tighter text-white hover:text-accent transition-colors duration-300 mix-blend-difference"
              >
                .open
              </a>
              <span className="absolute top-full left-0 mt-3 whitespace-nowrap rounded-xl border border-accent/20 bg-bg2/90 px-3 py-2 text-xs font-mono text-txt-mid opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                Open to internships / freelance / full-time
              </span>
            </div>

            <Navbar />
            
            {/* Main Content */}
            <main className="relative z-10">
              {children}
            </main>

            <Footer />
            <ResumeModal />
          </div>
        </ResumeModalProvider>
      </body>
    </html>
  );
}
