import { Fragment } from 'react'
import { site } from '../lib/site'
import { IconeSeta, IconeWhatsapp } from '../lib/Icones'
import Magnetic from './Magnetic'
import { Linhas } from './Reveal'

/**
 * Celular (o que importa): foto de ponta a ponta com 46svh, depois rótulo, título,
 * serviços, botão cheio e link. Tudo, menos o título, já nasce visível: nada de
 * animação de entrada no texto nem laço infinito.
 * Computador: duas colunas, texto à esquerda e a mesma foto à direita, 4:5.
 */
export default function Hero() {
  return (
    <section id="inicio" className="relative bg-fundo">
      <div className="mx-auto grid max-w-7xl md:min-h-[100svh] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12 md:px-8 md:pt-24 md:pb-24">
        {/* A barra do menu fica por cima da parte preta da foto. */}
        <div className="h-[46svh] overflow-hidden md:order-2 md:h-auto md:aspect-[4/5] md:rounded-2xl">
          <img
            src="/img/hero-unhas.webp"
            alt="Mãos com unhas amendoadas em nude rosado sobre cetim rosé, fundo preto"
            width={1200}
            height={1600}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-[50%_0%] md:object-[50%_45%]"
          />
        </div>

        <div className="px-5 pt-6 pb-8 md:order-1 md:px-0 md:py-0">
          <p className="rotulo">
            Salão de beleza · {site.bairro},{' '}
            <span className="sm:hidden">SP</span>
            <span className="hidden sm:inline">{site.cidade}</span>
          </p>

          <h1 className="titulo titulo-hero mt-3 md:text-[length:min(5.6vw,5rem)]">
            <Linhas aoEntrar={false} linhas={['Sua autoestima', <em key="a">começa aqui.</em>]} />
          </h1>

          <p className="corpo mt-4 hidden max-w-lg md:block">
            Um salão, vários cuidados e aquele momento só seu.
          </p>

          {/* Cada item leva o ponto no fim e não quebra: a linha nunca começa com "·". */}
          <p className="corpo mt-4 [text-wrap:balance]">
            {['Cabelos', 'Unhas', 'Cílios', 'Sobrancelhas', 'Bronze'].map((s, i, todos) => (
              <Fragment key={s}>
                <span className="whitespace-nowrap">
                  {s}
                  {i < todos.length - 1 && ' ·'}
                </span>{' '}
              </Fragment>
            ))}
          </p>

          <Magnetic className="mt-6 block w-full md:w-auto">
            <a
              id="hero-cta"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="botao-texto btn-cheio w-full md:w-auto"
            >
              <IconeWhatsapp className="size-5" />
              Agendar no WhatsApp
            </a>
          </Magnetic>
          <a href="#servicos" className="botao-texto btn-link group mt-2">
            Ver serviços
            <IconeSeta className="size-4 transition-transform group-hover:translate-x-1.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
