import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'

const links = [
  { href: '#servicos', texto: 'Serviços' },
  { href: '#resultados', texto: 'Resultados' },
  { href: '#cursos', texto: 'Cursos' },
  { href: '#contato', texto: 'Contato' },
]

/** Barra fixa + barra de progresso da página + botão flutuante do WhatsApp. */
export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll()
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const [rolou, setRolou] = useState(false)
  const [passouHero, setPassouHero] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => {
    setRolou(v > 40)
    setPassouHero(v > 500)
  })

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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="SR Espaço da Beleza — início">
            <img
              src="/img/logo-perfil.jpg"
              alt=""
              width="40"
              height="40"
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

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-rosa/60 px-5 py-2.5 text-[12px] font-medium tracking-[0.2em] text-rosa uppercase transition hover:bg-rosa hover:text-fundo"
          >
            <IconeWhatsapp className="size-4" />
            Agendar
          </a>
        </div>
      </header>

      <AnimatePresence>
        {passouHero && (
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
