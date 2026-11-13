import { cursos } from '../data/cursos'
import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'
import { Reveal } from './Reveal'
import Tilt from './Tilt'

export default function Cursos() {
  return (
    <section id="cursos" aria-label="Cursos" className="relative bg-fundo-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo">Para quem quer aprender</p>
          <h2 className="titulo mt-3 text-[clamp(3.6rem,18vw,9.5rem)] leading-[0.95] uppercase">
            Cursos
            <em className="block text-[0.72em] leading-[1.05] normal-case">profissionais</em>
          </h2>
          <p className="subtitulo mt-6">voa, garota</p>
          <p className="corpo mt-4 max-w-2xl">
            A Silvana Ribeiro ensina, no próprio salão, as técnicas que usa no atendimento. Você sai com certificado.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-10">
          {cursos.map((c, i) => (
            <Reveal key={c.id} atraso={i * 0.15}>
              <Tilt grau={5}>
                <article
                  className="rounded-3xl border border-rosa-claro/20 p-6 sm:p-8"
                  style={{ backgroundColor: c.bg }}
                >
                  {c.foto && (
                    <img
                      src={c.foto}
                      alt={c.alt ?? ''}
                      loading="lazy"
                      className="mb-6 aspect-[4/3] w-full rounded-2xl object-cover"
                    />
                  )}
                  <p className="rotulo">Curso de</p>
                  <h3 className="titulo mt-2 text-4xl uppercase sm:text-5xl">{c.titulo}</h3>
                  <p className="subtitulo mt-1">{c.script}</p>
                  <ul className="mt-6">
                    {c.linhas.map((l) => (
                      <li key={l} className="corpo-pequeno border-b border-rosa/15 py-2.5 last:border-b-0">
                        {l}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-3 rounded-full border border-rosa/60 px-6 py-3 text-[12px] font-medium tracking-[0.2em] text-rosa uppercase transition hover:bg-rosa hover:text-fundo"
                  >
                    <IconeWhatsapp className="size-4" />
                    Quero saber das turmas
                  </a>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
