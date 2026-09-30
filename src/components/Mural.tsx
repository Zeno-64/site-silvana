import { depoimentos } from '../data/depoimentos'
import { resultados } from '../data/resultados'
import { site } from '../lib/site'
import { IconeInstagram, IconeSeta } from '../lib/Icones'
import { Reveal } from './Reveal'

const fotos = [...resultados, { foto: '/img/espaco-recepcao.jpg', alt: 'Recepção do salão', tag: 'Espaço' }]

function Fita({ itens, reversa = false }: { itens: typeof fotos; reversa?: boolean }) {
  // Cópias suficientes para cobrir telas largas: a animação anda 50% e
  // recomeça sem pulo (metade = 3 cópias ≈ 2.900px).
  const dobro = [...itens, ...itens, ...itens, ...itens, ...itens, ...itens]
  return (
    <div className="faixa-pausa overflow-hidden" aria-hidden="true">
      <div className={`faixa gap-4 ${reversa ? 'reversa' : ''}`} style={{ animationDuration: reversa ? '80s' : '65s' }}>
        {dobro.map((f, i) => (
          <a
            key={i}
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            tabIndex={-1}
            className="relative block h-56 w-44 shrink-0 overflow-hidden rounded-2xl border border-rosa-claro/15 sm:h-72 sm:w-56"
          >
            <img src={f.foto} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
          </a>
        ))}
      </div>
    </div>
  )
}

/** Faixa de depoimentos: só aparece quando data/depoimentos.ts tiver conteúdo. */
function Depoimentos() {
  if (depoimentos.length === 0) return null
  const dobro = [...depoimentos, ...depoimentos]
  return (
    <div className="faixa-pausa mt-16 overflow-hidden">
      <div className="faixa gap-6" style={{ animationDuration: '90s' }}>
        {dobro.map((d, i) => (
          <figure
            key={i}
            className={`w-72 shrink-0 rounded-2xl bg-creme p-6 text-fundo shadow-2xl sm:w-80 ${i % 2 ? 'rotate-[1.5deg]' : '-rotate-[1.5deg]'}`}
          >
            <blockquote className="font-titulo text-[17px] leading-snug italic">“{d.texto}”</blockquote>
            <figcaption className="mt-4 text-[12px] tracking-[0.2em] uppercase">
              {d.nome} <span className="text-rosa-escuro">· {d.servico}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function Mural() {
  const meio = Math.ceil(fotos.length / 2)
  return (
    <section id="mural" aria-label="Instagram" className="overflow-hidden bg-fundo-2 py-24 sm:py-32">
      <div className="mx-auto mb-14 max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo">No Instagram</p>
          <h2 className="titulo mt-3 max-w-2xl">
            Nosso <em>dia a dia</em>, direto do Instagram
          </h2>
          <p className="corpo mt-6 max-w-lg">
            Todo dia tem novidade no perfil, e nos destaques você encontra as avaliações das clientes.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col gap-4">
        <Fita itens={fotos.slice(0, meio)} />
        <Fita itens={fotos.slice(meio)} reversa />
      </div>

      <Depoimentos />

      <div className="mt-14 flex justify-center px-5">
        <a
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 rounded-full border border-rosa/60 px-7 py-4 text-[13px] font-medium tracking-[0.2em] text-rosa uppercase transition-colors hover:bg-rosa hover:text-fundo"
        >
          <IconeInstagram className="size-5" />
          {site.instagramUser}
          <IconeSeta className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
