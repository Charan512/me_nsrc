import React from 'react';
import SplashCursor from './reactbits/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] font-sans relative selection:bg-[var(--blue-glow)] selection:text-[var(--blue)]">
      {/* Background Effect */}
      <SplashCursor />
      
      {/* Navigation Dock */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-24" id="about">
          <div className="grid lg:grid-cols-2 gap-12 items-center pointer-events-auto">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="h-1 w-20 bg-[var(--blue)] rounded mb-8"></div>
              <p className="text-lg text-[var(--text-mid)] leading-relaxed mb-6">
                I'm Sri Ram Charan Nalla — a 3rd year AI & ML student at SRKR Engineering College. I'm a full-stack developer who builds complete products: polished React UIs, robust Node/Express/FastAPI backends, and ML systems that actually think.
              </p>
              <p className="text-lg text-[var(--text-mid)] leading-relaxed group relative cursor-help inline-block border-b border-dashed border-[var(--bg2)]">
                Off-screen I'm deep in anime arcs — drawing quiet lessons from loud stories.
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Subaru would've given up. I don't.
                </span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--bg2)] border border-white/5 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-white mb-2">Full-Stack</div>
                <div className="text-sm text-[var(--text-dim)] font-mono">React / Node / FastAPI</div>
              </div>
              <div className="bg-[var(--bg2)] border border-white/5 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-[var(--blue)] mb-2">ML / DL</div>
                <div className="text-sm text-[var(--text-dim)] font-mono">Vision & NLP Pipelines</div>
              </div>
              <div className="bg-[var(--bg2)] border border-white/5 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-white mb-2">8.87</div>
                <div className="text-sm text-[var(--text-dim)] font-mono">Current CGPA</div>
              </div>
              <div className="bg-[var(--bg2)] border border-white/5 p-6 rounded-2xl text-center group relative cursor-help">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-sm text-[var(--text-dim)] font-mono">Episodes</div>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Power level: over 9000
                </span>
              </div>
            </div>
          </div>
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-4 md:px-10 py-24" id="experience">
          <div className="pointer-events-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience & Achievements</h2>
            <div className="h-1 w-20 bg-[var(--blue)] rounded mb-12"></div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="flex flex-col gap-6">
                <div className="bg-[var(--bg2)] border border-white/5 p-8 rounded-2xl hover:border-[var(--blue-dim)] transition-colors">
                  <div className="text-[var(--blue)] font-mono text-sm mb-2">Mar 2025 – Jun 2025</div>
                  <h3 className="text-2xl font-bold text-white mb-1">AI Intern</h3>
                  <div className="text-[var(--text-mid)] mb-4">Adverk Technologies Pvt. Ltd. · Remote</div>
                  <ul className="text-[var(--text-dim)] list-disc ml-4 space-y-2">
                    <li>Trained and evaluated supervised ML models on real-world data</li>
                    <li>Data preprocessing and feature engineering to improve model performance</li>
                    <li>Built analytical dashboards and reports using MS Power BI</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-gradient-to-r from-[var(--blue-glow)] to-transparent border border-[var(--blue-dim)] p-8 rounded-2xl">
                  <div className="text-[var(--blue)] font-bold mb-1">🥇 National Winner</div>
                  <h3 className="text-xl font-bold text-white mb-2">Text Sprouts, E-Summit 2K26</h3>
                  <p className="text-[var(--text-dim)]">1st place, National Level Project Expo — Supply Chain Management solution</p>
                </div>
                
                <div className="bg-[var(--bg2)] border border-white/5 p-8 rounded-2xl">
                  <div className="text-white font-bold mb-1">🥈 National Runner-up</div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart India Hackathon 2025</h3>
                  <p className="text-[var(--text-dim)]">National level finalist (Dehradun) — innovative problem-solving & technical execution</p>
                </div>

                <div className="bg-[var(--bg2)] border border-white/5 p-8 rounded-2xl">
                  <div className="text-white font-bold mb-1">🏅 Finalist</div>
                  <h3 className="text-xl font-bold text-white mb-2">Prajwalan 2025</h3>
                  <p className="text-[var(--text-dim)]">Top national team — solution architecture & prototype implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
