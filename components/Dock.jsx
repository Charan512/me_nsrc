"use client";
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

  /*
   * Strategy: CSS custom properties (--_*) are declared on the element via inline style.
   * They have NO specificity over computed properties — they are just variable values.
   * The actual background/border/color are applied via className (Tailwind arbitrary values
   * referencing the vars), so :hover classes CAN override them without a specificity fight.
   *
   * The Framer Motion `style` prop ONLY receives the animated `width` MotionValue plus
   * CSS var declarations. This keeps the animation path clean.
   */
  const colorVars = isActive
    ? {
        '--local-bg':           'color-mix(in srgb, var(--color-accent) 80%, transparent)',
        '--local-border':       'var(--color-accent)',
        '--local-color':        '#ffffff',
        '--local-shadow':       '0 0 20px color-mix(in srgb, var(--color-accent) 60%, transparent)',
        '--hover-bg':           'var(--color-accent)',
        '--hover-border':       'var(--color-accent)',
        '--hover-color':        '#ffffff',
      }
    : external
    ? {
        '--local-bg':           'color-mix(in srgb, var(--color-contrast) 12%, transparent)',
        '--local-border':       'color-mix(in srgb, var(--color-contrast) 40%, transparent)',
        '--local-color':        'color-mix(in srgb, var(--color-contrast) 90%, white)',
        '--local-shadow':       'none',
        '--hover-bg':           'var(--color-contrast)',
        '--hover-border':       'var(--color-contrast)',
        '--hover-color':        '#03060e',
      }
    : {
        '--local-bg':           'rgba(255,255,255,0.10)',
        '--local-border':       'rgba(255,255,255,0.20)',
        '--local-color':        'rgba(255,255,255,0.80)',
        '--local-shadow':       'none',
        '--hover-bg':           'var(--color-accent)',
        '--hover-border':       'var(--color-accent)',
        '--hover-color':        '#ffffff',
      };

  /*
   * `width` is the only MotionValue — Framer Motion handles it directly
   * without going through React on every animation frame.
   */
  const motionStyle = { width, ...colorVars };

  const className = [
    'relative flex aspect-square items-center justify-center rounded-full',
    'backdrop-blur-xl border group shadow-lg',
    'transition-colors duration-150',
    /* apply CSS vars as actual visual properties — hover can override these */
    '[background:var(--local-bg)] [border-color:var(--local-border)] [color:var(--local-color)]',
    '[box-shadow:var(--local-shadow)]',
    'hover:[background:var(--hover-bg)] hover:[border-color:var(--hover-border)]',
    'hover:[color:var(--hover-color)]',
  ].join(' ');

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

  if (onAction) {
    return (
      <motion.button
        ref={ref}
        type="button"
        aria-label={label}
        style={motionStyle}
        className={className}
        onClick={onAction}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      style={motionStyle}
      className={className}
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
