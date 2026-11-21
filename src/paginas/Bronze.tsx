import Rodape from '../components/Rodape'
import { Reveal } from '../components/Reveal'
import { servicos } from '../data/servicos'
import { IconeSeta, IconeWhatsapp } from '../lib/Icones'
import { site } from '../lib/site'

// O texto vem do cartão Bronze de servicos.ts: nada é escrito de novo aqui.
const bronze = servicos.find((s) => s.id === 'bronze')!

type Foto = { src: string; alt: string; largura: number; altura: number }

// Fotos que a Silvana mandou pelo WhatsApp em 14/11/2026, recortadas em 4:5.
const resultado: Foto[] = [
  { src: '/img/bronze-frente.webp', alt: 'Marquinha de bronze na cintura, vista de frente', largura: 792, altura: 990 },
  { src: '/img/bronze-costas.webp', alt: 'Marquinha de bronze nas costas', largura: 640, altura: 800 },
]
const colo: Foto = {
  src: '/img/bronze-colo.webp',
  alt: 'Marquinha de bronze no colo, em frente à parede de folhagem',
  largura: 1000,
  altura: 1250,
}
const cabine: Foto[] = [
  { src: '/img/bronze-cabine-1.webp', alt: 'Bronzeamento com fita na cabine de luz azul', largura: 900, altura: 1124 },
  { src: '/img/bronze-cabine-2.webp', alt: 'Fita de bronzeamento aplicada, na cabine de luz azul', largura: 900, altura: 1124 },
]

function Quadro({ f, className = '' }: { f: Foto; className?: string }) {
  return (
    <div className={`aspect-[4/5] overflow-hidden rounded-2xl ${className}`}>
      <img src={f.src} alt={f.alt} width={f.largura} height={f.altura} loading="lazy" className="h-full w-full object-cover" />
    </div>
  )
}

/** Página do Bronze: as fotos e o vídeo que não cabem na página inicial. Celular primeiro. */
export default function Bronze() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-16 bg-fundo">
        <div className="relative mx-auto flex h-full max-w-3xl items-center justify-between px-5 md:px-8">
          <a href="/" className="botao-texto btn-link">
            <IconeSeta className="size-4 rotate-180" />
            Início
          </a>
          <img
            src="/img/logo.webp"
            alt=""
            width="40"
            height="40"
            className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          />
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="botao-texto btn-contorno !gap-2 !px-4">
            <IconeWhatsapp className="size-4" />
            Agendar
          </a>
        </div>
      </header>

      <main>
        <section aria-label="Bronze" className="bg-fundo pt-16">
          <div className="mx-auto max-w-3xl px-5 pt-12 pb-16 md:px-8 md:pt-16 md:pb-24">
            <p className="rotulo">Serviço</p>
            <h1 className="titulo titulo-hero mt-3">{bronze.nome}</h1>
            <p className="subtitulo mt-2">{bronze.script}</p>
            <p className="corpo mt-4 max-w-lg">{bronze.frase}</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="botao-texto btn-cheio mt-6 w-full md:w-auto"
            >
              <IconeWhatsapp className="size-5" />
              Agendar no WhatsApp
            </a>

            <h2 className="titulo mt-16">
              O <em>resultado</em>
            </h2>
            <Reveal className="mt-8 grid grid-cols-2 gap-3">
              {resultado.map((f) => (
                <Quadro key={f.src} f={f} />
              ))}
              <Quadro f={colo} className="col-span-2" />
            </Reveal>
          </div>
        </section>

        <section aria-label="Na cabine" className="bg-superficie py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <h2 className="titulo">
              Na <em>cabine</em>
            </h2>
            <Reveal className="mt-8 grid grid-cols-2 gap-3">
              {cabine.map((f) => (
                <Quadro key={f.src} f={f} />
              ))}
            </Reveal>
            {/* Não toca sozinho, não repete e só carrega quando a pessoa aperta. Sem faixa de áudio. */}
            <video
              controls
              playsInline
              muted
              preload="none"
              poster="/img/bronze-video.webp"
              width={576}
              height={984}
              aria-label="Vídeo: a marquinha do bronze e a retirada da fita"
              className="mx-auto mt-3 aspect-[576/984] w-full max-w-[360px] rounded-2xl bg-superficie-2"
            >
              <source src="/video/bronze.mp4" type="video/mp4" />
            </video>
          </div>
        </section>

        <section aria-label="Técnicas" className="bg-fundo py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <p className="rotulo">Técnicas</p>
            <ul className="mt-3">
              {bronze.tecnicas.map((t) => (
                <li key={t.nome} className="corpo border-b border-linha py-3 last:border-b-0">
                  {t.nome}
                </li>
              ))}
            </ul>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="botao-texto btn-contorno mt-8 w-full md:w-auto"
            >
              Agendar bronze
            </a>
            <div>
              <a href="/" className="botao-texto btn-link mt-2">
                <IconeSeta className="size-4 rotate-180" />
                Voltar ao início
              </a>
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  )
}
