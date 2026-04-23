import React from 'react';
import { motion } from 'framer-motion';
import SplashCursor from './reactbits/SplashCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg text-txt font-sans relative">
      {/* Background Effect */}
      <SplashCursor />
      
      {/* Navigation Dock */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        
        {/* About Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-28" id="about">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
              <div className="h-1 w-20 bg-accent rounded-full mb-8"></div>
              <p className="text-lg text-txt-mid leading-relaxed mb-6">
                I'm Sri Ram Charan Nalla — a 3rd year AI & ML student at SRKR Engineering College. I'm a full-stack developer who builds complete products: polished React UIs, robust Node/Express/FastAPI backends, and ML systems that actually think.
              </p>
              <p className="text-lg text-txt-mid leading-relaxed group relative cursor-help inline-block border-b border-dashed border-bg3">
                Off-screen I'm deep in anime arcs — drawing quiet lessons from loud stories.
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-bg3 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                  Subaru would've given up. I don't.
                </span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg2 border border-white/10 p-6 rounded-2xl text-center hover:border-accent-dim/40 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">Full-Stack</div>
                <div className="text-sm text-txt-dim font-mono">React / Node / FastAPI</div>
              </div>
              <div className="bg-bg2 border border-white/10 p-6 rounded-2xl text-center hover:border-accent-dim/40 transition-all duration-300">
                <div className="text-3xl font-bold text-accent mb-2">ML / DL</div>
                <div className="text-sm text-txt-dim font-mono">Vision & NLP Pipelines</div>
              </div>
              <div className="bg-bg2 border border-white/10 p-6 rounded-2xl text-center hover:border-accent-dim/40 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">8.87</div>
                <div className="text-sm text-txt-dim font-mono">Current CGPA</div>
              </div>
              <div className="bg-bg2 border border-white/10 p-6 rounded-2xl text-center group relative cursor-help hover:border-accent-dim/40 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">∞</div>
                <div className="text-sm text-txt-dim font-mono">Episodes</div>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-bg3 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                  Power level: over 9000
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        <Projects />

        {/* Experience & Achievements */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-28" id="experience">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience & Achievements</h2>
            <div className="h-1 w-20 bg-accent rounded-full mb-12"></div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Experience */}
              <div className="flex flex-col gap-6">
                <div className="bg-bg2 border border-white/10 p-8 rounded-2xl hover:border-accent-dim/40 transition-all duration-300 group">
                  <div className="text-accent font-mono text-sm mb-2">Mar 2025 – Jun 2025</div>
                  <h3 className="text-2xl font-bold text-white mb-1">AI Intern</h3>
                  <div className="text-txt-mid mb-4">Adverk Technologies Pvt. Ltd. · Remote</div>
                  <ul className="text-txt-dim list-disc ml-4 space-y-2">
                    <li>Trained and evaluated supervised ML models on real-world data</li>
                    <li>Data preprocessing and feature engineering to improve model performance</li>
                    <li>Built analytical dashboards and reports using MS Power BI</li>
                  </ul>
                </div>
              </div>

              {/* Achievements */}
              <div className="flex flex-col gap-6">
                <div className="bg-bg2 border border-accent-dim/30 p-8 rounded-2xl relative overflow-hidden group hover:border-accent-dim/60 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 to-transparent rounded-2xl pointer-events-none"></div>
                  <div className="relative z-10">
                    <div className="text-accent font-bold mb-1">🥇 National Winner</div>
                    <h3 className="text-xl font-bold text-white mb-2">Text Sprouts, E-Summit 2K26</h3>
                    <p className="text-txt-dim">1st place, National Level Project Expo — Supply Chain Management solution</p>
                  </div>
                </div>
                
                <div className="bg-bg2 border border-white/10 p-8 rounded-2xl hover:border-accent-dim/40 transition-all duration-300">
                  <div className="text-white font-bold mb-1">🥈 National Runner-up</div>
                  <h3 className="text-xl font-bold text-white mb-2">Smart India Hackathon 2025</h3>
                  <p className="text-txt-dim">National level finalist (Dehradun) — innovative problem-solving & technical execution</p>
                </div>

                <div className="bg-bg2 border border-white/10 p-8 rounded-2xl hover:border-accent-dim/40 transition-all duration-300">
                  <div className="text-white font-bold mb-1">🏅 Finalist</div>
                  <h3 className="text-xl font-bold text-white mb-2">Prajwalan 2025</h3>
                  <p className="text-txt-dim">Top national team — solution architecture & prototype implementation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
