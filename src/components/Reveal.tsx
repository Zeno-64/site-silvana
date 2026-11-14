import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

const suave = [0.22, 1, 0.36, 1] as const

/** Aparece subindo 16 px e clareando, uma vez só, quando entra na tela. */
export function Reveal({
  children,
  atraso = 0,
  className = '',
}: {
  children: ReactNode
  /** Máximo de 0,1 s (direção visual, seção 8). */
  atraso?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: Math.min(atraso, 0.1), ease: suave }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Cada linha sobe de dentro de uma máscara, em até 0,6 s e sem atraso.
 * Aceita `ReactNode` por linha para poder pôr uma palavra em itálico.
 */
export function Linhas({
  linhas,
  className = '',
  linhaClassName = '',
  aoEntrar = true,
}: {
  linhas: ReactNode[]
  className?: string
  linhaClassName?: string
  aoEntrar?: boolean
}) {
  // Quem é observado é a MÁSCARA (sempre visível). Se observássemos o texto,
  // ele estaria cortado pelo overflow-hidden e nunca "entraria" na tela.
  const alvo = aoEntrar
    ? { whileInView: 'visivel', viewport: { once: true, margin: '-40px' } }
    : { animate: 'visivel' }
  return (
    // flex-col: em bloco normal as margens negativas de linhas vizinhas colapsariam (não somariam).
    <span className={`flex flex-col ${className}`}>
      {linhas.map((linha, i) => (
        // A máscara tem uma folga pequena (padding compensado por margem negativa)
        // para não cortar o itálico nem os descendentes.
        <motion.span
          key={i}
          initial="oculto"
          {...alvo}
          className={`-mx-[0.15em] -my-[0.15em] block overflow-hidden px-[0.15em] py-[0.15em] ${linhaClassName}`}
        >
          <motion.span
            className="block"
            variants={{ oculto: { y: '130%' }, visivel: { y: '0%' } }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: suave }}
          >
            {linha}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}
