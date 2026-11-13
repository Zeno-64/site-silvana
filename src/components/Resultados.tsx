import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { resultados, type Resultado } from '../data/resultados'
import { site } from '../lib/site'
import { IconeInstagram } from '../lib/Icones'
import Tilt from './Tilt'

/** Foto da galeria: 4:5, canto arredondado, etiqueta só com o que dá para afirmar. */
function Foto({ r, className = '' }: { r: Resultado; className?: string }) {
  return (
    <figure
      className={`relative aspect-[4/5] overflow-hidden rounded-2xl border border-rosa-claro/15 ${className}`}
    >
      <img
        src={r.foto}
        alt={r.alt}
        width={r.largura}
        height={r.altura}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-suave)] hover:scale-105"
        style={{ objectPosition: r.posicao, transform: r.escala ? `scale(${r.escala})` : undefined }}
      />
      <figcaption className="rotulo absolute inset-x-0 bottom-0 bg-gradient-to-t from-fundo/90 to-transparent px-4 pt-10 pb-4 text-center">
        {r.tag}
      </figcaption>
    </figure>
  )
}

/** Último cartão da fita, sem foto: o único link para o Instagram fora do Contato e do rodapé. */
function CartaoInstagram({ className = '' }: { className?: string }) {
  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noreferrer"
      className={`flex aspect-[4/5] flex-col items-center justify-center gap-4 rounded-2xl border border-rosa/30 bg-cetim p-6 text-center transition-colors hover:border-rosa ${className}`}
    >
      <IconeInstagram className="size-9 text-rosa" />
      <span className="titulo text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight">Tem mais no Instagram</span>
      <span className="corpo-pequeno">{site.instagramUser}</span>
    </a>
  )
}

function Cabecalho() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
      <p className="rotulo">Resultados</p>
      <h2 className="titulo mt-3">
        Feito <em>aqui</em>
      </h2>
      <p className="subtitulo mt-2">dignidade recuperada com sucesso</p>
      <p className="corpo-pequeno mt-2">Fotos do nosso Instagram.</p>
    </div>
  )
}

/**
 * Computador: a seção "prende" na tela e a fita de fotos desliza para o lado
 * enquanto você rola para baixo.
 */
function GaleriaPresa() {
  const secao = useRef<HTMLElement>(null)
  const fita = useRef<HTMLDivElement>(null)
  const [distancia, setDistancia] = useState(0)

  useEffect(() => {
    const medir = () => {
      if (fita.current) setDistancia(Math.max(0, fita.current.scrollWidth - window.innerWidth))
    }
    medir()
    const ro = new ResizeObserver(medir)
    if (fita.current) ro.observe(fita.current)
    window.addEventListener('resize', medir)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', medir)
    }
  }, [])

  const { scrollYProgress } = useScroll({ target: secao, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0.04, 0.96], [0, -distancia])
  const barra = useTransform(scrollYProgress, [0.04, 0.96], [0, 1])

  return (
    <section
      id="resultados"
      ref={secao}
      aria-label="Resultados"
      className="relative bg-fundo"
      // altura extra = quanto a fita precisa andar, para o ritmo ficar natural
      style={{ height: `calc(100svh + ${distancia}px)` }}
    >
      <div className="grao sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden pt-16">
        <div className="mb-6">
          <Cabecalho />
        </div>

        <motion.div ref={fita} className="flex w-max gap-8 px-8 will-change-transform" style={{ x }}>
          {resultados.map((r, idx) => (
            <Tilt key={r.foto} className={`shrink-0 ${idx % 2 ? 'mt-8' : 'mb-8'}`} grau={6}>
              <Foto r={r} className="h-[46svh]" />
            </Tilt>
          ))}
          <div className={`shrink-0 ${resultados.length % 2 ? 'mt-8' : 'mb-8'}`}>
            <CartaoInstagram className="h-[46svh]" />
          </div>
        </motion.div>

        <div className="mx-auto mt-8 w-full max-w-7xl px-8" aria-hidden="true">
          <div className="h-px w-full bg-rosa/15">
            <motion.div className="h-px origin-left bg-rosa" style={{ scaleX: barra }} />
          </div>
        </div>
      </div>
    </section>
  )
}

/** Celular: fita horizontal nativa com encaixe, sem prender a rolagem vertical. */
function GaleriaFita() {
  return (
    <section id="resultados" aria-label="Resultados" className="grao relative bg-fundo py-16">
      <Cabecalho />
      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {resultados.map((r) => (
          <Foto key={r.foto} r={r} className="w-[72vw] shrink-0 snap-center" />
        ))}
        <CartaoInstagram className="w-[72vw] shrink-0 snap-center" />
      </div>
    </section>
  )
}

export default function Resultados() {
  // Computador = md (768px) para cima, o mesmo corte do Tailwind.
  const [computador, setComputador] = useState(() => window.matchMedia('(min-width: 768px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const atualizar = () => setComputador(mq.matches)
    mq.addEventListener('change', atualizar)
    return () => mq.removeEventListener('change', atualizar)
  }, [])
  return computador ? <GaleriaPresa /> : <GaleriaFita />
}
