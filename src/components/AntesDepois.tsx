import { useRef, useState } from 'react'
import { antesDepois, type CasoAntesDepois } from '../data/antesDepois'
import { Reveal } from './Reveal'

/** Slider arrastável: mouse, toque ou setas do teclado. */
function Comparador({ caso }: { caso: CasoAntesDepois }) {
  const [p, setP] = useState(50)
  const caixa = useRef<HTMLDivElement>(null)

  const atualizar = (clientX: number) => {
    const r = caixa.current?.getBoundingClientRect()
    if (!r) return
    setP(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }

  return (
    <figure className="w-full">
      <div
        ref={caixa}
        className="group relative aspect-[4/5] cursor-ew-resize touch-pan-y overflow-hidden rounded-3xl border border-rosa-claro/20 select-none"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          atualizar(e.clientX)
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.currentTarget.hasPointerCapture(e.pointerId)) atualizar(e.clientX)
        }}
      >
        <img src={caso.depois} alt={`${caso.servico}: depois`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <img
          src={caso.antes}
          alt={`${caso.servico}: antes`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}
          draggable={false}
        />

        <span className="absolute top-4 left-4 rounded-full bg-fundo/70 px-3 py-1 text-[10px] tracking-[0.25em] text-creme uppercase backdrop-blur">
          Antes
        </span>
        <span className="absolute top-4 right-4 rounded-full bg-fundo/70 px-3 py-1 text-[10px] tracking-[0.25em] text-creme uppercase backdrop-blur">
          Depois
        </span>

        <div className="pointer-events-none absolute inset-y-0 w-px bg-rosa-claro" style={{ left: `${p}%` }}>
          <span className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-rosa-claro bg-fundo/60 text-rosa-claro shadow-[0_0_30px_rgba(233,160,173,0.5)] backdrop-blur transition-transform group-active:scale-90 group-focus-within:ring-2 group-focus-within:ring-rosa">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={p}
          onChange={(e) => setP(Number(e.target.value))}
          aria-label={`Comparar antes e depois — ${caso.servico}`}
          className="absolute inset-0 h-full w-full opacity-0 [pointer-events:none]"
        />
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="subtitulo text-3xl">{caso.servico}</span>
        <span className="corpo-pequeno">{caso.legenda}</span>
      </figcaption>
    </figure>
  )
}

/** A seção só existe quando há casos cadastrados em data/antesDepois.ts. */
export default function AntesDepois() {
  if (antesDepois.length === 0) return null
  return (
    <section id="antes-depois" aria-label="Antes e depois" className="bg-fundo-2 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="rotulo">Antes &amp; depois</p>
          <h2 className="titulo mt-3 max-w-2xl">
            Arraste e veja a <em>transformação</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {antesDepois.map((caso, i) => (
            <Reveal key={caso.antes} atraso={i * 0.1}>
              <Comparador caso={caso} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
