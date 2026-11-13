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
    <section id="promocao" aria-label="Promoção" className="relative border-y border-rosa/40 bg-cetim py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo text-center">{promocao.rotulo}</p>
          <h2 className="titulo mt-3 text-center text-[clamp(2.2rem,5vw,3.8rem)]">
            Nossa Black <em>já começou</em>
          </h2>
        </Reveal>

        {/* Celular: cartões que deslizam para o lado (como a galeria), para a faixa ficar curta. Computador: grade de 3. */}
        <Reveal atraso={0.15} className="mt-5 md:mt-12">
          <ul
            tabIndex={0}
            aria-label="Preços da Black Friday"
            className="-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-3 overflow-x-auto px-5 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {promocao.itens.map((i) => (
              <li
                key={i.servico}
                className="flex w-[44%] shrink-0 snap-start flex-col items-start justify-between gap-2.5 rounded-2xl border border-rosa/25 bg-fundo/40 p-3.5 md:w-auto md:justify-start md:gap-3 md:p-6"
              >
                <span className="corpo-pequeno">{i.servico}</span>
                <span className="titulo text-[1.25rem] sm:text-[1.6rem]">{i.valor}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal atraso={0.25} className="mt-5 flex justify-center md:mt-10">
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
