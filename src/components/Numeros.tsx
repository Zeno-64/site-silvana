import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'
import { site } from '../lib/site'

function Contador({ ate, sufixo = '', formato }: { ate: number; sufixo?: string; formato?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const visivel = useInView(ref, { once: true, margin: '-60px' })

  useEffect(() => {
    if (!visivel || !ref.current) return
    const el = ref.current
    const ctl = animate(0, ate, {
      duration: 2.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = (formato ? formato(v) : String(Math.round(v))) + sufixo
      },
    })
    return () => ctl.stop()
  }, [visivel, ate, sufixo, formato])

  return <span ref={ref}>{formato ? formato(0) : '0'}{sufixo}</span>
}

// Só números que existem de verdade no perfil / nas ofertas.
const itens = [
  {
    valor: <Contador ate={site.seguidores / 1000} sufixo=" mil" formato={(n) => n.toFixed(1).replace('.', ',')} />,
    rotulo: 'seguidoras no Instagram',
  },
  { valor: <Contador ate={6} />, rotulo: 'áreas de cuidado em um só lugar' },
  { valor: <Contador ate={2} />, rotulo: 'cursos profissionais' },
]

export default function Numeros() {
  return (
    <section aria-label="Em números" className="border-y border-rosa/15 bg-fundo">
      <dl className="mx-auto grid max-w-7xl divide-y divide-rosa/15 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        {itens.map((it) => (
          <div key={it.rotulo} className="flex flex-col px-4 py-10 text-center">
            <dt className="order-2 mt-3 text-[13px] tracking-[0.25em] text-texto uppercase">{it.rotulo}</dt>
            <dd className="titulo order-1 text-[clamp(3rem,7vw,5rem)]">{it.valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
