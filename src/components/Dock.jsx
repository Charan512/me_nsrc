import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function DockItem({ icon: Icon, label, href, id, activeId, mouseX }) {
  const ref = useRef(null);
  const isActive = id === activeId;

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.a
      href={href}
      ref={ref}
      style={{ width }}
      className={`relative flex aspect-square items-center justify-center rounded-full backdrop-blur-xl border hover:bg-accent hover:border-accent group shadow-lg transition-colors ${
        isActive 
          ? 'bg-accent/80 border-accent text-white shadow-[0_0_20px_rgba(59,158,255,0.6)]' 
          : 'bg-white/10 border-white/20 text-white/80'
      }`}
    >
      <Icon className={`w-1/2 h-1/2 transition-colors ${isActive ? 'text-white' : 'group-hover:text-white'}`} />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent text-white font-bold text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        {label}
      </span>
    </motion.a>
  );
}

export default function Dock({ items, activeId }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-center justify-center gap-4 px-6 py-4 rounded-3xl bg-bg2/90 backdrop-blur-3xl border border-white/20 shadow-[0_0_50px_rgba(59,158,255,0.2)] ring-1 ring-white/5"
    >
      {items.map((item, i) => (
        <DockItem key={i} {...item} activeId={activeId} mouseX={mouseX} />
      ))}
    </div>
  );
}
