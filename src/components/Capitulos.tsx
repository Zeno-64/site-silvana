import { useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { capitulos, type Capitulo } from '../data/capitulos'
import { site } from '../lib/site'
import { IconeBrilho, IconeSeta } from '../lib/Icones'
import Monograma from './Monograma'
import Tilt from './Tilt'

const suave = [0.22, 1, 0.36, 1] as const

/** Quando o serviço não tem foto ainda: arco com o nome em script (nunca fica um buraco). */
function ArteSemFoto({ c }: { c: Capitulo }) {
  return (
    <div
      className="relative grid h-full w-full place-items-center overflow-hidden"
      style={{ background: `radial-gradient(circle at 30% 20%, rgb(233 160 173 / 0.33), transparent 60%), ${c.bg}` }}
    >
      <Monograma className="absolute inset-[12%] opacity-[0.18]" />
      <span className="subtitulo relative text-[clamp(3rem,7vw,5.5rem)] leading-none">{c.nome}</span>
    </div>
  )
}

export default function Capitulos() {
  const ref = useRef<HTMLElement>(null)
  const [i, setI] = useState(0)
  const n = capitulos.length

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  useMotionValueEvent(scrollYProgress, 'change', (v) => setI(Math.min(n - 1, Math.max(0, Math.floor(v * n)))))
  // A foto respira com a rolagem dentro de cada capítulo.
  const zoom = useTransform(scrollYProgress, (v) => 1.06 + ((v * n) % 1) * 0.1)

  const c = capitulos[i]

  const irPara = (idx: number) => {
    const el = ref.current
    if (!el) return
    const topo = el.getBoundingClientRect().top + window.scrollY
    const passo = (el.offsetHeight - window.innerHeight) / n
    window.scrollTo({ top: topo + passo * idx + passo * 0.5, behavior: 'smooth' })
  }

  return (
    <section id="servicos" ref={ref} aria-label="Serviços" className="relative" style={{ height: `${n * 90}svh` }}>
      <motion.div
        className="grao sticky top-0 h-[100svh] overflow-hidden"
        animate={{ backgroundColor: c.bg }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      >
        {/* Número gigante de fundo */}
        <AnimatePresence mode="wait">
          <motion.span
            key={c.id + 'n'}
            aria-hidden="true"
            className="contorno pointer-events-none absolute -right-4 -bottom-16 font-titulo text-[clamp(14rem,38vw,34rem)] leading-none select-none sm:bottom-[-12rem]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 0.55, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.7, ease: suave }}
          >
            {String(i + 1).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>

        <div className="relative mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] gap-4 px-5 pt-24 pb-8 sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:grid-rows-1 lg:items-center lg:gap-16 lg:pt-20 lg:pb-0">
          {/* Texto do capítulo */}
          <div className="relative z-10 min-h-0">
            <p className="rotulo mb-4">
              Capítulo {String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: suave }}
              >
                <h2 className="titulo text-[clamp(2.6rem,7.5vw,6.4rem)] leading-[0.95] uppercase">{c.nome}</h2>
                <p className="subtitulo mt-1">{c.script}</p>
                <p className="corpo mt-5 max-w-lg">{c.frase}</p>

                {c.itens.length > 0 && (
                  <ul className="mt-5 flex max-w-lg flex-col gap-2">
                    {c.itens.map((item) => (
                      <li key={item} className="corpo-pequeno flex items-center gap-3">
                        <IconeBrilho className="size-3.5 shrink-0 text-rosa" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full border border-rosa px-6 py-3 text-[12px] font-medium tracking-[0.2em] text-rosa uppercase transition-colors hover:bg-rosa hover:text-fundo"
                >
                  Agendar {c.nome.toLowerCase()}
                  <IconeSeta className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Moldura em arco com a foto (ou arte, se ainda não tem foto) */}
          <div className="relative min-h-0 lg:h-[78svh] lg:max-h-[720px]">
            <Tilt className="mx-auto h-full max-h-full w-full max-w-[420px] lg:max-w-none" grau={6}>
              <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-3xl border border-rosa-claro/20 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={c.id + 'f'}
                    className="absolute inset-0"
                    initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                    animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: suave }}
                  >
                    {c.foto ? (
                      <motion.img
                        src={c.foto}
                        alt={c.alt}
                        className="h-full w-full object-cover"
                        style={{ scale: zoom, objectPosition: c.posicao }}
                      />
                    ) : (
                      <ArteSemFoto c={c} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Tilt>
          </div>
        </div>

        {/* Índice lateral: clicável, mostra onde você está */}
        <nav
          aria-label="Capítulos"
          className="absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex xl:left-6"
        >
          {capitulos.map((cap, idx) => (
            <button
              key={cap.id}
              type="button"
              onClick={() => irPara(idx)}
              aria-label={`Ir para ${cap.nome}`}
              aria-current={idx === i}
              className="group flex items-center gap-3"
            >
              <span
                className={`block h-px transition-all duration-500 ${idx === i ? 'w-[34px] bg-rosa' : 'w-[14px] bg-white/30'}`}
              />
            </button>
          ))}
        </nav>
      </motion.div>
    </section>
  )
}
