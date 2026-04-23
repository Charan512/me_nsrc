import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from '../reactbits/ProfileCard';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-48 px-6 md:px-12">
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 z-10"
        >
          <div className="font-mono text-accent text-sm tracking-widest uppercase">
            // full-stack developer · ml engineer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-normal leading-snug">
            Sri Ram <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Charan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-txt-mid max-w-2xl leading-loose">
            I build full-stack products, ML pipelines, and REST APIs — from polished UIs to intelligent backends. Calm under pressure, precise in execution.{' '}
            <span className="group relative inline-block cursor-help border-b border-dashed border-txt-dim">
              Relentless in iteration.
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-bg3 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                Re:Zero — even in loops, keep moving forward
              </span>
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            {['React.js', 'Node.js', 'FastAPI', 'Flutter', 'TensorFlow', 'PostgreSQL', 'MongoDB'].map(skill => (
              <span key={skill} className="px-4 py-2 rounded-full bg-bg2 border border-white/10 text-sm font-mono text-txt-mid hover:border-accent-dim hover:text-accent transition-all duration-300">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <a href="/CharansResume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-accent text-white font-bold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(59,158,255,0.3)] hover:shadow-[0_0_40px_rgba(59,158,255,0.5)] flex items-center gap-2">
              Download Resume ↗
            </a>
            <a href="#projects" className="px-8 py-4 rounded-xl bg-bg2 border border-accent-dim/50 text-txt font-bold hover:bg-bg3 hover:border-accent-dim transition-all flex items-center gap-2">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Image/Card Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex justify-center lg:justify-end"
          style={{ height: '540px' }}
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
