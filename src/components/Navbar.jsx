import React from 'react';
import { Home, User, Briefcase, Code, Mail, FileText } from 'lucide-react';
import Dock from './Dock';

export default function Navbar() {
  const items = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Mail, label: 'Contact', href: '#contact' },
    { icon: FileText, label: 'Resume', href: '/CharansResume.pdf' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <Dock items={items} />
    </nav>
  );
}
