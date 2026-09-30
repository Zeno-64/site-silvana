import { useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { IconeBrilho } from '../lib/Icones'

const palavras = ['Cabelos', 'Unhas', 'Cílios', 'Sobrancelhas', 'Bronze', 'Tranças']

/** Velocidade da faixa sozinha, em % da largura total por segundo (constante). */
const VELOCIDADE = 2.2
/** Quão rápido o arremesso perde força depois de soltar (maior = para antes). */
const ATRITO = 3
/** Teto do arremesso, em px/s: um gesto bem forte, mas que não some com a faixa. */
const ARREMESSO_MAX = 3000

/** Mantém o deslocamento entre -50% e 0: são duas cópias iguais lado a lado, sem "pulo". */
const enrolar = (v: number) => (((v % 50) + 50) % 50) - 50

/**
 * Texto gigante que corre sozinho, sempre na mesma velocidade. A rolagem da
 * página NÃO mexe nele; só quem clica/toca e arrasta em cima da faixa.
 */
export default function FaixaTexto() {
  const calmo = useReducedMotion()
  const base = useMotionValue(0)
  const trilho = useRef<HTMLDivElement>(null)
  // Estado do arrasto fica em ref: mudar isso não precisa redesenhar o React.
  // vel em px/s (do gesto); inercia em %/s (o que a faixa ainda "carrega" depois de soltar).
  const arrasto = useRef({ ativo: false, id: -1, x: 0, t: 0, vel: 0, inercia: 0 })

  useAnimationFrame((_, delta) => {
    const dt = delta / 1000
    const a = arrasto.current
    if (a.ativo) return // enquanto o dedo/mouse segura, a faixa obedece a ele
    // O arremesso decai suave até sobrar só a velocidade constante.
    a.inercia *= Math.exp(-ATRITO * dt)
    const sozinha = calmo ? 0 : -VELOCIDADE
    base.set(enrolar(base.get() + (sozinha + a.inercia) * dt))
  })
  const x = useTransform(base, (v) => `${v}%`)

  const soltar = (e: React.PointerEvent) => {
    const a = arrasto.current
    if (!a.ativo || e.pointerId !== a.id) return
    a.ativo = false
    // Só vira arremesso se ainda estava em movimento quando soltou.
    const parado = performance.now() - a.t > 90 || !trilho.current
    const px = Math.max(-ARREMESSO_MAX, Math.min(ARREMESSO_MAX, a.vel))
    a.inercia = parado ? 0 : (px / (trilho.current?.offsetWidth ?? 1)) * 100
  }

  return (
    <section id="faixa" aria-label="Nossos serviços" className="overflow-hidden border-y border-rosa/15 bg-fundo-2 py-8 sm:py-12">
      <div
        data-cursor="Arraste"
        // pan-y: o dedo na faixa ainda rola a página na vertical; só o gesto horizontal é da faixa.
        className="cursor-grab touch-pan-y select-none active:cursor-grabbing"
        onPointerDown={(e) => {
          if (e.pointerType === 'mouse' && e.button !== 0) return
          e.currentTarget.setPointerCapture(e.pointerId)
          arrasto.current = { ativo: true, id: e.pointerId, x: e.clientX, t: performance.now(), vel: 0, inercia: 0 }
        }}
        onPointerMove={(e) => {
          const a = arrasto.current
          if (!a.ativo || e.pointerId !== a.id || !trilho.current) return
          const agora = performance.now()
          const dx = e.clientX - a.x
          a.vel = a.vel * 0.6 + (dx / Math.max(1, agora - a.t)) * 1000 * 0.4
          a.x = e.clientX
          a.t = agora
          base.set(enrolar(base.get() + (dx / trilho.current.offsetWidth) * 100))
        }}
        onPointerUp={soltar}
        onPointerCancel={soltar}
        onLostPointerCapture={soltar}
      >
        <motion.div ref={trilho} className="flex w-max" style={{ x }} aria-hidden="true">
          {[0, 1].map((copia) => (
            <div key={copia} className="flex">
              {palavras.map((p) => (
                <span key={p} className="flex shrink-0 items-center gap-[4vw] pr-[4vw]">
                  <span className="titulo text-[clamp(3.5rem,10vw,9rem)] leading-none uppercase">{p}</span>
                  <IconeBrilho className="size-[clamp(1.4rem,3vw,2.6rem)] text-rosa" />
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
