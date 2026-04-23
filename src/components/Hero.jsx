import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../reactbits/ProfileCard';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-10 pointer-events-none">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center pointer-events-auto">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 z-10"
        >
          <div className="font-mono text-[var(--blue)] text-sm tracking-widest">
            // full-stack developer · ml engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Sri Ram <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-purple-400">Charan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-mid)] max-w-xl leading-relaxed">
            I build full-stack products, ML pipelines, and REST APIs — from polished UIs to intelligent backends. Calm under pressure, precise in execution. <span className="group relative inline-block cursor-help border-b border-dashed border-[var(--text-dim)]">Relentless in iteration.
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Re:Zero — even in loops, keep moving forward
              </span>
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            {['React.js', 'Node.js', 'FastAPI', 'Flutter', 'TensorFlow', 'PostgreSQL', 'MongoDB'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-[var(--bg2)] border border-white/5 text-sm font-mono text-[var(--text-mid)]">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a href="/CharansResume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-[var(--blue)] text-white font-bold hover:bg-blue-500 transition-all shadow-[0_0_20px_var(--blue-glow)] flex items-center gap-2">
              Download Resume ↗
            </a>
            <a href="#projects" className="px-8 py-4 rounded-xl bg-[var(--bg2)] border border-[var(--blue-dim)] text-[var(--text)] font-bold hover:bg-[var(--bg3)] transition-all flex items-center gap-2">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Image/Card Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex justify-center lg:justify-end h-[540px] pointer-events-auto"
        >
          <ProfileCard
            name="Sri Ram Charan Nalla"
            title="Full-Stack & ML Engineer"
            handle="Charan512"
            status="Open to Work"
            contactText="Hire Me"
            avatarUrl="/me.jpg"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => window.location.href = '#contact'}
          />
        </motion.div>

      </div>
    </section>
  );
}
