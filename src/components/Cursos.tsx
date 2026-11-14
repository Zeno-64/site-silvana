import { cursos } from '../data/cursos'
import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'
import { Reveal } from './Reveal'

export default function Cursos() {
  return (
    <section id="cursos" aria-label="Cursos" className="relative bg-fundo py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="rotulo">Para quem quer aprender</p>
          <h2 className="titulo mt-3">
            Cursos <em>profissionais</em>
          </h2>
          <p className="subtitulo mt-2">voa, garota</p>
          <p className="corpo mt-4 max-w-2xl">
            A Silvana Ribeiro ensina, no próprio salão, as técnicas que usa no atendimento. Você sai com certificado.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-3 md:grid-cols-2 md:gap-6">
          {cursos.map((c, i) => (
            <Reveal key={c.id} atraso={i * 0.05}>
              <article className="h-full rounded-2xl bg-superficie-2 p-5 md:p-6">
                {c.foto && (
                  <img
                    src={c.foto}
                    alt={c.alt ?? ''}
                    loading="lazy"
                    className="mb-4 aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                )}
                <p className="rotulo">{c.rotulo}</p>
                <h3 className="titulo-cartao mt-2">{c.titulo}</h3>
                <ul className="mt-4">
                  {c.linhas.map((l) => (
                    <li key={l} className="corpo border-b border-linha py-3 last:border-b-0">
                      {l}
                    </li>
                  ))}
                </ul>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="botao-texto btn-contorno mt-4 w-full md:w-auto"
                >
                  <IconeWhatsapp className="size-4" />
                  Quero saber das turmas
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
