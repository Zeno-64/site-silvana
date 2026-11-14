import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'
import Magnetic from './Magnetic'
import { Linhas, Reveal } from './Reveal'

export default function Contato() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-superficie py-16 md:py-24">
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="rotulo">Já agendou seu horário?</p>
        </Reveal>
        <h2 className="titulo mt-3">
          <Linhas linhas={['Vamos cuidar', <em key="v">de você?</em>]} />
        </h2>
        <Reveal atraso={0.2}>
          <p className="corpo mx-auto mt-8 max-w-lg">
            Chame no WhatsApp, conte o que você quer e a gente encontra o melhor horário.
          </p>
        </Reveal>

        <Reveal atraso={0.35} className="mt-12">
          <Magnetic forca={0.4}>
            <a
              id="contato-cta"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="botao-texto inline-flex items-center gap-3 rounded-full bg-rosa px-8 py-4 text-fundo"
            >
              <IconeWhatsapp className="size-6" />
              Chamar no WhatsApp
            </a>
          </Magnetic>
        </Reveal>

        <Reveal atraso={0.45} className="mt-10">
          <div className="corpo-pequeno space-y-1">
            <p>
              {site.bairro} · {site.cidade}
            </p>
            {site.endereco && <p>{site.endereco}</p>}
            {site.horario && <p>{site.horario}</p>}
            <p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-rosa"
              >
                {site.instagramUser}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
