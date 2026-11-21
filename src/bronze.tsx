// Entrada da página do Bronze (bronze/index.html). Segunda página estática, sem roteador.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import './index.css'
import Bronze from './paginas/Bronze.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <Bronze />
    </MotionConfig>
  </StrictMode>,
)
