# SR Espaço da Beleza — site da Silvana

Site de uma página de um salão de beleza (cabelos, unhas, cílios, sobrancelhas,
tranças, bronze e cursos). Todo CTA leva ao WhatsApp; sem backend. Instagram da
cliente: https://www.instagram.com/srespacodabelezaofc/

**Antes de mexer, ler [CONTEXTO.md](CONTEXTO.md)** (decisões, o que já existe,
armadilhas) e [CONTEUDO-PENDENTE.md](CONTEUDO-PENDENTE.md) (o que falta da cliente).

## Fluxo de trabalho (regra fixa)

- Ao **finalizar cada tarefa**: conferir (`npm run build` passando, sem erro de
  console no preview), **commitar e dar `git push origin main`**, sem pedir
  confirmação. Remoto: https://github.com/Zeno-64/site-silvana
- **Não rodar build para deploy nem `wrangler deploy`**: o Cloudflare já faz o
  build e a publicação automaticamente a cada push.
- Depois do push, relatar o hash do commit e confirmar que o remoto recebeu.
- Continua valendo perguntar antes de algo destrutivo ou fora do fluxo normal
  (apagar histórico, `push --force`, mexer em conta/DNS/domínio).
- Mensagens de commit em português, no estilo dos outros repositórios do Kevin.

## Stack

Vite 8 + React 19 + TypeScript 6 + Tailwind 4 (`@tailwindcss/vite`, sem
`tailwind.config`) + framer-motion 13. Node 22 (`.nvmrc`). Sem react-router
(página única com âncoras). Deploy: Cloudflare, assets estáticos de `dist/`
(`wrangler.jsonc`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
```

## Convenções

- **Português** em todo texto do site, nomes de componentes/variáveis e comentários.
- **Conteúdo separado do código**: contato/marca em `src/lib/site.ts`; serviços em
  `src/data/capitulos.ts`; galeria em `src/data/resultados.ts`;
  `antesDepois.ts` e `depoimentos.ts` (lista vazia = seção não renderiza).
- **Tokens de design** só em `src/index.css` (`@theme`): cores `fundo`, `rosa*`,
  `ouro`, `creme`, `texto`, `suave`; fontes `font-titulo` (Playfair Display),
  `font-script` (Great Vibes), `font-sans` (Jost). Não usar Cormorant Garamond
  (quebra ê/ô em pt-BR).
- **Animação**: só `transform` e `opacity`; respeitar `prefers-reduced-motion`
  (já há `MotionConfig reducedMotion="user"` em `main.tsx`). Efeitos de mouse
  (cursor, magnético, tilt) só com `pointerType === 'mouse'`.
- **Não inventar informação da cliente** (preços, horários, técnicas, números).
  Se não está no Instagram nem foi dito pelo Kevin, vira item em
  `CONTEUDO-PENDENTE.md`.
- Fotos de clientes só com autorização delas.

## Armadilha conhecida

`whileInView` em elemento dentro de `overflow-hidden` nunca dispara (o elemento
está cortado, logo "fora da tela"). Em `Reveal.tsx` (`Linhas`) a máscara é quem
é observada e o texto anima por variantes. Ao criar revelações com máscara,
seguir o mesmo padrão.

## Preview

`.claude/launch.json` traz a entrada `site-silvana` (porta 5174). Se o app abrir
outro servidor, o `launch.json` lido é o da raiz do workspace.
