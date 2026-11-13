import { promocao } from '../data/promocao'
import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'
import Magnetic from './Magnetic'
import { Reveal } from './Reveal'

/**
 * Faixa da Black Friday. Só aparece até `promocao.ate`; depois disso (ou com a
 * lista vazia) devolve null e o hero encosta direto na galeria.
 */
export default function Promocao() {
  if (promocao.itens.length === 0) return null
  if (Date.now() > new Date(promocao.ate).getTime()) return null

  return (
    <section id="promocao" aria-label="Promoção" className="relative border-y border-rosa/40 bg-cetim py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo text-center">{promocao.rotulo}</p>
          <h2 className="titulo mt-3 text-center text-[clamp(2.2rem,5vw,3.8rem)]">
            Nossa Black <em>já começou</em>
          </h2>
        </Reveal>

        <Reveal atraso={0.15} className="mt-10 sm:mt-12">
          <ul className="divide-y divide-rosa/20 md:grid md:grid-cols-3 md:gap-6 md:divide-y-0">
            {promocao.itens.map((i) => (
              <li
                key={i.servico}
                className="flex items-baseline justify-between gap-4 py-4 md:flex-col md:items-start md:justify-start md:gap-3 md:rounded-2xl md:border md:border-rosa/25 md:bg-fundo/40 md:p-6"
              >
                <span className="corpo-pequeno">{i.servico}</span>
                <span className="titulo shrink-0 text-right text-[1.35rem] sm:text-[1.6rem] md:text-left">{i.valor}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal atraso={0.25} className="mt-10 flex justify-center">
          <Magnetic>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-rosa-claro via-rosa to-rosa-escuro px-8 py-4 text-[13px] font-medium tracking-[0.2em] text-fundo uppercase shadow-[0_14px_50px_-10px_rgba(233,160,173,0.65)]"
            >
              <IconeWhatsapp className="size-5" />
              Garantir meu horário
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}
