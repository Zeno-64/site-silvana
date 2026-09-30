import { motion } from 'framer-motion'

/**
 * Manchas de luz rosa/cobre que flutuam atrás do hero.
 * Só transform/opacity: a GPU cuida, o blur é estático.
 */
const manchas = [
  { cor: '#e9a0ad', tam: 520, pos: 'top-[-10%] left-[-12%]', dx: 60, dy: 40, t: 18, o: 0.32 },
  { cor: '#8c2f45', tam: 620, pos: 'bottom-[-25%] right-[-15%]', dx: -70, dy: -30, t: 22, o: 0.5 },
  { cor: '#d9917a', tam: 380, pos: 'top-[30%] right-[18%]', dx: -40, dy: 60, t: 16, o: 0.22 },
]

export default function Blobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {manchas.map((m, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-[90px] ${m.pos}`}
          style={{ width: m.tam, height: m.tam, background: m.cor, opacity: m.o }}
          animate={{ x: [0, m.dx, 0], y: [0, m.dy, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: m.t, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {/* Reflexo de cetim: faixa diagonal de luz que atravessa o fundo */}
      <motion.div
        className="absolute -inset-y-1/4 left-0 w-1/3 rotate-[18deg] bg-gradient-to-r from-transparent via-rosa-claro/10 to-transparent blur-2xl"
        initial={{ x: '-40vw' }}
        animate={{ x: '140vw' }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
      />
    </div>
  )
}
