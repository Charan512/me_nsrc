/**
 * AccentContext — Per-load accent color randomizer
 *
 * Picks 1 of 5 curated dark-mode accent colors on each page load.
 * The original electric blue (#3b9eff) is always in the palette.
 * Uses random selection so a new color appears every refresh.
 *
 * Only the accent color rotates. All other section-specific colors
 * (Contact emerald, project-card per-project colors, etc.) are unaffected.
 *
 * behindGlowColor: controls the ProfileCard image tint in Hero so it
 * vibes with the accent color just like the original bluish tint.
 */

export const ACCENT_PALETTE = [
  {
    name: 'electric-blue',   // the original
    hex: '#3b9eff',
    rgb: '59,158,255',
    dim: '#1d4ed8',
    glow: '#3b9eff33',
    // Original bluish tint that vibe with the hero image
    cardGlow: 'rgba(59,158,255,0.60)',
    cardInnerGradient: 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)',
  },
  {
    name: 'violet',
    hex: '#a855f7',
    rgb: '168,85,247',
    dim: '#7c3aed',
    glow: '#a855f733',
    cardGlow: 'rgba(168,85,247,0.55)',
    cardInnerGradient: 'linear-gradient(145deg,#3b1f6e8c 0%,#c084fc44 100%)',
  },
  {
    name: 'rose',
    hex: '#f43f5e',
    rgb: '244,63,94',
    dim: '#be123c',
    glow: '#f43f5e33',
    cardGlow: 'rgba(244,63,94,0.50)',
    cardInnerGradient: 'linear-gradient(145deg,#6e1f2a8c 0%,#fb7185 44 100%)',
  },
  {
    name: 'amber',
    hex: '#f59e0b',
    rgb: '245,158,11',
    dim: '#b45309',
    glow: '#f59e0b33',
    cardGlow: 'rgba(245,158,11,0.45)',
    cardInnerGradient: 'linear-gradient(145deg,#6e4a1f8c 0%,#fcd34d44 100%)',
  },
  {
    name: 'teal',
    hex: '#14b8a6',
    rgb: '20,184,166',
    dim: '#0f766e',
    glow: '#14b8a633',
    cardGlow: 'rgba(20,184,166,0.52)',
    cardInnerGradient: 'linear-gradient(145deg,#1f4a468c 0%,#5eead444 100%)',
  },
];

const SESSION_KEY = 'portfolio_accent_idx';

/**
 * Pick and persist a random accent for this page load.
 * Call this BEFORE React renders to avoid any flash.
 */
export function initAccent() {
  const idx = Math.floor(Math.random() * ACCENT_PALETTE.length);
  sessionStorage.setItem(SESSION_KEY, String(idx));
  return ACCENT_PALETTE[idx];
}

/**
 * Retrieve the accent already picked for this session.
 * Safe to call after initAccent() has run.
 */
export function getAccent() {
  const stored = sessionStorage.getItem(SESSION_KEY);
  const idx = stored !== null ? parseInt(stored, 10) : 0;
  return ACCENT_PALETTE[Math.min(idx, ACCENT_PALETTE.length - 1)];
}

/**
 * Apply the accent to document CSS variables so Tailwind
 * accent-* utilities automatically use it.
 */
export function applyAccentToDOM(accent) {
  const root = document.documentElement;
  root.style.setProperty('--color-accent', accent.hex);
  root.style.setProperty('--color-accent-dim', accent.dim);
  root.style.setProperty('--color-accent-glow', accent.glow);
  root.style.setProperty('--accent-rgb', accent.rgb);
  // Card glow for ProfileCard tint — read by Hero.jsx at runtime
  root.style.setProperty('--card-glow-color', accent.cardGlow);
  root.style.setProperty('--card-inner-gradient', accent.cardInnerGradient);
}
