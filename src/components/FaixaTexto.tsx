import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { IconeBrilho } from '../lib/Icones'

const palavras = ['Cabelos', 'Unhas', 'Cílios', 'Sobrancelhas', 'Bronze', 'Tranças']

/**
 * Texto gigante que corre sozinho e ACELERA (e inverte) conforme a
 * velocidade da rolagem da página.
 */
export default function FaixaTexto() {
  const base = useMotionValue(0)
  const { scrollY } = useScroll()
  const velocidade = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 })
  const fator = useTransform(velocidade, [-1500, 0, 1500], [-5, 0, 5], { clamp: false })
  const direcao = useRef(-1)

  useAnimationFrame((_, delta) => {
    const f = fator.get()
    if (f < -0.05) direcao.current = 1
    else if (f > 0.05) direcao.current = -1
    const passo = direcao.current * 2.2 * (delta / 1000) * (1 + Math.abs(f) * 2.4)
    let v = base.get() + passo
    // Duas cópias lado a lado: ao passar de 50% volta ao 0 sem "pulo".
    if (v <= -50) v += 50
    if (v > 0) v -= 50
    base.set(v)
  })
  const x = useTransform(base, (v) => `${v}%`)

  const bloco = palavras.map((p, i) => (
    <span key={p + i} className="flex shrink-0 items-center gap-[4vw] pr-[4vw]">
      <span className={`font-titulo text-[clamp(3.5rem,10vw,9rem)] leading-none uppercase ${i % 2 ? 'contorno' : 'text-creme'}`}>
        {p}
      </span>
      <IconeBrilho className="size-[clamp(1.4rem,3vw,2.6rem)] text-rosa" />
    </span>
  ))

  return (
    <section id="faixa" aria-label="Nossos serviços" className="overflow-hidden border-y border-rosa/15 bg-fundo-2 py-8 sm:py-12">
      <motion.div className="flex w-max" style={{ x }} aria-hidden="true">
        <div className="flex">{bloco}</div>
        <div className="flex">{bloco}</div>
      </motion.div>
    </section>
  )
}
