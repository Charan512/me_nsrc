import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { ResumeModalProvider } from './context/ResumeModalContext';

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </div>
  );
}

function App() {
  return (
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

        {/* Navigation Dock */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <Hero />

          {/* About Section */}
          <section className="max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-28 bg-bg relative" id="about">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center"
            >
              <div className="w-full pr-0 lg:pr-10">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">About Me</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-accent to-purple-500 rounded-full mb-10"></div>

                <div className="pl-6 border-l-2 border-accent/30 space-y-8">
                  <p className="text-xl md:text-2xl text-txt-mid leading-relaxed font-medium">
                    I'm Sri Ram Charan Nalla, a 3rd year AI &amp; ML student at SRKR Engineering College. I work across full-stack web development, machine learning, and agentic AI systems.
                  </p>
                  <p className="text-lg md:text-xl text-txt-dim leading-relaxed">
                    I like building complete products: React frontends, Node.js and FastAPI services, Flutter apps, ML pipelines, and LLM-powered agents that can reason through workflows instead of just responding to prompts. I care about reliable architecture, clean implementation, and AI features that are useful in real product contexts.
                  </p>
                </div>
              </div>

              <div className="relative w-full mt-4 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[100px] rounded-full -z-10 pointer-events-none mix-blend-screen"></div>

                <div className="grid grid-cols-2 gap-3 md:gap-6">
                  <div className="bg-bg2/80 backdrop-blur-md border border-white/5 p-5 md:p-8 rounded-2xl md:rounded-3xl text-center hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_20px_40px_-15px_rgba(59,158,255,0.3)] transition-all duration-500 group">
                    <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2 md:mb-4 group-hover:from-accent group-hover:to-purple-400 transition-all">Full-Stack</div>
                    <div className="text-[10px] md:text-xs tracking-widest text-txt-dim font-mono uppercase">React / Node / FastAPI</div>
                  </div>
                  <div className="bg-bg2/80 backdrop-blur-md border border-white/5 p-5 md:p-8 rounded-2xl md:rounded-3xl text-center hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] transition-all duration-500 group">
                    <div className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2 md:mb-4 group-hover:from-purple-400 group-hover:to-pink-400 transition-all">AI / ML</div>
                    <div className="text-[10px] md:text-xs tracking-widest text-txt-dim font-mono uppercase">Vision / NLP / Agents</div>
                  </div>
                  <div className="bg-bg2/80 backdrop-blur-md border border-white/5 p-5 md:p-8 rounded-2xl md:rounded-3xl text-center hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)] transition-all duration-500 group">
                    <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2 md:mb-4 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">8.71</div>
                    <div className="text-[10px] md:text-xs tracking-widest text-txt-dim font-mono uppercase">Current CGPA</div>
                  </div>
                  <div className="bg-bg2/80 backdrop-blur-md border border-white/5 p-5 md:p-8 rounded-2xl md:rounded-3xl text-center hover:-translate-y-2 hover:border-rose-500/50 hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.3)] transition-all duration-500 group relative">
                    <div className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2 md:mb-4 group-hover:from-rose-400 group-hover:to-orange-400 transition-all">∞</div>
                    <div className="text-[10px] md:text-xs tracking-widest text-txt-dim font-mono uppercase">Learning Loop</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <Divider />
          <Projects />
          <Divider />
          <Experience />
          <Divider />
          <Achievements />
          <Divider />
          <Contact />
        </main>

        <Footer />
        <ResumeModal />
      </div>
    </ResumeModalProvider>
  );
}

export default App;
