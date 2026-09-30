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
    <span className={`block ${className}`}>
      {linhas.map((linha, i) => (
        // padding-bottom evita cortar as hastes do script pela máscara
        <motion.span
          key={i}
          initial="oculto"
          {...alvo}
          className={`block overflow-hidden pb-[0.14em] -mb-[0.14em] ${linhaClassName}`}
        >
          <motion.span
            className="block"
            variants={{ oculto: { y: '115%' }, visivel: { y: '0%' } }}
            transition={{ duration: 1.1, delay: atraso + i * 0.12, ease: suave }}
          >
            {linha}
          </motion.span>
        </motion.span>
      ))}
    </span>
  )
}
