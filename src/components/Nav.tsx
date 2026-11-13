import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'

const links = [
  { href: '#resultados', texto: 'Resultados' },
  { href: '#servicos', texto: 'Serviços' },
  { href: '#espaco', texto: 'O salão' },
  { href: '#cursos', texto: 'Cursos' },
]

/** Barra fixa + menu de tela cheia no celular + barra de progresso + botão flutuante do WhatsApp. */
export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll()
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const [rolou, setRolou] = useState(false)
  const [passouHero, setPassouHero] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const [celular, setCelular] = useState(false)
  const [ctaVisivel, setCtaVisivel] = useState(false)
  const botaoMenu = useRef<HTMLButtonElement>(null)
  const botaoFechar = useRef<HTMLButtonElement>(null)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setRolou(v > 40)
    setPassouHero(v > 500)
  })

  // Celular = abaixo de md (768px), o mesmo corte do Tailwind.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const atualizar = () => setCelular(mq.matches)
    atualizar()
    mq.addEventListener('change', atualizar)
    return () => mq.removeEventListener('change', atualizar)
  }, [])

  // O botão flutuante some enquanto o CTA do Contato está na tela (dois botões iguais empilhados).
  useEffect(() => {
    const cta = document.getElementById('contato-cta')
    if (!cta) return
    const io = new IntersectionObserver(([e]) => setCtaVisivel(e.isIntersecting))
    io.observe(cta)
    return () => io.disconnect()
  }, [])

  // Menu aberto: trava a rolagem do fundo, fecha com Esc e leva o foco para o X.
  useEffect(() => {
    if (!menuAberto) return
    const anterior = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    botaoFechar.current?.focus()
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuAberto(false)
    }
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = anterior
      window.removeEventListener('keydown', aoTeclar)
      botaoMenu.current?.focus()
    }
  }, [menuAberto])

  // Passou de md com o menu aberto (girou o aparelho): fecha.
  useEffect(() => {
    if (!celular) setMenuAberto(false)
  }, [celular])

  const mostrarFlutuante = passouHero && !(celular && ctaVisivel)

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-rosa-escuro via-rosa to-rosa-claro"
        style={{ scaleX: progresso }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,padding] duration-500 ${
          rolou ? 'bg-fundo/70 py-3 backdrop-blur-xl' : 'py-5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 sm:px-8">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="SR Espaço da Beleza, início">
            <img
              src="/img/logo-perfil.jpg"
              alt=""
              width="40"
              height="40"
              loading="lazy"
              className="size-10 rounded-full ring-1 ring-rosa/40 transition group-hover:ring-rosa"
            />
            <span className="font-titulo text-sm tracking-[0.22em] text-titulo uppercase max-sm:hidden">
              SR Espaço da Beleza
            </span>
          </a>

          <nav aria-label="Seções" className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13px] tracking-[0.2em] text-texto uppercase transition-colors hover:text-rosa"
              >
                {l.texto}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-rosa transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-rosa/60 px-5 py-2.5 text-[12px] font-medium tracking-[0.2em] text-rosa uppercase transition hover:bg-rosa hover:text-fundo"
            >
              <IconeWhatsapp className="size-4" />
              Agendar
            </a>
            <button
              ref={botaoMenu}
              type="button"
              aria-label="Abrir menu"
              aria-expanded={menuAberto}
              aria-controls="menu-celular"
              onClick={() => setMenuAberto(true)}
              className="grid size-11 place-items-center rounded-full border border-rosa/40 text-rosa md:hidden"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuAberto && (
          <motion.div
            id="menu-celular"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-[70] flex flex-col bg-fundo px-5 py-5 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-titulo text-sm tracking-[0.22em] text-titulo uppercase">SR Espaço da Beleza</span>
              <button
                ref={botaoFechar}
                type="button"
                aria-label="Fechar menu"
                onClick={() => setMenuAberto(false)}
                className="grid size-11 place-items-center rounded-full border border-rosa/40 text-rosa"
              >
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <nav aria-label="Seções" className="flex flex-1 flex-col justify-center gap-6">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuAberto(false)}
                  className="titulo block text-[clamp(2.4rem,11vw,3.4rem)]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  {l.texto}
                </motion.a>
              ))}
            </nav>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuAberto(false)}
              className="mb-4 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-rosa-claro via-rosa to-rosa-escuro px-8 py-4 text-[13px] font-medium tracking-[0.2em] text-fundo uppercase"
            >
              <IconeWhatsapp className="size-5" />
              Agendar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mostrarFlutuante && (
          <motion.a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar pelo WhatsApp"
            className="fixed right-5 bottom-5 z-50 grid size-14 place-items-center rounded-full bg-gradient-to-br from-rosa-claro to-rosa-escuro text-fundo shadow-[0_10px_40px_-8px_rgba(233,160,173,0.7)] sm:right-8 sm:bottom-8"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-rosa/40 [animation-duration:2.6s]" />
            <IconeWhatsapp className="relative size-7" />
          </motion.a>
        )}
      </AnimatePresence>
    </>
  )
}
