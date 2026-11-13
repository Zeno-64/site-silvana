import { useEffect, useState } from 'react'

/** true enquanto a media query casar (ex.: '(min-width: 768px)', o corte `md` do Tailwind). */
export function useMediaQuery(consulta: string) {
  const [casa, setCasa] = useState(() => window.matchMedia(consulta).matches)
  useEffect(() => {
    const mq = window.matchMedia(consulta)
    const atualizar = () => setCasa(mq.matches)
    atualizar()
    mq.addEventListener('change', atualizar)
    return () => mq.removeEventListener('change', atualizar)
  }, [consulta])
  return casa
}
