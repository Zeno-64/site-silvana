import { IconeSeta } from '../lib/Icones'
import { site } from '../lib/site'
import { Linhas, Reveal } from './Reveal'

/**
 * Quem cuida de você: apresentação da Silvana e higiene. A foto é a da equipe, que a
 * Silvana mandou com a legenda "Equipe" (quadrada: três rostos não cabem num arco).
 * Ninguém é nomeado: não se sabe quem é quem. Fachada e recepção seguem fora até
 * chegarem fotos novas (CONTEUDO-PENDENTE.md).
 */
export default function Espaco() {
  return (
    <section id="espaco" aria-label="O salão" className="relative bg-fundo py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:content-center md:gap-x-16 md:gap-y-8 md:px-8">
        <div className="md:col-start-1 md:self-end">
          <Reveal>
            <p className="rotulo">O salão</p>
          </Reveal>
          <h2 className="titulo mt-3">
            <Linhas linhas={['Quem cuida', <em key="p">de você</em>]} />
          </h2>
          <p className="subtitulo mt-2">cuidado e higiene em cada detalhe</p>
        </div>

        <div className="mx-auto w-full max-w-[360px] md:col-start-2 md:row-span-2 md:row-start-1 md:max-w-[440px] md:self-center">
          <Reveal>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src="/img/equipe.webp"
                alt="Equipe do SR Espaço da Beleza"
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="md:col-start-1 md:self-start">
          <p className="corpo max-w-lg">
            O {site.nome} é o salão da Silvana Ribeiro, em {site.bairro}. Ela atende, tem uma equipe ao lado e ainda
            ensina: é a instrutora dos cursos de unhas e de cílios da casa.
          </p>
          <p className="corpo mt-4 max-w-lg">
            Alicates e espátulas são esterilizados, porque a segurança de cada cliente é essencial.
          </p>
          <a href="#cursos" className="botao-texto btn-link mt-4 !justify-start">
            Conheça os cursos
            <IconeSeta className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
