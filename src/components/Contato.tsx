import { site } from '../lib/site'
import { IconeInstagram, IconeWhatsapp } from '../lib/Icones'
import Blobs from './Blobs'
import Magnetic from './Magnetic'
import { Linhas, Reveal } from './Reveal'

export default function Contato() {
  return (
    <section id="contato" className="grao relative isolate overflow-hidden bg-fundo py-28 sm:py-40">
      <Blobs />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="rotulo">Agende seu horário</p>
        </Reveal>
        <h2 className="titulo mt-4 text-[clamp(2.6rem,8vw,6.4rem)]">
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
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-cursor="Chamar"
              className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-rosa-claro via-rosa to-rosa-escuro px-10 py-5 text-[14px] font-medium tracking-[0.2em] text-fundo uppercase shadow-[0_20px_70px_-12px_rgba(233,160,173,0.7)]"
            >
              <IconeWhatsapp className="size-6" />
              Chamar no WhatsApp
            </a>
          </Magnetic>
        </Reveal>

        <Reveal atraso={0.45} className="mt-8">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-base tracking-[0.15em] text-texto transition-colors hover:text-rosa"
          >
            <IconeInstagram className="size-5" />
            {site.instagramUser}
          </a>
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-28 max-w-7xl border-t border-rosa/15 px-5 pt-8 text-center text-[13px] tracking-[0.2em] text-texto uppercase sm:px-8">
        © {new Date().getFullYear()} {site.nome}
      </footer>
    </section>
  )
}
