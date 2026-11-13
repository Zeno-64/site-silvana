import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../lib/site'
import { Linhas, Reveal } from './Reveal'

/** Quem cuida de você: apresentação da Silvana, higiene e o lugar, com fotos em camadas (parallax). */
export default function Espaco() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const a = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
  const b = useTransform(scrollYProgress, [0, 1], ['-8%', '12%'])
  const c = useTransform(scrollYProgress, [0, 1], ['6%', '-8%'])

  return (
    <section id="espaco" ref={ref} aria-label="O salão" className="grao relative overflow-hidden bg-fundo-2 py-24 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative z-10">
          <Reveal>
            <p className="rotulo">O salão</p>
          </Reveal>
          <h2 className="titulo mt-3">
            <Linhas linhas={['Quem cuida', <em key="p">de você</em>]} />
          </h2>
          <Reveal atraso={0.2}>
            <p className="subtitulo mt-4">cuidado e higiene em cada detalhe</p>
            <p className="corpo mt-6 max-w-lg">
              O {site.nome} é o salão da Silvana Ribeiro, em {site.bairro}. Ela atende, tem uma equipe ao lado e ainda
              ensina: é a instrutora dos cursos de unhas e de cílios da casa.
            </p>
            <p className="corpo mt-5 max-w-lg">
              Alicates e espátulas são esterilizados, porque a segurança de cada cliente é essencial.
            </p>
            <a
              href="#cursos"
              className="mt-8 inline-block border-b border-rosa/60 pb-1 text-[13px] tracking-[0.2em] text-rosa uppercase transition-colors hover:border-rosa"
            >
              Conheça os cursos
            </a>
          </Reveal>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[540px] sm:h-[640px]">
          <motion.div
            style={{ y: a }}
            className="absolute top-0 left-0 h-[78%] w-[58%] overflow-hidden rounded-t-[999px] rounded-b-2xl border border-rosa-claro/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
          >
            <img
              src="/img/silvana-salao.jpg"
              alt="Silvana de uniforme rosa, com prancha e secador, em frente ao logo do salão"
              width={828}
              height={1472}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: b }}
            className="absolute top-[4%] right-0 h-[36%] w-[36%] overflow-hidden rounded-2xl border border-rosa-claro/20"
          >
            <img
              src="/img/fachada.jpg"
              alt="Fachada do salão, com um adesivo na vitrine anunciando os cursos de nail design e lash"
              width={360}
              height={640}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ objectPosition: '50% 20%' }}
            />
          </motion.div>
          <motion.div
            style={{ y: c }}
            className="absolute right-0 bottom-0 h-[42%] w-[52%] overflow-hidden rounded-2xl border border-rosa-claro/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
          >
            {/* Zoom para fora do quadro o texto "Sonhei" que a foto original traz por cima. */}
            <img
              src="/img/espaco-recepcao.jpg"
              alt="Recepção com duas poltronas rosa e uma planta"
              width={640}
              height={640}
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ transform: 'scale(1.7)', transformOrigin: '50% 100%' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
