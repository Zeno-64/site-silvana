import { IconeSeta } from '../lib/Icones'
import { Linhas, Reveal } from './Reveal'

// As duas únicas fotos de bronze da página inicial: os recortes de fundo rosa.
// O resto (cabine de luz azul e vídeo) fica só em /bronze/.
const fotos = [
  { src: '/img/bronze-frente.webp', alt: 'Marquinha de bronze na cintura, vista de frente', largura: 792, altura: 990 },
  { src: '/img/bronze-costas.webp', alt: 'Marquinha de bronze nas costas', largura: 640, altura: 800 },
]

/** Faixa do Bronze: duas fotos e a porta para a página do Bronze. Sem cursiva e sem botão cheio. */
export default function FaixaBronze() {
  return (
    <section id="bronze" aria-label="Bronze" className="bg-superficie py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div>
          <Reveal>
            <p className="rotulo">Bronze</p>
          </Reveal>
          <h2 className="titulo mt-3">
            <Linhas linhas={['Marquinha', <em key="p">no ponto</em>]} />
          </h2>
          <a href="/bronze/" className="botao-texto btn-contorno mt-8 hidden md:inline-flex">
            Ver o bronze
            <IconeSeta className="size-4" />
          </a>
        </div>

        <Reveal className="grid grid-cols-2 gap-3">
          {fotos.map((f) => (
            <div key={f.src} className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={f.src}
                alt={f.alt}
                width={f.largura}
                height={f.altura}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Reveal>

        {/* No celular o botão vem depois das fotos, com a largura toda. */}
        <a href="/bronze/" className="botao-texto btn-contorno w-full md:hidden">
          Ver o bronze
          <IconeSeta className="size-4" />
        </a>
      </div>
    </section>
  )
}
