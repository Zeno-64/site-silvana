import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

const suave = [0.22, 1, 0.36, 1] as const

/** Aparece subindo e clareando quando entra na tela. */
export function Reveal({
  children,
  atraso = 0,
  y = 28,
  className = '',
}: {
  children: ReactNode
  atraso?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: atraso, ease: suave }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Cada linha sobe de dentro de uma máscara. Aceita `ReactNode` por linha
 * para poder pôr uma palavra em script/degradê.
 */
export function Linhas({
  linhas,
  atraso = 0,
  className = '',
  linhaClassName = '',
  aoEntrar = true,
}: {
  linhas: ReactNode[]
  atraso?: number
  className?: string
  linhaClassName?: string
  aoEntrar?: boolean
}) {
  // Quem é observado é a MÁSCARA (sempre visível). Se observássemos o texto,
  // ele estaria cortado pelo overflow-hidden e nunca "entraria" na tela.
  const alvo = aoEntrar
    ? { whileInView: 'visivel', viewport: { once: true, margin: '-60px' } }
    : { animate: 'visivel' }
  return (
    // flex-col: em bloco normal as margens negativas de linhas vizinhas colapsariam (não somariam).
    <span className={`flex flex-col ${className}`}>
      {linhas.map((linha, i) => (
        // A máscara tem folga (padding compensado por margem negativa) para não
        // cortar o brilho rosa do título; por isso o texto começa mais abaixo (160%).
        <motion.span
          key={i}
          initial="oculto"
          {...alvo}
          className={`-mx-[0.4em] -my-[0.4em] block overflow-hidden px-[0.4em] py-[0.4em] ${linhaClassName}`}
        >
          <motion.span
            className="block"
            variants={{ oculto: { y: '160%' }, visivel: { y: '0%' } }}
            transition={{ duration: 1.1, delay: atraso + i * 0.12, ease: suave }}
          >
            {linha}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}
