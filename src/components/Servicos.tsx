import { useState } from 'react'
import { servicos, type Servico, type Tecnica } from '../data/servicos'
import { site } from '../lib/site'
import { Coracao } from '../lib/Icones'
import { useMediaQuery } from '../lib/useMediaQuery'
import { Linhas, Reveal } from './Reveal'

/** Uma linha da lista: nome à esquerda e, com os valores ligados, o preço alinhado à direita. */
function Linha({ nome, preco }: { nome: string; preco?: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-rosa/15 py-2.5 last:border-b-0">
      <span className="corpo-pequeno">{nome}</span>
      {preco && <span className="corpo-pequeno shrink-0 text-right">{preco}</span>}
    </li>
  )
}

function Tecnicas({ tecnicas }: { tecnicas: Tecnica[] }) {
  return (
    <ul className="mt-6">
      {tecnicas.flatMap((t) => {
        if (!site.mostrarPrecos) return [<Linha key={t.nome} nome={t.nome} />]
        // Com preço: técnica agrupada abre nas linhas da tabela.
        if (t.linhas) return t.linhas.map((l) => <Linha key={l.nome} nome={l.nome} preco={l.preco} />)
        return [<Linha key={t.nome} nome={t.nome} preco={t.preco} />]
      })}
    </ul>
  )
}

function Cartao({ s, computador }: { s: Servico; computador: boolean }) {
  // No celular é sanfona (Unhas começa aberto); no computador fica tudo aberto.
  const [aberto, setAberto] = useState(s.id === 'unhas')
  const mostrar = computador || aberto
  const painel = `servico-${s.id}`

  const cabecalho = (
    <>
      <span className="titulo block text-[clamp(1.9rem,3vw,2.6rem)] uppercase">{s.nome}</span>
      <span className="subtitulo mt-1 block">{s.script}</span>
    </>
  )

  return (
    <article
      className="rounded-3xl border border-rosa-claro/20 p-6 sm:p-8"
      style={{ backgroundColor: s.bg }}
    >
      {computador ? (
        <h3>{cabecalho}</h3>
      ) : (
        <h3>
          <button
            type="button"
            aria-expanded={aberto}
            aria-controls={painel}
            onClick={() => setAberto((a) => !a)}
            className="flex w-full items-center justify-between gap-4 text-left"
          >
            <span>{cabecalho}</span>
            <Coracao
              className={`size-5 shrink-0 text-rosa transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
            />
          </button>
        </h3>
      )}

      {mostrar && (
        <div id={painel}>
          <p className="corpo mt-5">{s.frase}</p>
          <Tecnicas tecnicas={s.tecnicas} />
          {s.nota && <p className="corpo-pequeno mt-4">{s.nota}</p>}
          {site.mostrarPrecos && s.temPrecos && (
            <p className="corpo-pequeno mt-4">Valores de referência. Confirme no WhatsApp.</p>
          )}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center rounded-full border border-rosa/60 px-6 py-3 text-[12px] font-medium tracking-[0.2em] text-rosa uppercase transition hover:bg-rosa hover:text-fundo"
          >
            Agendar {s.nome}
          </a>
        </div>
      )}
    </article>
  )
}

/** Cardápio em texto: um cartão por serviço, com as técnicas que o Instagram da Silvana mostra. */
export default function Servicos() {
  const computador = useMediaQuery('(min-width: 768px)')

  return (
    <section id="servicos" aria-label="Serviços" className="relative bg-fundo py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo flex items-center gap-3">
            <Coracao className="size-4" />
            Serviços
          </p>
        </Reveal>
        <h2 className="titulo mt-4">
          <Linhas linhas={['Tudo em', <em key="u">um só lugar</em>]} />
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:items-start md:gap-6">
          {servicos.map((s, i) => (
            <Reveal key={s.id} atraso={(i % 2) * 0.1}>
              <Cartao s={s} computador={computador} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
