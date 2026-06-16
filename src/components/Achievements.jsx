import React from 'react';
import { motion } from 'framer-motion';
import { GiTrophyCup } from 'react-icons/gi';
import { PiMedalFill } from 'react-icons/pi';
import { RiAwardLine, RiLightbulbFlashLine } from 'react-icons/ri';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const featuredAchievements = [
  {
    id: 1,
    badge: 'Major Achievement',
    title: 'Smart India Hackathon 2025',
    description:
      'National-level finalist at Dehradun, recognized for rapid problem-solving and presenting a working technical solution under intense time pressure.',
    recognition: 'National Finalist',
    recognitionLabel: 'Recognition',
    Icon: PiMedalFill,
    borderClass: 'border-slate-300/15',
    bgClass: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(51,65,85,0.42))]',
    topBarClass: 'bg-gradient-to-r from-slate-100 via-accent to-slate-500',
    iconClass: 'text-slate-200/10',
    badgeBorderClass: 'border-slate-300/20 bg-slate-300/10 text-slate-200',
    hoverBorderClass: 'hover:border-slate-300/35',
    hoverShadowClass: 'hover:shadow-[0_24px_50px_-24px_rgba(226,232,240,0.35)]',
    recognitionTextClass: 'text-slate-100',
    recognitionPanelClass: 'border-slate-300/20 bg-white/5',
  },
  {
    id: 2,
    badge: 'Selected Cohort',
    title: 'IDE Bootcamp 2026',
    description:
      'Selected for a 5-day national innovation and entrepreneurship program focused on design thinking, product commercialization, and pitching.',
    recognition: 'National Selection',
    recognitionLabel: 'Program',
    Icon: RiLightbulbFlashLine,
    borderClass: 'border-sky-400/15',
    bgClass: 'bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(14,165,233,0.16))]',
    topBarClass: 'bg-gradient-to-r from-sky-300 via-cyan-300 to-accent',
    iconClass: 'text-sky-300/10',
    badgeBorderClass: 'border-sky-400/20 bg-sky-400/10 text-sky-300',
    hoverBorderClass: 'hover:border-sky-400/35',
    hoverShadowClass: 'hover:shadow-[0_24px_50px_-24px_rgba(14,165,233,0.35)]',
    recognitionTextClass: 'text-sky-200',
    recognitionPanelClass: 'border-sky-400/20 bg-sky-400/5',
  },
];

const smallAchievements = [
  {
    id: 3,
    badge: '1st Place',
    title: 'Tech Sprouts, E-Summit 2K26',
    description: 'Won 1st place at a national-level project expo for a supply-chain management solution.',
    Icon: GiTrophyCup,
    badgeClass: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
    iconClass: 'text-yellow-500/60',
    hoverBorderClass: 'hover:border-yellow-500/30',
  },
  {
    id: 4,
    badge: 'Tech Team',
    title: 'ACE Executive Member',
    description: 'Executive Body Member of Association of Computer Engineers (ACE), serving in the technical team.',
    Icon: RiAwardLine,
    badgeClass: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
    iconClass: 'text-purple-500/60',
    hoverBorderClass: 'hover:border-purple-500/30',
  },
  {
    id: 5,
    badge: 'Finalist',
    title: 'Prajwalan 2025',
    description: 'Recognized as a top national team for solution architecture and rapid prototype execution.',
    Icon: RiAwardLine,
    badgeClass: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
    iconClass: 'text-amber-500/60',
    hoverBorderClass: 'hover:border-amber-500/30',
  },
  {
    id: 6,
    badge: 'National Participant',
    title: 'NHIDE 2026',
    description: 'Competed at Bilaspur in a national hackathon on innovation, design, and entrepreneurship.',
    Icon: RiAwardLine,
    badgeClass: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
    iconClass: 'text-blue-500/60',
    hoverBorderClass: 'hover:border-blue-500/30',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">/ recognition</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Achievements
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
      </motion.div>

      {/* Featured cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5"
      >
        {featuredAchievements.map((ach) => {
          const { Icon } = ach;
          return (
            <motion.div
              key={ach.id}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-3xl border ${ach.borderClass} ${ach.bgClass} p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:-translate-y-1 ${ach.hoverBorderClass} ${ach.hoverShadowClass}`}
            >
              {/* Top accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 ${ach.topBarClass}`} />

              {/* Watermark icon */}
              <div className={`absolute -right-6 -top-8 pointer-events-none ${ach.iconClass}`}>
                <Icon className="text-[8rem] sm:text-[10rem] rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${ach.badgeBorderClass}`}>
                    {ach.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{ach.title}</h3>
                  <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-txt-mid">
                    {ach.description}
                  </p>
                </div>
                <div className={`shrink-0 rounded-2xl border px-4 py-3 text-left sm:text-right ${ach.recognitionPanelClass}`}>
                  <div className="text-xs font-mono uppercase tracking-widest text-txt-dim">{ach.recognitionLabel}</div>
                  <div className={`mt-1 text-base sm:text-lg font-black ${ach.recognitionTextClass}`}>
                    {ach.recognition}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Small cards grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {smallAchievements.map((ach) => {
          const { Icon } = ach;
          return (
            <motion.div
              key={ach.id}
              variants={itemVariants}
              className={`group rounded-2xl border border-white/8 bg-bg2/80 p-5 sm:p-6 transition-all duration-300 ${ach.hoverBorderClass} hover:bg-bg3/60 hover:-translate-y-0.5`}
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className={`rounded-full border px-3 py-1 text-xs font-bold ${ach.badgeClass}`}>
                  {ach.badge}
                </span>
                <Icon className={`text-2xl ${ach.iconClass}`} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white leading-snug">{ach.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-txt-dim">{ach.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
