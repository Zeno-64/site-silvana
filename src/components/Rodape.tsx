import { site } from '../lib/site'
import { Coracao } from '../lib/Icones'
import Monograma from './Monograma'

/** Fecho da página: corações do logo separam os itens. */
export default function Rodape() {
  const separador = <Coracao className="size-2.5 shrink-0 text-rosa" />
  return (
    <footer className="corpo-pequeno border-t border-linha bg-fundo px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2">
        <Monograma className="size-12" />
        <span>{site.nome}</span>
        {separador}
        <span>
          {site.bairro}, {site.cidade}
        </span>
        {separador}
        <a href={site.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center px-1">
          Instagram
        </a>
        {separador}
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
