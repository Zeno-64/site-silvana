import { depoimentos } from '../data/depoimentos'
import { Reveal } from './Reveal'

/** Fita de depoimentos: só aparece quando data/depoimentos.ts tiver conteúdo (e com autorização). */
export default function Depoimentos() {
  if (depoimentos.length === 0) return null
  return (
    <section id="depoimentos" aria-label="Avaliações" className="relative bg-fundo py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="rotulo">Avaliações</p>
        </Reveal>
      </div>
      {/* Fita nativa com encaixe, sem animação em laço. */}
      <ul className="mt-8 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 [scrollbar-width:none] md:px-8 [&::-webkit-scrollbar]:hidden">
        {depoimentos.map((d, i) => (
          <li key={i} className="w-[78vw] shrink-0 snap-start rounded-2xl bg-superficie-2 p-5 md:w-80">
            <figure>
              <blockquote className="corpo">“{d.texto}”</blockquote>
              <figcaption className="rotulo mt-4">
                {d.nome} · {d.servico}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
