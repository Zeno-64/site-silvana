# SR Espaço da Beleza — site da Silvana

Site de um salão de beleza (cabelos, unhas, cílios, sobrancelhas, tranças, bronze e
cursos): a página inicial e a página do Bronze (`/bronze/`). Todo CTA leva ao WhatsApp; sem backend. Instagram da
cliente: https://www.instagram.com/srespacodabelezaofc/

**Antes de mexer, ler [CONTEXTO.md](CONTEXTO.md)** (decisões, o que já existe,
armadilhas), [levantamento/direcao-visual.md](levantamento/direcao-visual.md) (a
aparência) e [CONTEUDO-PENDENTE.md](CONTEUDO-PENDENTE.md) (o que falta da cliente).

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
`tailwind.config`) + framer-motion 13. Node 22 (`.nvmrc`). Sem react-router:
duas páginas estáticas, a inicial (`index.html`, com âncoras) e a do Bronze
(`bronze/index.html`, entrada `src/bronze.tsx`, componente `src/paginas/Bronze.tsx`),
declaradas em `build.rollupOptions.input` no `vite.config.ts`. Deploy: Cloudflare, assets estáticos de `dist/`
(`wrangler.jsonc`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc -b && vite build
```

## Convenções

- **Português** em todo texto do site, nomes de componentes/variáveis e comentários.
- **Conteúdo separado do código**: contato/marca/local em `src/lib/site.ts`
  (`endereco` e `horario` vazios = não aparecem; `mostrarPrecos` liga os valores);
  serviços em `src/data/servicos.ts`; galeria em `src/data/resultados.ts`;
  Black Friday em `src/data/promocao.ts` (tem data de fim); cursos em
  `src/data/cursos.ts`; `antesDepois.ts` e `depoimentos.ts` (lista vazia = seção
  não renderiza).
- **O site é para celular** (cerca de 90% das visitas vêm do Instagram, no telefone).
  Toda decisão é tomada em 375×812 e conferida em 360×640; o computador herda os
  tokens e as regras, sem efeito próprio novo. **Conferir sempre nos dois tamanhos.**
- **Duas direções mandam:** `levantamento/direcao.md` (ordem das seções, copy, fotos)
  e **`levantamento/direcao-visual.md` (aparência: cor, tipografia, forma, espaço,
  fotos e movimento; vence `direcao.md` onde as duas discordarem)**. Dúvidas e desvios
  da implementação ficam em `levantamento/duvidas.md`. O script (`.subtitulo`) é
  sempre uma frase literal do perfil da cliente.
- **Tokens de design** só em `src/index.css` (`@theme`); nenhum hex fora dele (exceto
  o degradê do `Monograma.tsx`, que é a logo). Superfícies escuras: `fundo`,
  `superficie`, `superficie-2` (cartão), `linha` (divisória de 1 px). Texto: `titulo`
  (branco quente), `texto`, `texto-suave`. Destaque: `rosa` (e `rosa-claro` só no
  botão pressionado). Seção clara: `.papel` (só Serviços) troca as variáveis dentro
  dela (`papel`, `papel-2`, `linha-papel`, `tinta`, `tinta-suave`, `rosa-profundo`);
  os componentes seguem usando as mesmas classes. Fontes: `font-titulo` (Playfair
  Display), `font-script` (Great Vibes), `font-sans` (Jost). Não usar Cormorant
  Garamond (quebra ê/ô em pt-BR).
- **Nada de cor absoluta, brilho, sombra, degradê ou transparência de `rosa`.**
  Sem `#fff`/`#000`, sem `text-shadow`. Cartão se separa do fundo pelo degrau de
  superfície, não por borda. Borda só em botão de contorno (`rosa` cheio) e divisória
  (`linha`). Sombra: só no botão flutuante. Raios: 16 px (cartão e foto) e total
  (botão). Não há arco: a foto de "Quem cuida de você" é a da equipe, quadrada.
- **Tipografia: 9 estilos, sempre os mesmos**, em classes de `index.css`; nenhum
  `text-[...]` solto em componente (única exceção: o título do hero no computador).
  Nenhum texto abaixo de 12 px; corpo em Jost 400.
  - `.titulo` (Playfair 500, `titulo`), `.titulo-hero` (mesmo, maior) e
    `.titulo-cartao`. Palavra de destaque = `<em>` (só itálico). Sem maiúsculas em
    Playfair.
  - `.frase`: Playfair itálico, `rosa`; as frases da cliente dentro de cartões.
  - `.subtitulo`: Great Vibes, `rosa`. **Cursiva no máximo 3 vezes na página**, uma
    por seção, só em cabeçalho (Resultados, Quem cuida de você, Cursos). Na página do Bronze,
    uma só ("ativando a marquinha").
  - `.corpo` (Jost 400, `texto`), `.corpo-pequeno` (`texto-suave`: legendas, notas,
    rodapé; nunca em parágrafo principal nem em item de lista).
  - `.rotulo` (Jost 500, maiúsculas, `rosa`) e `.botao-texto` (Jost 600, maiúsculas).
- **Botões: três tipos, e só eles** (classes `btn-cheio`, `btn-contorno`, `btn-link`
  em `index.css`, sempre junto de `.botao-texto`). Cheio (52 px, `rosa`, texto
  `fundo`): no máximo um por tela (hero, Contato e menu do celular); o flutuante some
  enquanto o do hero, o da Promoção ou o do Contato está visível. O CTA da Promoção é
  contorno, porque a faixa é curta e o cheio dela apareceria junto com o do hero. Contorno (48 px). Link (texto `rosa` +
  seta, 48 px de toque). Sem degradê; dentro de `.papel` só entra link. Todo alvo de
  toque tem 44 px ou mais.
- **Espaço:** escala 4, 8, 12, 16, 24, 32, 48, 64, 96 px; margem lateral de 20 px no
  celular; seção com 64 px em cima e embaixo (96 no computador).
- **Animação**: só `transform` e `opacity`; respeitar `prefers-reduced-motion`
  (já há `MotionConfig reducedMotion="user"` em `main.tsx`). A primeira tela não
  depende de animação (só o título sobe pela máscara, em até 0,6 s). Revelação ao
  rolar: 16 px, 0,5 s, atraso máximo de 0,1 s, uma vez só. **Nada em laço infinito.**
  Efeitos de mouse (magnético, tilt) só com `pointerType === 'mouse'`.
- **Cursor**: só CSS, sem JavaScript. Seta rosa em SVG (`public/cursor/seta.svg`
  e `seta-link.svg`, esta para links/botões), ligada em `src/index.css`. Foi
  escolha do Kevin trocar o cursor animado com rótulo por este; não recriar o
  componente. Para arrastar, usar os cursores nativos (`cursor-grab`,
  `cursor-ew-resize`), que vencem a seta por serem declarados no elemento.
- **Conteúdo separado do código**: contato/marca/local em `src/lib/site.ts`
  (`endereco` e `horario` vazios = não aparecem; `mostrarPrecos` liga os valores);
  serviços em `src/data/servicos.ts`; galeria em `src/data/resultados.ts`;
  Black Friday em `src/data/promocao.ts` (tem data de fim); cursos em
  `src/data/cursos.ts`; `antesDepois.ts` e `depoimentos.ts` (lista vazia = seção
  não renderiza). Serviço e curso não têm cor própria.
- **Fotos:** sem filtro nem cor por cima; nenhuma exibida maior que a metade da
  largura real do arquivo; legenda só quando diz a técnica. Hoje todas vêm do que a
  Silvana mandou pelo WhatsApp (originais em `levantamento/whatsapp/`, fora do git);
  as do Instagram que saíram estão em `levantamento/fotos-antigas/`.
- **Bronze:** a página inicial mostra só 2 fotos (`FaixaBronze`, os recortes de fundo
  rosa) e leva a `/bronze/`. Os closes da cabine de luz azul e o vídeo ficam só lá. O
  texto da página do Bronze vem do cartão Bronze de `servicos.ts`, sem duplicar.
- **Vídeo:** sem faixa de áudio, sem tocar sozinho, sem repetir, `preload="none"` e capa.
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

`.claude/launch.json` traz a entrada `site-silvana` (porta 5174); a página do
Bronze abre em `/bronze/`. Se o app abrir
outro servidor, o `launch.json` lido é o da raiz do workspace.
