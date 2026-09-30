import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { resultados } from '../data/resultados'
import Tilt from './Tilt'

/**
 * Galeria que anda para o lado enquanto você rola para baixo:
 * a seção "prende" na tela e a fita de fotos desliza.
 */
export default function Resultados() {
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
        <div className="mx-auto mb-8 w-full max-w-7xl px-5 sm:mb-12 sm:px-8">
          <p className="text-[12px] tracking-[0.3em] text-rosa uppercase">Resultados</p>
          <h2 className="mt-3 font-titulo text-[clamp(2.2rem,6vw,4.6rem)] leading-[1] font-medium text-creme">
            Detalhes que a gente <span className="ouro-rosa font-script text-[1.2em] font-normal">ama</span> mostrar
          </h2>
        </div>

        <motion.div ref={fita} className="flex w-max gap-5 px-5 will-change-transform sm:gap-8 sm:px-8" style={{ x }}>
          {resultados.map((r, idx) => (
            <Tilt
              key={r.foto}
              className={`shrink-0 ${idx % 2 ? 'mt-10 sm:mt-16' : 'mb-10 sm:mb-16'}`}
              grau={7}
            >
              <figure
                data-cursor="Ver"
                className="relative h-[46svh] w-[68vw] overflow-hidden rounded-t-[999px] rounded-b-2xl border border-rosa-claro/15 sm:h-[52svh] sm:w-[30vw] lg:w-[22vw] lg:max-w-[340px]"
              >
                <img
                  src={r.foto}
                  alt={r.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-suave)] hover:scale-110"
                  style={{ objectPosition: r.posicao }}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-fundo/90 to-transparent px-4 pt-10 pb-4 text-center font-script text-2xl text-rosa-claro">
                  {r.tag}
                </figcaption>
              </figure>
            </Tilt>
          ))}
        </motion.div>

        <div className="mx-auto mt-10 w-full max-w-7xl px-5 sm:px-8" aria-hidden="true">
          <div className="h-px w-full bg-rosa/15">
            <motion.div className="h-px origin-left bg-rosa" style={{ scaleX: barra }} />
          </div>
        </div>
      </div>
    </section>
  )
}
