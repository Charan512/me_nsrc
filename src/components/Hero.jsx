import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ProfileCard from '../reactbits/ProfileCard';

const allSkills = ['React.js', 'Node.js', 'FastAPI', 'Flutter', 'TensorFlow', 'PostgreSQL', 'MongoDB', 'React Native', 'Scikit-Learn', 'Power BI'];
const VISIBLE_COUNT = 6;

export default function Hero() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? allSkills : allSkills.slice(0, VISIBLE_COUNT);

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
            Sri Ram <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Charan.</span>
          </h1>

          <p className="text-lg md:text-xl text-txt-mid max-w-2xl leading-loose">
            I build full-stack products, ML pipelines, and REST APIs — from polished UIs to intelligent backends. Calm under pressure, precise in execution.{' '}
            <span className="group relative inline-block cursor-help border-b border-dashed border-txt-dim">
              Built different.
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max bg-bg3 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                I'm gonna be King of the Pirates! — Luffy
              </span>
            </span>
          </p>

          {/* Skill Chips with stagger animation + "more" toggle */}
          <div className="flex flex-wrap gap-3 mt-2 items-center">
            {visibleSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="px-4 py-2 rounded-full bg-bg2 border border-white/10 text-sm font-mono text-txt-mid hover:border-accent-dim hover:text-accent transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}

            {/* More / Less toggle */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 rounded-full bg-bg2 border border-accent-dim/40 text-sm font-mono text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              {showAll ? 'Less' : `+${allSkills.length - VISIBLE_COUNT} more`}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </motion.button>
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

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-txt-dim hover:text-accent transition-colors cursor-pointer z-20"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
