import { site } from '../lib/site'
import { IconeSeta } from '../lib/Icones'
import { Reveal } from './Reveal'
import Tilt from './Tilt'

// Detalhes (carga horária, preço, datas) ainda dependem da cliente.
const cursos: { nome: string; script: string; foto?: string; hint: string }[] = [
  { nome: 'Cílios', script: 'lash design', hint: 'Fale com a gente e saiba datas e valores.' },
  { nome: 'Unhas', script: 'nail design', foto: '/img/unhas-video.jpg', hint: 'Fale com a gente e saiba datas e valores.' },
]

export default function Cursos() {
  return (
    <section id="cursos" className="relative bg-fundo py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-[12px] tracking-[0.3em] text-rosa uppercase">Cursos profissionais</p>
          <h2 className="mt-3 max-w-2xl font-titulo text-[clamp(2.2rem,6vw,4.6rem)] leading-[1] font-medium text-creme">
            Seja a sua <span className="ouro-rosa font-script text-[1.2em] font-normal">melhor versão</span> — e transforme em profissão
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-10">
          {cursos.map((c, i) => (
            <Reveal key={c.nome} atraso={i * 0.15}>
              <Tilt grau={5}>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Saber mais"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-rosa-claro/20 sm:aspect-[16/11]"
                >
                  {c.foto ? (
                    <img
                      src={c.foto}
                      alt=""
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-suave)] group-hover:scale-110"
                    />
                  ) : (
                    <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(230,168,207,0.35),transparent_60%),#2a1626] transition-transform duration-[1400ms] group-hover:scale-110" />
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-fundo via-fundo/50 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                    <span>
                      <span className="block text-[11px] tracking-[0.3em] text-rosa uppercase">Curso de</span>
                      <span className="block font-titulo text-4xl font-medium text-creme uppercase sm:text-5xl">{c.nome}</span>
                      <span className="mt-1 block font-script text-3xl text-rosa-claro">{c.script}</span>
                      <span className="mt-2 block max-w-xs text-sm text-texto">{c.hint}</span>
                    </span>
                    <span className="grid size-12 shrink-0 place-items-center rounded-full border border-rosa-claro/60 text-rosa-claro transition-colors group-hover:bg-rosa-claro group-hover:text-fundo">
                      <IconeSeta className="size-5 -rotate-45 transition-transform group-hover:rotate-0" />
                    </span>
                  </span>
                </a>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
