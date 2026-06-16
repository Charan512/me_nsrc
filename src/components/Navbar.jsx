import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Code, Mail, FileText, Trophy } from 'lucide-react';
import Dock from './Dock';
import { useResumeModal } from '../context/ResumeModalContext';

export default function Navbar() {
  const [activeId, setActiveId] = useState('home');
  const { open } = useResumeModal();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'achievements', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current) {
        setActiveId(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const items = [
    { icon: Home,      label: 'Home',         href: '#home',         id: 'home' },
    { icon: User,      label: 'About',        href: '#about',        id: 'about' },
    { icon: Code,      label: 'Projects',     href: '#projects',     id: 'projects' },
    { icon: Briefcase, label: 'Experience',   href: '#experience',   id: 'experience' },
    { icon: Trophy,    label: 'Achievements', href: '#achievements', id: 'achievements' },
    { icon: Mail,      label: 'Contact',      href: '#contact',      id: 'contact' },
    { icon: FileText,  label: 'Resume',       id: 'resume', external: true, onAction: open },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <Dock items={items} activeId={activeId} />
    </nav>
  );
}
