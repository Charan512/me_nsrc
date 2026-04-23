import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function DockItem({ icon: Icon, label, href, mouseX }) {
  const ref = useRef(null);

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
      className="relative flex aspect-square items-center justify-center rounded-full bg-slate-800/80 backdrop-blur-md border border-white/10 hover:bg-accent/20 hover:border-accent/50 transition-colors group shadow-lg"
    >
      <Icon className="w-1/2 h-1/2 text-slate-300 group-hover:text-white transition-colors" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent text-white font-bold text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        {label}
      </span>
    </motion.a>
  );
}

export default function Dock({ items }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex items-center justify-center gap-4 px-6 py-4 rounded-3xl bg-slate-900/80 backdrop-blur-2xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
    >
      {items.map((item, i) => (
        <DockItem key={i} {...item} mouseX={mouseX} />
      ))}
    </div>
  );
}
