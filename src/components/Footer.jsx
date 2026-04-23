import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 pointer-events-auto bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[var(--text-dim)] font-mono text-sm">
          Sri Ram Charan Nalla © 2026
        </div>
        
        <div className="flex items-center gap-6 text-[var(--text-mid)] text-sm">
          <a href="mailto:nvsk72@gmail.com" className="hover:text-[var(--blue)] transition-colors">nvsk72@gmail.com</a>
          <a href="https://linkedin.com/in/nsrcharan" className="hover:text-[var(--blue)] transition-colors">LinkedIn</a>
          <a href="https://github.com/Charan512" className="hover:text-[var(--blue)] transition-colors">GitHub</a>
        </div>

        <div className="text-[var(--text-dim)] font-mono text-sm group relative cursor-help border-b border-dashed border-[var(--bg2)]">
          Built with caffeine & curiosity
          <span className="absolute bottom-full right-0 mb-2 w-max bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            // TODO: sleep()
          </span>
        </div>
      </div>
    </footer>
  );
}
