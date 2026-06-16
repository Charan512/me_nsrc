/**
 * AccentContext — Per-load accent color randomizer
 *
 * Picks 1 of 10 curated dark-mode accent colors on each page load.
 * Uses sessionStorage so the color stays stable during a session
 * but changes on every new load / refresh.
 *
 * Only the accent color rotates. All other section-specific colors
 * (Contact emerald, project-card per-project colors, etc.) are unaffected.
 */

export const ACCENT_PALETTE = [
  {
    name: 'electric-blue',
    hex: '#3b9eff',
    rgb: '59,158,255',
    dim: '#1d4ed8',
    glow: '#3b9eff33',
  },
  {
    name: 'violet',
    hex: '#a855f7',
    rgb: '168,85,247',
    dim: '#7c3aed',
    glow: '#a855f733',
  },
  {
    name: 'cyan',
    hex: '#06b6d4',
    rgb: '6,182,212',
    dim: '#0e7490',
    glow: '#06b6d433',
  },
  {
    name: 'rose',
    hex: '#f43f5e',
    rgb: '244,63,94',
    dim: '#be123c',
    glow: '#f43f5e33',
  },
  {
    name: 'amber',
    hex: '#f59e0b',
    rgb: '245,158,11',
    dim: '#b45309',
    glow: '#f59e0b33',
  },
  {
    name: 'teal',
    hex: '#14b8a6',
    rgb: '20,184,166',
    dim: '#0f766e',
    glow: '#14b8a633',
  },
  {
    name: 'indigo',
    hex: '#6366f1',
    rgb: '99,102,241',
    dim: '#4338ca',
    glow: '#6366f133',
  },
  {
    name: 'lime',
    hex: '#84cc16',
    rgb: '132,204,22',
    dim: '#4d7c0f',
    glow: '#84cc1633',
  },
  {
    name: 'orange',
    hex: '#f97316',
    rgb: '249,115,22',
    dim: '#c2410c',
    glow: '#f9731633',
  },
  {
    name: 'fuchsia',
    hex: '#e879f9',
    rgb: '232,121,249',
    dim: '#a21caf',
    glow: '#e879f933',
  },
];

const SESSION_KEY = 'portfolio_accent_idx';

/**
 * Pick and persist a random accent for this page load.
 * Call this BEFORE React renders to avoid any flash.
 */
export function initAccent() {
  // Always pick a new random index on every load
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
}
