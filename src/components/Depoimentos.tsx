import { depoimentos } from '../data/depoimentos'
import { Reveal } from './Reveal'

/** Faixa de depoimentos: só aparece quando data/depoimentos.ts tiver conteúdo (e com autorização). */
export default function Depoimentos() {
  if (depoimentos.length === 0) return null
  const dobro = [...depoimentos, ...depoimentos]
  return (
    <section id="depoimentos" aria-label="Avaliações" className="relative overflow-hidden bg-fundo py-20 sm:py-28">
      <div className="mx-auto mb-10 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo">Avaliações</p>
        </Reveal>
      </div>
      <div className="faixa-pausa overflow-hidden">
        <div className="faixa gap-6" style={{ animationDuration: '90s' }}>
          {dobro.map((d, i) => (
            <figure
              key={i}
              className="w-72 shrink-0 rounded-2xl border border-rosa/25 bg-cetim p-6 sm:w-80"
            >
              <blockquote className="corpo">“{d.texto}”</blockquote>
              <figcaption className="rotulo mt-4">
                {d.nome} · {d.servico}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
