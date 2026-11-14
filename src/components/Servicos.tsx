import { useState } from 'react'
import { servicos, type Servico, type Tecnica } from '../data/servicos'
import { site } from '../lib/site'
import { Coracao, IconeSeta, IconeSetaBaixo } from '../lib/Icones'
import { useMediaQuery } from '../lib/useMediaQuery'
import { Linhas, Reveal } from './Reveal'

/** Uma linha da lista: nome à esquerda e, com os valores ligados, o preço alinhado à direita. */
function Linha({ nome, preco }: { nome: string; preco?: string }) {
  return (
    <li className="corpo flex items-baseline justify-between gap-4 border-b border-linha py-2.5 last:border-b-0">
      <span>{nome}</span>
      {preco && <span className="shrink-0 text-right">{preco}</span>}
    </li>
  )
}

function Tecnicas({ tecnicas }: { tecnicas: Tecnica[] }) {
  return (
    <ul className="mt-4">
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
      <span className="titulo-cartao block">{s.nome}</span>
      <span className="frase mt-1 block">{s.script}</span>
    </>
  )

  return (
    <article className="rounded-2xl bg-superficie-2">
      {computador ? (
        <h3 className="p-6 pb-0">{cabecalho}</h3>
      ) : (
        <h3>
          {/* A linha inteira é o botão (64 px ou mais). */}
          <button
            type="button"
            aria-expanded={aberto}
            aria-controls={painel}
            onClick={() => setAberto((a) => !a)}
            className="flex min-h-16 w-full items-center justify-between gap-4 rounded-2xl p-5 text-left"
          >
            <span>{cabecalho}</span>
            <IconeSetaBaixo
              className={`size-6 shrink-0 text-rosa transition-transform duration-300 ${aberto ? 'rotate-180' : ''}`}
            />
          </button>
        </h3>
      )}

      {mostrar && (
        <div id={painel} className="px-5 pb-5 md:px-6 md:pb-6">
          <p className="corpo mt-1 md:mt-4">{s.frase}</p>
          <Tecnicas tecnicas={s.tecnicas} />
          {s.nota && <p className="corpo-pequeno mt-4">{s.nota}</p>}
          {site.mostrarPrecos && s.temPrecos && (
            <p className="corpo-pequeno mt-4">Valores de referência. Confirme no WhatsApp.</p>
          )}
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="botao-texto btn-link mt-2 !justify-start">
            Agendar {s.nome}
            <IconeSeta className="size-4" />
          </a>
        </div>
      )}
    </article>
  )
}

/** Cardápio em texto sobre papel claro: um cartão por serviço, com as técnicas que o Instagram da Silvana mostra. */
export default function Servicos() {
  const computador = useMediaQuery('(min-width: 768px)')

  return (
    <section id="servicos" aria-label="Serviços" className="papel relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="rotulo flex items-center gap-3">
            <Coracao className="size-4" />
            Serviços
          </p>
        </Reveal>
        <h2 className="titulo mt-3">
          <Linhas linhas={['Tudo em', <em key="u">um só lugar</em>]} />
        </h2>

        <div className="mt-8 grid gap-2 md:grid-cols-2 md:items-start md:gap-6">
          {servicos.map((s, i) => (
            <Reveal key={s.id} atraso={(i % 2) * 0.05}>
              <Cartao s={s} computador={computador} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
