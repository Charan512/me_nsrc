"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 relative z-10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-4">

        {/* Copyright */}
        <div className="text-txt-dim font-mono text-sm text-center md:text-left">
          Sri Ram Charan Nalla © 2026
        </div>

        {/* Links — wrap on mobile so nothing overflows */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-txt-mid text-sm">
          <a href="mailto:nvsk72@gmail.com" className="hover:text-accent transition-colors duration-300 whitespace-nowrap">nvsk72@gmail.com</a>
          <a href="https://linkedin.com/in/nsrcharan" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">LinkedIn</a>
          <a href="https://github.com/Charan512" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">GitHub</a>
          <a href="https://www.instagram.com/me_nsrc/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-300">Instagram</a>
        </div>

        {/* Built with */}
        <div className="text-txt-dim font-mono text-sm italic text-center md:text-right">
          Built with React, Vite, and Tailwind CSS
        </div>

      </div>
    </footer>
  );
}
