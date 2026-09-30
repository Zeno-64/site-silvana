import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/** Puxa o filho na direção do mouse — usado nos botões de agendar. */
export default function Magnetic({
  children,
  forca = 0.3,
  className = '',
}: {
  children: ReactNode
  forca?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.5 })
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16, mass: 0.5 })

  const mover = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * forca)
    y.set((e.clientY - (r.top + r.height / 2)) * forca)
  }
  const soltar = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x, y }}
      onPointerMove={mover}
      onPointerLeave={soltar}
    >
      {children}
    </motion.div>
  )
}
