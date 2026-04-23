import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 relative z-10 bg-bg pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-txt-dim font-mono text-sm">
          Sri Ram Charan Nalla © 2026
        </div>
        
        <div className="flex items-center gap-6 text-txt-mid text-sm">
          <a href="mailto:nvsk72@gmail.com" className="hover:text-accent transition-colors duration-300">nvsk72@gmail.com</a>
          <a href="https://linkedin.com/in/nsrcharan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/Charan512" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">GitHub</a>
        </div>

        <div className="text-txt-dim font-mono text-sm group relative cursor-help border-b border-dashed border-bg3">
          Built with caffeine & curiosity
          <span className="absolute bottom-full right-0 mb-2 w-max bg-bg3 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
            // TODO: sleep()
          </span>
        </div>
      </div>
    </footer>
  );
}
