import { site } from '../lib/site'
import { IconeWhatsapp } from '../lib/Icones'
import Magnetic from './Magnetic'
import { Linhas, Reveal } from './Reveal'

export default function Contato() {
  return (
    <section id="contato" className="relative bg-superficie py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="rotulo">Já agendou seu horário?</p>
        </Reveal>
        <h2 className="titulo mt-3">
          <Linhas linhas={['Vamos cuidar', <em key="v">de você?</em>]} />
        </h2>
        <Reveal>
          <p className="corpo mx-auto mt-4 max-w-lg">
            Chame no WhatsApp, conte o que você quer e a gente encontra o melhor horário.
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <Magnetic forca={0.4} className="block w-full md:w-auto">
            <a
              id="contato-cta"
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="botao-texto btn-cheio w-full md:w-auto"
            >
              <IconeWhatsapp className="size-5" />
              Chamar no WhatsApp
            </a>
          </Magnetic>
        </Reveal>

        <Reveal className="mt-6">
          <div className="corpo-pequeno">
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
                className="inline-flex min-h-12 items-center px-2"
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
