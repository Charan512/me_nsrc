import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
import { initAccent, applyAccentToDOM } from './context/AccentContext.jsx'

// Apply accent color to CSS variables BEFORE React renders to prevent flash
const accent = initAccent();
applyAccentToDOM(accent);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
