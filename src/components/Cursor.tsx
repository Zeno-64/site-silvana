import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Cursor próprio (só desktop com mouse). Cresce sobre qualquer elemento com
 * `data-cursor="texto"` e mostra o texto dentro do círculo.
 */
export default function Cursor() {
  const [ativo, setAtivo] = useState(false)
  const [rotulo, setRotulo] = useState('')
  const [sobreLink, setSobreLink] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!mouse || calmo) return

    setAtivo(true)
    document.documentElement.classList.add('cursor-on')

    const mover = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const sobre = (e: PointerEvent) => {
      const alvo = e.target as Element | null
      const marcado = alvo?.closest<HTMLElement>('[data-cursor]')
      setRotulo(marcado?.dataset.cursor ?? '')
      setSobreLink(!!alvo?.closest('a, button'))
    }

    window.addEventListener('pointermove', mover, { passive: true })
    document.addEventListener('pointerover', sobre, { passive: true })
    return () => {
      window.removeEventListener('pointermove', mover)
      document.removeEventListener('pointerover', sobre)
      document.documentElement.classList.remove('cursor-on')
    }
  }, [x, y])

  if (!ativo) return null

  const grande = rotulo !== ''
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[100] size-1.5 -ml-[3px] -mt-[3px] rounded-full bg-rosa-claro"
        style={{ x, y }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[99] grid size-10 -ml-5 -mt-5 place-items-center rounded-full border border-rosa/70 text-[10px] font-medium tracking-[0.18em] text-fundo uppercase"
        style={{ x: sx, y: sy }}
        animate={{
          scale: grande ? 2.4 : sobreLink ? 1.6 : 1,
          backgroundColor: grande ? 'rgba(249,212,216,0.95)' : 'rgba(233,160,173,0)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      >
        <span className={grande ? 'scale-[0.42]' : 'hidden'}>{rotulo}</span>
      </motion.div>
    </>
  )
}
