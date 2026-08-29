"use client";
/**
 * AccentContext — Per-load accent color randomizer
 *
 * 5 curated accent colors. On each page load one is chosen at random.
 * The original electric blue (#3b9eff) is always option 1.
 *
 * Each entry also carries:
 *   - contrastHex/contrastRgb  : a visually distinct "contrast" color used for
 *     the Resume button in the dock — always clearly different from the accent.
 *   - cardGlow / cardInnerGradient : hero ProfileCard image tint.
 */

export const ACCENT_PALETTE = [
  {
    name: 'electric-blue',               // original
    hex: '#3b9eff',
    rgb: '59,158,255',
    dim: '#1d4ed8',
    glow: '#3b9eff33',
    // companion: emerald — original pairing, keep it
    contrastHex: '#34d399',
    contrastRgb: '52,211,153',
    contrastDim: '#059669',
    cardGlow: 'rgba(59,158,255,0.60)',
    cardInnerGradient: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)',
  },
  {
    name: 'sandy-warm',                  // #d4a373 — warm sandy/tan
    hex: '#d4a373',
    rgb: '212,163,115',
    dim: '#a07840',
    glow: '#d4a37333',
    // companion: soft teal — warm earth → cool water, adjacent feel
    contrastHex: '#5eead4',
    contrastRgb: '94,234,212',
    contrastDim: '#0f766e',
    cardGlow: 'rgba(212,163,115,0.52)',
    cardInnerGradient: 'linear-gradient(145deg,#5e3a1a8c 0%,#d4a37344 100%)',
  },
  {
    name: 'rose',
    hex: '#f43f5e',
    rgb: '244,63,94',
    dim: '#be123c',
    glow: '#f43f5e33',
    // companion: amber — red → orange-yellow, warm family
    contrastHex: '#fbbf24',
    contrastRgb: '251,191,36',
    contrastDim: '#d97706',
    cardGlow: 'rgba(244,63,94,0.52)',
    cardInnerGradient: 'linear-gradient(145deg,#6e1f2a8c 0%,#fb718544 100%)',
  },
  {
    name: 'emerald',
    hex: '#10b981',
    rgb: '16,185,129',
    dim: '#059669',
    glow: '#10b98133',
    // companion: sky blue — green → blue, natural adjacent step
    contrastHex: '#38bdf8',
    contrastRgb: '56,189,248',
    contrastDim: '#0284c7',
    cardGlow: 'rgba(16,185,129,0.52)',
    cardInnerGradient: 'linear-gradient(145deg,#1a4a3a8c 0%,#6ee7b744 100%)',
  },
  {
    name: 'sky-blue',
    hex: '#38bdf8',
    rgb: '56,189,248',
    dim: '#0284c7',
    glow: '#38bdf833',
    // companion: violet — blue → purple, adjacent hue
    contrastHex: '#a78bfa',
    contrastRgb: '167,139,250',
    contrastDim: '#7c3aed',
    cardGlow: 'rgba(56,189,248,0.55)',
    cardInnerGradient: 'linear-gradient(145deg,#1a3a508c 0%,#7dd3fc44 100%)',
  },
];

const SESSION_KEY = 'portfolio_accent_idx';

/** Pick a new random accent each page load and persist for this session. */
export function initAccent() {
  const idx = Math.floor(Math.random() * ACCENT_PALETTE.length);
  sessionStorage.setItem(SESSION_KEY, String(idx));
  return ACCENT_PALETTE[idx];
}

/** Retrieve the accent already chosen for this session. */
export function getAccent() {
  const stored = sessionStorage.getItem(SESSION_KEY);
  const idx = stored !== null ? parseInt(stored, 10) : 0;
  return ACCENT_PALETTE[Math.min(idx, ACCENT_PALETTE.length - 1)];
}

/** Apply all accent CSS variables to :root so Tailwind classes and inline styles pick them up. */
export function applyAccentToDOM(accent) {
  const root = document.documentElement;
  // Main accent
  root.style.setProperty('--color-accent', accent.hex);
  root.style.setProperty('--color-accent-dim', accent.dim);
  root.style.setProperty('--color-accent-glow', accent.glow);
  root.style.setProperty('--accent-rgb', accent.rgb);
  // Contrast color for Resume dock button
  root.style.setProperty('--color-contrast', accent.contrastHex);
  root.style.setProperty('--color-contrast-dim', accent.contrastDim);
  root.style.setProperty('--contrast-rgb', accent.contrastRgb);
  // Hero ProfileCard image tint
  root.style.setProperty('--card-glow-color', accent.cardGlow);
  root.style.setProperty('--card-inner-gradient', accent.cardInnerGradient);
}
