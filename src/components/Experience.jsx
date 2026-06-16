import React from 'react';
import { motion } from 'framer-motion';
import { RiAwardLine } from 'react-icons/ri';

const cardVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const certVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.4 + i * 0.1 },
  }),
};

const experiences = [
  {
    id: 1,
    period: 'May 2026 – Present',
    active: true,
    role: 'AI Intern',
    company: 'Stikbook Inc.',
    location: 'Remote',
    bullets: [
      'Automated high-volume data pipelines using n8n, enabling the rapid acquisition, cleaning, and preprocessing of dozens of diverse datasets without manual bottlenecks.',
      'Engineered generalized Exploratory Data Analysis (EDA) scripts to automatically extract statistical features and visualize distributions across varying data structures.',
      'Accelerated model experimentation by building scalable training loops for both classical ML (scikit-learn) and neural networks (TensorFlow), rapidly evaluating baselines at scale.',
    ],
    tags: ['Python', 'n8n', 'EDA', 'TensorFlow', 'Scikit-learn', 'Data Pipelines'],
  },
  {
    id: 2,
    period: 'Oct 2025 – Feb 2026',
    active: false,
    role: 'AI/ML Engineer Intern',
    company: 'Shamgar Software Solutions',
    location: 'Remote',
    bullets: [
      'Engineered a Random Forest yield predictor (97.6% R²) and Gradio app on 19.6K+ records, optimizing accuracy by resolving data leakage and creating interaction features.',
      'Trained an EEG signal classifier for Brain-Computer Interfaces, iteratively optimizing the model to boost peak validation accuracy to 78.24% from a 50% baseline.',
      'Spearheaded data processing and exploratory data analysis on an EMG dataset, extracting key features and resolving dataset inconsistencies for a prosthetic control model.',
    ],
    tags: ['Python', 'Random Forest', 'Gradio', 'EEG/EMG', 'Scikit-learn', 'EDA'],
  },
  {
    id: 3,
    period: 'April 2026 – Present',
    active: true,
    role: 'AI Training Specialist',
    company: 'Deccan AI',
    location: 'Freelance',
    bullets: [
      'Successfully completed the rigorous Training & Evaluation phase to join the vetted Deccan AI Experts network.',
      'Evaluated and refined large language models via human-in-the-loop workflows, ensuring high accuracy, logical consistency, and adherence to complex technical constraints.',
      'Participated in The Catalyst Hackathon, architecting Talent Radar — an autonomous multi-agent AI recruitment engine — within 48 hours, securing 2nd place among 500+ developers.',
    ],
    tags: ['LLM Evaluation', 'RLHF', 'Prompt Engineering'],
  },
];

const certifications = [
  { label: 'Google AI-ML Virtual Internship', issuer: 'Eduskills Foundation' },
  { label: 'IBM Deep Learning Fundamentals', issuer: 'IBM' },
  { label: 'Cisco Python Essentials 1', issuer: 'Cisco' },
  { label: 'Cisco Python Essentials 2', issuer: 'Cisco' },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">/ career</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-accent to-purple-500 rounded-full" />
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — desktop only */}
        <div className="hidden md:block absolute left-[1.85rem] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent" />

        <div className="flex flex-col gap-10 md:gap-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="relative flex flex-col md:flex-row gap-0 md:gap-10"
            >
              {/* Timeline node */}
              <div className="hidden md:flex flex-col items-center shrink-0 w-[3.7rem]">
                <div
                  className={`relative z-10 w-4 h-4 rounded-full border-2 border-accent mt-1 shadow-[0_0_12px_rgba(59,158,255,0.5)] transition-all duration-300 ${
                    exp.active ? 'bg-accent animate-pulse' : 'bg-bg'
                  }`}
                />
              </div>

              {/* Card */}
              <div className="group flex-1 bg-bg2/70 border border-white/8 rounded-3xl p-6 sm:p-8 hover:border-accent/35 hover:shadow-[0_20px_50px_-20px_rgba(59,158,255,0.2)] transition-all duration-500 backdrop-blur-xl">
                {/* Active badge */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-accent font-mono text-[11px] mb-4 border ${exp.active ? 'bg-accent/10 border-accent/25' : 'bg-white/5 border-white/10 text-txt-dim'}`}>
                      {exp.active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
                      )}
                      {exp.period}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-txt-mid font-medium mt-1 text-sm sm:text-base">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-txt-dim text-sm sm:text-base leading-relaxed">
                      <span className="text-accent mt-1 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                {exp.tags && (
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-accent/5 border border-accent/15 text-accent font-mono text-[10px] tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-20"
      >
        <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">/ credentials</p>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-8">Certifications</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={certVariants}
              className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/8 bg-bg2/60 hover:border-accent/30 hover:bg-bg2/90 transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <RiAwardLine className="text-accent w-5 h-5" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-snug">{cert.label}</p>
                <p className="text-txt-dim font-mono text-[11px] mt-0.5 tracking-wide">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
