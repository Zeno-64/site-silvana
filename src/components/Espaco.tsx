import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../lib/site'
import { Linhas, Reveal } from './Reveal'

/** O lugar em si: fotos em camadas com velocidades diferentes (parallax). */
export default function Espaco() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const a = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])
  const b = useTransform(scrollYProgress, [0, 1], ['-8%', '14%'])
  const c = useTransform(scrollYProgress, [0, 1], ['4%', '-6%'])

  return (
    <section id="espaco" ref={ref} className="grao relative overflow-hidden bg-fundo-2 py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative z-10">
          <Reveal>
            <p className="text-[12px] tracking-[0.3em] text-rosa uppercase">O espaço</p>
          </Reveal>
          <h2 className="mt-3 font-titulo text-[clamp(2.4rem,6vw,4.8rem)] leading-[1] font-medium text-creme">
            <Linhas
              linhas={[
                'Um lugar feito',
                <span key="p" className="ouro-rosa font-script text-[1.2em] leading-[0.9] font-normal">
                  para você
                </span>,
              ]}
            />
          </h2>
          <Reveal atraso={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-texto">
              {site.frase} Cada detalhe do {site.nome} foi pensado para você chegar, respirar e sair renovada.
            </p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              data-cursor="Ver"
              className="mt-8 inline-block border-b border-rosa/60 pb-1 text-[13px] tracking-[0.2em] text-rosa-claro uppercase transition-colors hover:border-rosa-claro"
            >
              Conheça mais no Instagram
            </a>
          </Reveal>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[540px] sm:h-[620px]">
          <motion.div style={{ y: a }} className="absolute top-0 left-0 h-[64%] w-[62%] overflow-hidden rounded-t-[999px] rounded-b-2xl border border-rosa-claro/20">
            <img src="/img/fachada.jpg" alt="Fachada do salão com a Silvana na vitrine" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: b }} className="absolute right-0 bottom-0 h-[58%] w-[58%] overflow-hidden rounded-2xl border border-rosa-claro/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
            <img src="/img/espaco-recepcao.jpg" alt="Recepção com poltronas rosa e o monograma SR na parede" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div style={{ y: c }} className="absolute top-[34%] right-[6%] hidden size-28 items-center justify-center rounded-full border border-rosa/50 bg-fundo/80 text-center font-script text-2xl leading-6 text-rosa-claro backdrop-blur sm:flex">
            bem-
            <br />
            vinda
          </motion.div>
        </div>
      </div>
    </section>
  )
}
