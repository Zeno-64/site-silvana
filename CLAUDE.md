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
  `creme`, `titulo`, `texto`; fontes `font-titulo` (Playfair Display),
  `font-script` (Great Vibes), `font-sans` (Jost). Não usar Cormorant Garamond
  (quebra ê/ô em pt-BR).
- **Tipografia: 3 papéis, cada um com UMA fonte e UMA cor** (pedido do Kevin,
  para reduzir poluição visual). Usar as classes de `index.css`, sem inventar
  cor/fonte por componente:
  - **Título** (`.titulo`): Playfair, branco puro + leve brilho rosa
    (`text-shadow` em `em`, acompanha o tamanho). Palavra de destaque dentro do
    título = `<em>` (só itálico; nada de script, degradê ou outra cor). O
    tamanho padrão é o de título de seção; hero/capítulos/contato sobrescrevem
    só o tamanho com `text-[...]`.
  - **Subtítulo** (`.subtitulo`): Great Vibes, rosa. **Rótulo** (`.rotulo`,
    linha pequena em maiúsculas acima do título): o mesmo rosa.
  - **Texto** (`.corpo`; `.corpo-pequeno` para legendas/listas/cartões): Jost,
    sempre `texto`. Nada de `suave`, `creme` ou opacidades para variar o texto.
  - Botões: contorno/preenchimento em `rosa`; o CTA principal usa o degradê
    rosa. Não criar cor de destaque por seção (os capítulos só trocam o fundo).
  - Se um título tiver brilho e estiver dentro de máscara `overflow-hidden`,
    a máscara precisa de folga (ver `Linhas`), senão corta o brilho.
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
