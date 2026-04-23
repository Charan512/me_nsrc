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
      className="relative flex aspect-square items-center justify-center rounded-full bg-slate-800/50 backdrop-blur-md border border-slate-700/50 hover:bg-slate-700/50 transition-colors group"
    >
      <Icon className="w-1/2 h-1/2 text-slate-300 group-hover:text-white transition-colors" />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
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
      className="flex items-center justify-center gap-4 px-4 py-3 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-white/10"
    >
      {items.map((item, i) => (
        <DockItem key={i} {...item} mouseX={mouseX} />
      ))}
    </div>
  );
}
