import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

/** Cartão que inclina em 3D e ganha um reflexo que segue o mouse. */
export default function Tilt({
  children,
  className = '',
  grau = 9,
}: {
  children: ReactNode
  className?: string
  grau?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [grau, -grau]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(px, [0, 1], [-grau, grau]), { stiffness: 200, damping: 20 })
  const reflexo = useTransform(
    [px, py],
    ([a, b]: number[]) =>
      `radial-gradient(circle at ${a * 100}% ${b * 100}%, rgba(255,235,235,0.28), transparent 55%)`,
  )
  const brilho = useMotionValue(0)

  const mover = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
    brilho.set(1)
  }
  const sair = () => {
    px.set(0.5)
    py.set(0.5)
    brilho.set(0)
  }

  return (
    <div className={`[perspective:900px] ${className}`}>
      <motion.div
        ref={ref}
        className="relative h-full w-full will-change-transform"
        style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
        onPointerMove={mover}
        onPointerLeave={sair}
      >
        {children}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ background: reflexo, opacity: brilho }}
        />
      </motion.div>
    </div>
  )
}
