# SR Espaço da Beleza

Site de uma página do salão da Silvana (cabelos, unhas, cílios, sobrancelhas, tranças, bronze e cursos).
Todo CTA leva para o WhatsApp. Sem backend.

**Stack:** Vite 8 + React 19 + TypeScript + Tailwind 4 (`@tailwindcss/vite`) + framer-motion.
Deploy: Cloudflare Workers (assets estáticos), `wrangler.jsonc` apontando para `dist/`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc + vite build -> dist/
```

## Identidade (tirada do Instagram)

- Fundo: cetim chocolate `#120a09`, o mesmo dos posts.
- Destaque: rosa único (`#e9a0ad`), com `#f9d4d8` e `#c9707f` só no degradê dos botões.
- Fontes: **Playfair Display** (títulos), **Great Vibes** (frases em script, sempre literais do perfil), **Jost** (texto).
- Logo: monograma "SR" com anel duplo e corações, redesenhado em SVG a partir do letreiro do salão.
- Tokens em `src/index.css` (`@theme`).

## Ordem da página

Hero · Promoção (Black Friday, some sozinha depois de 20/11/2026) · Resultados (galeria) ·
Antes e depois (oculto sem dados) · Depoimentos (oculto sem dados) · Serviços (cardápio em texto) ·
Quem cuida de você · Contato · Cursos · Rodapé. A direção completa está em
[levantamento/direcao.md](levantamento/direcao.md).

Respeita `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` + CSS). Só anima `transform` e `opacity`.

## Onde mexer

```
src/lib/site.ts          WhatsApp, Instagram, nome, bairro, cidade, endereço, horário, mostrarPrecos
src/data/servicos.ts     cardápio de serviços (técnicas e valores de referência)
src/data/resultados.ts   galeria
src/data/promocao.ts     faixa da Black Friday (com data de fim)
src/data/cursos.ts       cursos de unhas e de cílios
src/data/antesDepois.ts  pares antes/depois (vazio = seção oculta)
src/data/depoimentos.ts  depoimentos (vazio = faixa oculta)
public/img/              fotos
levantamento/            leitura do Instagram, direção do site e dúvidas
```

O que ainda falta da cliente está em [CONTEUDO-PENDENTE.md](CONTEUDO-PENDENTE.md).
