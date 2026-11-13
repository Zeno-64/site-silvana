import { site } from '../lib/site'
import { Coracao } from '../lib/Icones'
import Monograma from './Monograma'

/** Fecho da página, numa linha: corações do logo separam os itens. */
export default function Rodape() {
  const separador = <Coracao className="size-2.5 shrink-0 text-rosa" />
  return (
    <footer className="border-t border-rosa/15 bg-fundo px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[13px] tracking-[0.2em] text-texto uppercase">
        <Monograma className="size-12" />
        <span>{site.nome}</span>
        {separador}
        <span>
          {site.bairro}, {site.cidade}
        </span>
        {separador}
        <a href={site.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-rosa">
          Instagram
        </a>
        {separador}
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
