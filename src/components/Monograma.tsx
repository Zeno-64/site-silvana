import { motion } from 'framer-motion'
import { CORACAO } from '../lib/Icones'

// Corações ao redor do aro, como na logo (ângulo em graus, escala).
const coracoes = [
  { a: 205, s: 1.5 },
  { a: 322, s: 1.15 },
  { a: 12, s: 0.9 },
  { a: 118, s: 1.05 },
  { a: 250, s: 0.7 },
  { a: 82, s: 0.7 },
]

/**
 * Monograma "SR" redesenhado em SVG: o aro se traça sozinho e os corações
 * "estouram" um a um. Referência: foto de perfil do Instagram.
 * Trocar pelo arquivo original da logo quando a cliente enviar.
 */
export default function Monograma({ className = '' }: { className?: string }) {
  const c = 120
  const r = 92
  return (
    <svg viewBox="0 0 240 240" className={className} role="img" aria-label="Monograma SR Espaço da Beleza">
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f9d4d8" />
          <stop offset="0.5" stopColor="#e9a0ad" />
          <stop offset="1" stopColor="#c9707f" />
        </linearGradient>
      </defs>
      <motion.circle
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke="url(#mg)"
        strokeWidth="2.6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        style={{ rotate: -90, transformOrigin: '120px 120px' }}
        transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
      />
      {coracoes.map((h, i) => {
        const rad = (h.a * Math.PI) / 180
        const x = c + r * Math.cos(rad)
        const y = c + r * Math.sin(rad)
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${h.a + 90})`}>
            <motion.path
              d={CORACAO}
              fill="url(#mg)"
              initial={{ scale: 0 }}
              animate={{ scale: h.s }}
              transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 1.2 + i * 0.16 }}
            />
          </g>
        )
      })}
      <motion.text
        x={c}
        y={c + 30}
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="104"
        fill="url(#mg)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 1 }}
      >
        SR
      </motion.text>
      <motion.text
        x={c}
        y={c + 58}
        textAnchor="middle"
        fontFamily="'Great Vibes', cursive"
        fontSize="15"
        fill="#e9a0ad"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        Espaço da Beleza
      </motion.text>
    </svg>
  )
}
