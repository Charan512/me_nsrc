import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function DockItem({ icon: Icon, label, href, id, activeId, mouseX, external, onAction }) {
  const ref = useRef(null);
  const isActive = id === activeId;

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 84, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  // Base classes shared across all states
  const baseClass = 'relative flex aspect-square items-center justify-center rounded-full backdrop-blur-xl border group shadow-lg transition-all duration-200';

  // Per-state inline styles — CSS vars resolve to the accent/contrast set by AccentContext
  const activeStyle = {
    background: 'color-mix(in srgb, var(--color-accent) 80%, transparent)',
    borderColor: 'var(--color-accent)',
    color: '#fff',
    boxShadow: '0 0 20px color-mix(in srgb, var(--color-accent) 60%, transparent)',
  };

  const externalStyle = {
    background: 'color-mix(in srgb, var(--color-contrast) 12%, transparent)',
    borderColor: 'color-mix(in srgb, var(--color-contrast) 35%, transparent)',
    color: 'color-mix(in srgb, var(--color-contrast) 90%, white)',
  };

  const normalStyle = {
    background: 'rgba(255,255,255,0.10)',
    borderColor: 'rgba(255,255,255,0.20)',
    color: 'rgba(255,255,255,0.80)',
  };

  const resolvedStyle = isActive ? activeStyle : external ? externalStyle : normalStyle;

  const children = (
    <>
      <Icon className="w-1/2 h-1/2" />
      {/* Tooltip */}
      <span
        className="absolute -top-10 left-1/2 -translate-x-1/2 font-bold text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl"
        style={
          external
            ? { background: 'var(--color-contrast)', color: '#03060e' }
            : { background: 'var(--color-accent)', color: '#fff' }
        }
      >
        {label}
      </span>
    </>
  );

  // Hover override via CSS — inject a data-external attribute to drive :hover styles
  const hoverStyle = external
    ? { '--hover-bg': 'var(--color-contrast)', '--hover-border': 'var(--color-contrast)' }
    : { '--hover-bg': 'var(--color-accent)', '--hover-border': 'var(--color-accent)' };

  const combinedStyle = { width, ...resolvedStyle, ...hoverStyle };

  const sharedProps = {
    ref,
    'aria-label': label,
    style: combinedStyle,
    className: `${baseClass} hover:[background:var(--hover-bg)] hover:[border-color:var(--hover-border)] hover:text-bg`,
  };

  if (onAction) {
    return (
      <motion.button {...sharedProps} onClick={onAction} type="button">
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      {...sharedProps}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </motion.a>
  );
}

export default function Dock({ items, activeId }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex max-w-[calc(100vw-1.5rem)] items-center justify-center gap-2 rounded-3xl border border-white/20 bg-bg2/90 px-3 py-3 ring-1 ring-white/5 backdrop-blur-3xl sm:gap-3 sm:px-5 sm:py-4 md:gap-5 md:px-7 md:py-5"
      style={{ boxShadow: '0 0 50px color-mix(in srgb, var(--color-accent) 20%, transparent)' }}
    >
      {items.map((item, i) => (
        <DockItem key={i} {...item} activeId={activeId} mouseX={mouseX} />
      ))}
    </div>
  );
}
