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
- Destaque: degradê rosa-ouro (`#f9d4d8` → `#e9a0ad` → `#c9707f`), com ouro `#e2b978` só no Bronze.
- Fontes: **Playfair Display** (títulos), **Great Vibes** (palavras em script), **Jost** (texto).
- Logo: monograma "SR" com aro rosa e corações.
- Tokens em `src/index.css` (`@theme`).

## O que faz o site fugir do padrão

| Onde | Efeito |
|---|---|
| Hero | Monograma que se desenha sozinho, manchas de luz e reflexo de cetim, fotos em arco com parallax pelo mouse, título revelado linha a linha |
| Faixa de texto | Letras gigantes que aceleram e invertem com a velocidade da rolagem |
| Serviços | 6 "capítulos" presos na tela: o fundo troca de cor e a foto abre em arco a cada serviço |
| Resultados | A rolagem vertical vira deslizamento horizontal da galeria |
| Antes/depois | Slider arrastável (mouse, toque e teclado). Só aparece com dados |
| Espaço | Fotos em camadas com parallax de velocidades diferentes |
| Global | Cursor próprio com rótulo (só desktop), botões magnéticos, cartões que inclinam em 3D, contadores, barra de progresso, botão flutuante de WhatsApp |

Respeita `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` + CSS). Só anima `transform` e `opacity`.

## Onde mexer

```
src/lib/site.ts          WhatsApp, Instagram, nome, seguidoras
src/data/capitulos.ts    serviços (texto, cor do fundo, foto)
src/data/resultados.ts   galeria horizontal
src/data/antesDepois.ts  pares antes/depois (vazio = seção oculta)
src/data/depoimentos.ts  depoimentos (vazio = faixa oculta)
public/img/              fotos
brand/instagram/         material bruto baixado do perfil
```

O que ainda falta da cliente está em [CONTEUDO-PENDENTE.md](CONTEUDO-PENDENTE.md).
