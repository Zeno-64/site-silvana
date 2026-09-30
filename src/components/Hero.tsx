import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { site } from '../lib/site'
import { IconeSeta, IconeWhatsapp } from '../lib/Icones'
import Blobs from './Blobs'
import Magnetic from './Magnetic'
import Monograma from './Monograma'
import { Linhas } from './Reveal'

/** Foto flutuante: cada uma se mexe um pouco mais que a outra com o mouse (profundidade). */
function Camada({
  mx,
  my,
  fundo,
  className,
  foto,
  alt,
  inclina,
  atraso,
}: {
  mx: MotionValue<number>
  my: MotionValue<number>
  fundo: number
  className: string
  foto: string
  alt: string
  inclina: number
  atraso: number
}) {
  const x = useTransform(mx, [-0.5, 0.5], [-fundo, fundo])
  const y = useTransform(my, [-0.5, 0.5], [-fundo, fundo])
  return (
    <motion.div className={`absolute ${className}`} style={{ x, y }}>
      <motion.div
        className="h-full w-full overflow-hidden rounded-[999px_999px_24px_24px] border border-rosa-claro/25 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]"
        initial={{ opacity: 0, y: 60, rotate: inclina * 2.5 }}
        animate={{ opacity: 1, y: 0, rotate: inclina }}
        transition={{ duration: 1.4, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={foto}
          alt={alt}
          className="h-full w-full object-cover"
          animate={{ scale: [1.05, 1.15, 1.05] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const secao = useRef<HTMLElement>(null)
  const mx = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })
  const my = useSpring(useMotionValue(0), { stiffness: 60, damping: 20 })

  const { scrollYProgress } = useScroll({ target: secao, offset: ['start start', 'end start'] })
  const subir = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const sumir = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const mover = (e: React.PointerEvent) => {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section
      id="inicio"
      ref={secao}
      onPointerMove={mover}
      className="grao relative isolate min-h-[100svh] overflow-hidden bg-fundo"
    >
      <Blobs />

      <motion.div
        style={{ y: subir, opacity: sumir }}
        className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-6 px-5 pt-28 pb-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="relative z-10">
          <motion.p
            // Celular: faixa de ponta a ponta, uma linha só. A partir de sm: caixa arredondada do tamanho do texto.
            className="-mx-5 mb-6 flex w-[calc(100%+2.5rem)] flex-wrap items-center justify-center gap-x-2 gap-y-1 border-y border-rosa/25 bg-rosa/[0.07] px-3 py-2.5 text-[clamp(9.5px,2.7vw,11px)] font-normal tracking-[0.1em] text-rosa uppercase sm:mx-0 sm:w-fit sm:max-w-full sm:justify-start sm:gap-x-2.5 sm:rounded-full sm:border sm:border-rosa/30 sm:px-5 sm:text-[11px] sm:tracking-[0.2em] xl:gap-x-3 xl:px-6 xl:text-[12px] xl:tracking-[0.3em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <span>Cabelos</span>
            <span aria-hidden="true">·</span>
            <span>Unhas</span>
            <span aria-hidden="true">·</span>
            <span>Cílios</span>
            <span aria-hidden="true">·</span>
            <span>Sobrancelhas</span>
            <span aria-hidden="true">·</span>
            <span>Bronze</span>
          </motion.p>

          <h1 className="titulo text-[clamp(3rem,9vw,7.2rem)] leading-[0.98]">
            <Linhas aoEntrar={false} atraso={0.2} linhas={['Sua', <em key="a">autoestima</em>, 'começa aqui.']} />
          </h1>

          <motion.p
            className="corpo mt-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
          >
            Cuidado feito com calma para você se olhar no espelho e gostar do que vê. Do cabelo ao bronze, tudo em um só
            espaço.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            <Magnetic>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-cursor="Agendar"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rosa-claro via-rosa to-rosa-escuro px-8 py-4 text-[13px] font-medium tracking-[0.2em] text-fundo uppercase shadow-[0_14px_50px_-10px_rgba(233,160,173,0.65)]"
              >
                <IconeWhatsapp className="size-5" />
                Agendar horário
              </a>
            </Magnetic>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 px-2 py-4 text-[13px] tracking-[0.2em] text-rosa uppercase"
            >
              Ver serviços
              <IconeSeta className="size-4 transition-transform group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </div>

        {/* Palco: monograma no centro, fotos em arco flutuando ao redor */}
        <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="false">
          <Camada
            mx={mx}
            my={my}
            fundo={26}
            atraso={1.5}
            inclina={-6}
            className="top-[2%] left-[2%] h-[46%] w-[34%]"
            foto="/img/unhas-nude.jpg"
            alt="Unhas amêndoa nude sobre cetim"
          />
          <Camada
            mx={mx}
            my={my}
            fundo={38}
            atraso={1.75}
            inclina={5}
            className="right-[0%] bottom-[4%] h-[44%] w-[32%]"
            foto="/img/unhas-a.jpg"
            alt="Unhas rosa perolado com francesinha"
          />
          <Camada
            mx={mx}
            my={my}
            fundo={16}
            atraso={2}
            inclina={3}
            className="top-[10%] right-[6%] h-[34%] w-[26%]"
            foto="/img/video-ago25.jpg"
            alt="Silvana finalizando cabelo liso"
          />
          <motion.div
            className="absolute inset-[16%] drop-shadow-[0_0_40px_rgba(233,160,173,0.35)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Monograma className="h-full w-full" />
          </motion.div>
        </div>
      </motion.div>

      <motion.a
        href="#faixa"
        aria-label="Rolar para baixo"
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] tracking-[0.35em] text-texto uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6 }}
      >
        Role
        <span className="relative h-10 w-px overflow-hidden bg-rosa/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-rosa"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
