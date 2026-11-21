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

      {/* Assinatura de quem fez o site: linha própria, separada do rodapé da cliente por um traço curto.
          Só o nome é sublinhado, para ficar claro que é link sem trazer cor nem fonte de fora. */}
      <div className="mt-4 flex flex-col items-center">
        <span aria-hidden="true" className="block w-8 border-t border-linha" />
        <a
          href={site.autor.url}
          target="_blank"
          rel="noopener"
          aria-label={`Site por ${site.autor.nome}`}
          className="mt-2 inline-flex min-h-12 items-center gap-1 px-2"
        >
          Site por
          <span className="text-texto underline decoration-rosa underline-offset-4">{site.autor.nome}</span>
        </a>
      </div>
    </footer>
  )
}
