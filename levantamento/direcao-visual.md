# Direção visual: SR Espaço da Beleza

Escrita em 14/11/2026, depois de medir o site no ar. Complementa [direcao.md](direcao.md):
a ordem das seções e os textos continuam valendo de lá. **Aparência (cor, tipografia,
forma, espaço, fotos e movimento) passa a valer daqui**, inclusive onde a seção 3 de
`direcao.md` dizia "tokens sem mudança".

**O site é para celular.** Cerca de 90% das visitas chegam pelo Instagram, no telefone.
Toda decisão abaixo é tomada em **375×812** e conferida em **360×640**. O computador é
adaptação: herda os tokens e as regras, sem ganhar efeito próprio novo.

## 1. Diagnóstico (medido em 14/11/2026)

| Medida | Valor | Problema |
|---|---|---|
| Título `#ffffff` sobre `#120a09` | 19,6:1, com brilho rosa em volta | Cor absoluta e efeito de neon |
| Texto sobre o fundo | 14,3:1 | Nenhum; o contraste do texto sobra |
| Fundos escuros em uso | 9 (3 são tokens; 6 estão em `servicos.ts` e `cursos.ts`) | Vinho, roxo, marrom e oliva sem regra, separados do fundo por 1,04 a 1,28:1 |
| Bordas rosa transparentes | 8 variações | Tudo tem contorno, nada se destaca |
| Estilos de texto | 23 (10 tamanhos de Playfair, de 26 a 152 px; 7 variantes de rótulo) | Sem escala |
| Letra cursiva | 11 vezes | Deixou de ser destaque |
| Corpo do texto | Jost peso 300 | Fino demais sobre escuro, pior no sol |
| Menor texto no celular | 9,5 px (faixa de serviços do hero) | Ilegível |
| Primeira tela do celular | Só texto; a foto começa em 700 px | A prova fica abaixo da dobra |
| Fotos | Luz fria, quente e amarelada lado a lado; duas com menos de 400 px | Parecem de sites diferentes |

Resumo: o texto tem contraste de sobra. Falta **degrau entre as superfícies**, **escala
tipográfica**, **economia de forma** e **critério nas fotos**.

## 2. Princípios

1. **Nada de cor absoluta.** Nem `#fff`, nem `#000`, nem brilho. O claro é um branco
   quente; o escuro é um marrom-vinho.
2. **Profundidade por superfície, não por contorno.** Cartão se separa do fundo por ser
   mais claro e por ter respiro. Borda só em botão secundário e em linha divisória.
3. **Um destaque por tela.** Um botão cheio, no máximo uma frase cursiva, um ponto focal.
4. **Poucos estilos, sempre os mesmos.** 9 estilos de texto, 3 superfícies escuras, 2
   claras, 2 raios.
5. **Menos fotos, melhores.** Foto pequena, borrada ou com luz destoante sai, mesmo que
   a seção fique com uma só.

## 3. Cores

Tokens em `src/index.css` (`@theme`). Os valores foram gerados em OKLCH no mesmo matiz e
conferidos pelo contraste WCAG.

### 3.1 Tokens

| Token | Hex | OKLCH | Uso |
|---|---|---|---|
| `fundo` | `#1a0f10` | 0.185 0.018 15 | Fundo da página |
| `superficie` | `#2c1b1d` | 0.245 0.026 12 | Faixa de seção (Promoção, Contato) |
| `superficie-2` | `#3e282b` | 0.305 0.034 10 | Cartão, sobre `fundo` ou sobre `superficie` |
| `linha` | `#533b3e` | 0.38 0.035 10 | Divisória de 1 px. Substitui todas as bordas rosa transparentes |
| `titulo` | `#fbf1ef` | 0.965 0.012 30 | Títulos |
| `texto` | `#e9d8d5` | 0.895 0.02 30 | Parágrafos e itens de lista |
| `texto-suave` | `#c4aaa9` | 0.76 0.03 20 | Legendas, notas, rodapé, linha de apoio |
| `rosa` | `#e9a0ad` | (sem mudança) | Único destaque: botões, rótulos, cursiva |
| `rosa-claro` | `#f9d4d8` | (sem mudança) | Só o estado pressionado do botão cheio |
| `papel` | `#fbecea` | 0.955 0.016 30 | Fundo da seção clara (Serviços) |
| `papel-2` | `#f4dddc` | 0.915 0.026 20 | Cartão sobre `papel` |
| `linha-papel` | `#e1c2c3` | 0.84 0.035 15 | Divisória sobre `papel` |
| `tinta` | `#342022` | 0.27 0.03 15 | Título e texto sobre `papel` |
| `tinta-suave` | `#674e4f` | 0.45 0.035 15 | Texto de apoio sobre `papel` |
| `rosa-profundo` | `#9e3d55` | 0.5 0.13 8 | Rótulo, frase e link sobre `papel` |

Saem: `fundo-2`, `cetim`, `creme`, `rosa-escuro`, todos os `bg` de `servicos.ts` e
`cursos.ts`, e as três cores de `Blobs.tsx`. O degradê do `Monograma.tsx` fica (é a logo).

### 3.2 Contrastes conferidos

| Par | Contraste |
|---|---|
| `titulo` sobre `fundo` / `superficie` / `superficie-2` | 16,9 / 14,8 / 12,3 |
| `texto` sobre `fundo` / `superficie` / `superficie-2` | 13,6 / 11,9 / 9,9 |
| `texto-suave` sobre `fundo` / `superficie` / `superficie-2` | 8,6 / 7,6 / 6,3 |
| `rosa` sobre `fundo` / `superficie` / `superficie-2` | 9,0 / 7,9 / 6,5 |
| `fundo` sobre `rosa` (texto do botão cheio) | 9,0 |
| `tinta` sobre `papel` / `papel-2` | 13,3 / 11,8 |
| `tinta-suave` sobre `papel` / `papel-2` | 6,6 / 5,8 |
| `rosa-profundo` sobre `papel` / `papel-2` | 5,6 / 5,0 |

Todo texto fica acima de 4,5:1; todo texto sobre escuro fica acima de 6:1, pensando em
tela no sol. Entre superfícies vizinhas o degrau é de 0,06 de luminosidade (1,14 a
1,38:1). É pouco de propósito: quem separa é o degrau somado ao respiro, sem borda.

### 3.3 Regras de uso

- Cartão sobre `fundo` é sempre `superficie-2`. Sobre `superficie`, também.
- Nenhum cartão tem cor própria. Serviço e curso não mudam de cor.
- `rosa` com opacidade (`rosa/15`, `rosa/25`...) deixa de existir. Divisória é `linha`;
  contorno de botão secundário é `rosa` cheio.
- `texto-suave` nunca vai em parágrafo principal nem em item de lista.
- Nenhum hex fora de `index.css`, a não ser no `Monograma.tsx`.

### 3.4 Seção clara (`.papel`)

Uma única seção clara: **Serviços**. É a mais longa do celular (24% da página) e é texto
para ler; no papel claro ela lê melhor e quebra a sequência de blocos escuros.

Criar a classe `.papel` em `index.css`, que troca as variáveis dentro dela:

```css
.papel {
  background: var(--color-papel);
  --color-titulo: var(--color-tinta);
  --color-texto: var(--color-tinta);
  --color-texto-suave: var(--color-tinta-suave);
  --color-rosa: var(--color-rosa-profundo);
  --color-superficie-2: var(--color-papel-2);
  --color-linha: var(--color-linha-papel);
}
```

Os componentes continuam usando as mesmas classes (`titulo`, `corpo`, `text-rosa`,
`bg-superficie-2`, `border-linha`). Testado ao vivo no preview em 375×812: funciona com
os utilitários do Tailwind 4, porque eles leem as variáveis.

Dentro de `.papel` não entra botão cheio (o texto escuro sobre `rosa-profundo` não tem
contraste). Só link de texto.

## 4. Tipografia

Corpo passa a **Jost 400** (o 300 sai do `body`). Nenhum texto abaixo de **12 px**.
Nenhum `text-shadow`.

| Papel | Classe | Fonte | Celular (375) | Computador | Altura de linha | Cor |
|---|---|---|---|---|---|---|
| Título do hero | `.titulo` + tamanho | Playfair 500 | 44 px (`clamp(2.5rem, 11.7vw, 5rem)`) | até 80 px | 1,0 | `titulo` |
| Título de seção | `.titulo` | Playfair 500 | 32 px (`clamp(2rem, 8.5vw, 3.5rem)`) | 56 px | 1,05 | `titulo` |
| Título de cartão | `.titulo-cartao` | Playfair 500 | 24 px | 28 px | 1,15 | `titulo` |
| Frase da cliente em cartão | `.frase` | Playfair itálico 400 | 17 px | 18 px | 1,3 | `rosa` |
| Cursiva | `.subtitulo` | Great Vibes | 26 px (`clamp(1.625rem, 7vw, 2.25rem)`) | 36 px | 1,1 | `rosa` |
| Texto | `.corpo` | Jost 400 | 17 px | 19 px | 1,6 | `texto` |
| Texto de apoio | `.corpo-pequeno` | Jost 400 | 15 px | 16 px | 1,5 | `texto-suave` |
| Rótulo | `.rotulo` | Jost 500, maiúsculas, espaço 0,16em | 12 px | 12 px | 1,4 | `rosa` |
| Texto de botão | `.botao-texto` | Jost 600, maiúsculas, espaço 0,12em | 13 px | 13 px | 1 | conforme o botão |

Regras:

- **Só esses 9 estilos.** Nenhum `text-[...]` com tamanho solto em componente; o único
  ajuste permitido é o do título do hero no computador, para caber em 2 linhas.
- **Sem maiúsculas em Playfair.** "UNHAS" vira "Unhas"; "CURSOS" vira "Cursos".
- **Palavra de destaque em título** continua sendo `<em>` (itálico), sem outra cor.
- **Cursiva no máximo 3 vezes na página**, uma por seção e só em cabeçalho de seção:
  Resultados ("dignidade recuperada com sucesso"), Quem cuida de você ("cuidado e higiene
  em cada detalhe") e Cursos ("voa, garota"). Continua sendo frase literal do perfil.
- **As frases da cliente nos cartões** de serviço ("o clássico que não tem erro" etc.)
  passam para `.frase`. O texto não muda; só deixa de ser cursiva.
- Cursiva e título com mais de uma linha usam `text-wrap: balance`.
- Como o brilho saiu, a folga de 0,4em da máscara em `Linhas` pode voltar ao normal
  (opcional; só não pode cortar o itálico).

## 5. Forma

- **Raios:** 16 px (cartão e foto) e total (botão). Saem `rounded-3xl` e os arcos.
  (Em 21/11/2026 saiu também o último arco, o do retrato da Silvana: a foto de "Quem cuida
  de você" passou a ser a da equipe, quadrada, e três rostos não cabem num arco.)
- **Bordas:** cartão e foto não têm borda. Divisória de lista: 1 px `linha`.
- **Sombras:** nenhuma, a não ser no botão flutuante
  (`0 6px 20px rgb(26 15 16 / 0.35)`), para ele aparecer também sobre o papel.
- **Degradê:** nenhum em botão, barra de progresso ou fundo. A barra de progresso do topo
  vira 2 px de `rosa`.
- **Textura e manchas:** saem `Blobs.tsx` e a classe `.grao`. O celular paga por
  desfoques de 500 px animados que deixam o fundo com cara de sujo.

### Botões (três tipos, e só eles)

| Tipo | Aparência | Altura | Onde |
|---|---|---|---|
| Cheio | Fundo `rosa`, texto `fundo`; pressionado `rosa-claro` | 52 px; largura total no celular | Hero, Promoção, Contato, menu do celular |
| Contorno | 1 px `rosa`, texto `rosa` | 48 px | "Agendar" da barra, "Quero saber das turmas" |
| Link | Texto `rosa` + seta, sem caixa | Área de toque de 48 px | "Ver serviços", "Agendar unhas", "Conheça os cursos" |

- **Um botão cheio por tela.** O flutuante já some quando o do Contato aparece; não pode
  aparecer junto do botão do hero nem do da Promoção.
- Os 6 "Agendar [serviço]" dos cartões viram **link**, não pílula.
- O botão flutuante perde o `animate-ping` e o degradê: fica `rosa` liso, 56 px.

### Toque (celular)

- Todo alvo de toque tem **48 px** de altura ou mais (mínimo aceitável: 44).
- Cabeçalho da sanfona: a linha inteira é o botão, com 64 px ou mais.
- O indicador da sanfona passa a ser uma **seta para baixo que gira** ao abrir. O coração
  girando não diz "abre e fecha". O `Coracao` fica só como ornamento do rótulo "Serviços".

## 6. Espaço e ritmo

- **Escala de espaço:** 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Nada fora dela.
- **Margem lateral:** 20 px no celular.
- **Seção:** 64 px em cima e embaixo no celular; 96 px no computador.
- **Cabeçalho de seção:** rótulo, 12 px, título, 8 px, cursiva (se houver), 32 px,
  conteúdo.
- **Cartão:** 20 px por dentro no celular (24 no computador); 8 px entre cartões da
  sanfona, 12 px entre cartões de fita.

Sequência de fundos, para a página ter ritmo:

| Seção | Fundo |
|---|---|
| Hero | `fundo` |
| Promoção | `superficie` (cartões `superficie-2`) |
| Resultados | `fundo` |
| Serviços | `.papel` (cartões `papel-2`) |
| Quem cuida de você | `fundo` |
| Contato | `superficie` |
| Cursos | `fundo` (cartões `superficie-2`) |
| Rodapé | `fundo`, com 1 px de `linha` em cima |

## 7. Fotos

O que foi visto, lado a lado: quatro fotos têm o mesmo cenário de **cetim rosa**
(`hero-unhas`, `unhas-bordo`, `unhas-preto-marmore`, `unhas-francesinha-strass`), que é a
cara do salão e combina com a paleta. As outras variam de luz.

- **Sem filtro e sem cor por cima.** A cor do esmalte é a informação. O que se controla é
  escolha, ordem e recorte.
- **Galeria com 7 fotos, nesta ordem:** `unhas-preto-marmore`, `unhas-bordo`,
  `unhas-brancas-ouro`, `cabelo-matizado`, `unhas-nude-mesa`, `unhas-holograficas`,
  `unhas-francesinha-strass`, e depois o cartão do Instagram. Abre e fecha com cetim rosa.
- **Saem da galeria:** `unhas-francesinha-ouro` (pele amarelada, destoa) e
  `unhas-leitosas` (repete o cenário e a cor de `unhas-nude-mesa`).
- **`unhas-brancas-ouro`:** ajustar `object-position` para a marca d'água do canto de
  baixo ficar fora do quadro.
- **Legenda:** só quando diz a técnica ("Cabelos · matização"). A palavra "Unhas"
  repetida sob 6 fotos sai. Legenda em `.corpo-pequeno`, à esquerda.
- **Hero:** só `hero-unhas`. A foto da Silvana sai do hero (o uniforme rosa-choque briga
  com a paleta ali) e fica apenas em "Quem cuida de você", onde ela é o assunto.
- **Quem cuida de você:** só o retrato da Silvana. Saem `fachada.webp` (360×640, close
  inclinado com o rosto do adesivo) e `espaco-recepcao.webp` (300×300, estoura em tela de
  celular). Voltam quando a Silvana mandar fotos novas (pendência 11 de
  `CONTEUDO-PENDENTE.md`).
- **Nitidez:** nenhuma foto exibida maior que a metade da largura real do arquivo em
  pixels (telas de celular têm densidade 2 ou 3).

## 8. Movimento

- **A primeira tela não depende de animação.** Rótulo, texto e botão do hero já nascem
  visíveis (hoje nascem com `opacity: 0` e o botão só termina de aparecer 2,3 s depois).
  Só o título pode subir pela máscara, sem atraso e em até 0,6 s.
- **Nada em laço infinito no celular:** saem o zoom contínuo da foto do hero, o
  `animate-ping` do botão flutuante, as manchas e o traço animado do "Role".
- **Revelação ao rolar:** 16 px de subida, 0,5 s, atraso máximo de 0,1 s, uma vez só.
- Continua valendo: só `transform` e `opacity`, respeitar `prefers-reduced-motion`,
  efeitos de mouse só com mouse.
- A galeria presa do computador fica como está (só troca tokens).

## 9. Seção por seção (celular primeiro)

### Hero
De cima para baixo: foto `hero-unhas` de ponta a ponta, com 46svh de altura (a barra do
menu fica por cima da parte preta da foto); rótulo `Salão de beleza · São Mateus, SP`
(uma linha); título em 2 linhas; a linha de serviços `Cabelos · Unhas · Cílios ·
Sobrancelhas · Bronze` em `.corpo`, sem caixa e sem maiúsculas; botão cheio de largura
total; link "Ver serviços".

- A frase "Um salão, vários cuidados e aquele momento só seu." aparece só de `md` para
  cima.
- Sem arco, sem foto sobreposta, sem inclinação, sem paralaxe no celular.
- **Critério:** em 360×640, foto, título e botão cheio aparecem sem rolar.
- Computador: duas colunas, texto à esquerda e a mesma foto à direita em 4:5 com raio de
  16 px.

### Promoção (Black Friday)
Faixa `superficie`, cartões `superficie-2` sem borda, valor em `.titulo-cartao`, nome em
`.corpo-pequeno` na cor `texto`. Botão cheio de largura total. Some depois de 20/11, então
aqui é só troca de tokens.

### Resultados
Rótulo, título, cursiva. A linha "Fotos do nosso Instagram." sai (o cartão final já diz).
Fita com cartões de 78vw, 4:5, raio 16, sem borda, 12 px entre eles, encaixe no início
com 20 px de margem. Cartão do Instagram em `superficie-2`. Sem o vão de 200 px embaixo:
a seção fecha com os 64 px padrão.

### Serviços (`.papel`)
Sanfona, Unhas aberta. Cartões `papel-2`, raio 16, sem borda. Cabeçalho: nome em
`.titulo-cartao`, frase da cliente em `.frase`, seta à direita. Aberto: descrição em
`.corpo`, lista em `.corpo` com divisória `linha` e linhas de 44 px ou mais, nota em
`.corpo-pequeno`, link "Agendar unhas". Computador: 2 colunas, tudo aberto.

### Quem cuida de você
Rótulo, título, cursiva, **foto da equipe, quadrada** (largura total até 360 px,
centralizada, raio de 16 px; até 21/11/2026 era o retrato da Silvana em arco), os dois parágrafos, link "Conheça os cursos".

### Contato
Faixa `superficie`, sem manchas. Rótulo, título no tamanho de seção, frase, botão cheio
de largura total, local e @ em `.corpo-pequeno`.

### Cursos
Rótulo, título `Cursos <em>profissionais</em>` no tamanho de seção (hoje chega a 152 px),
cursiva, frase. Dois cartões `superficie-2` iguais: rótulo `Nail design` / `Lash design`,
título `Curso de unhas` / `Curso de cílios`, lista com divisória, botão de contorno de
largura total.

### Barra, menu e rodapé
Barra com 64 px, fundo `fundo` a 85% com desfoque depois de rolar. Rodapé em
`.corpo-pequeno`.

## 10. O que muda em CLAUDE.md

Quem implementar atualiza `CLAUDE.md` e `CONTEXTO.md`:

- Tokens: lista da seção 3.1 no lugar de `fundo`, `rosa*`, `creme`.
- Título: `titulo` (branco quente), **sem brilho**. Sai a regra da folga para o brilho.
- Texto: passa a ter dois tons, `texto` e `texto-suave` (a regra antiga proibia o
  segundo). **Mudança de uma regra do Kevin; ele pode vetar.**
- Cursiva: só em cabeçalho de seção, no máximo 3 na página; frase em cartão usa `.frase`.
- Botões: os três tipos da seção 5, sem degradê.
- Nova regra: "o site é para celular; conferir sempre em 375×812 e 360×640".
- "A direção visual é `levantamento/direcao-visual.md`."

## 11. Etapas de implementação

Um commit por etapa, com `npm run build` e conferência em 375×812 antes de cada push.

1. **Tokens e tipografia** em `index.css`: novos tokens, `.papel`, as 9 classes de texto,
   `body` em 400, fim do brilho e da `.grao`.
2. **Limpeza de cor:** tirar `bg` de `servicos.ts` e `cursos.ts`, apagar `Blobs.tsx`,
   trocar toda borda `rosa/NN` e `rosa-claro/NN` por `linha` ou nada, tirar degradês e
   sombras.
3. **Botões:** os três tipos, altura de toque, um cheio por tela, flutuante liso.
4. **Hero** no celular e no computador, sem animação de entrada no texto.
5. **Resultados:** 7 fotos na nova ordem, legendas, cartões e vão.
6. **Serviços** em `.papel`, sanfona com seta, `.frase`, links.
7. **Quem cuida de você, Contato, Cursos, barra e rodapé.**
8. **Movimento:** regras da seção 8.
9. **Documentação:** `CLAUDE.md`, `CONTEXTO.md`, `duvidas.md`.

## 12. Conferência final

Em 375×812 e em 360×640, com a página inteira carregada:

- [ ] `grep` em `src/`: nenhum `#fff`, `#ffffff`, `#000`, `text-shadow`, `animate-ping`,
      `from-`, `via-`; nenhum hex fora de `index.css` e de `Monograma.tsx`.
- [ ] Estilos de texto diferentes na página: **9 ou menos** (fonte, tamanho, peso e
      espaçamento).
- [ ] Fundos opacos diferentes: `fundo`, `superficie`, `superficie-2`, `papel`,
      `papel-2`, `rosa`. Nenhum outro.
- [ ] Cores de borda: `linha`, `linha-papel` e `rosa`. Nenhuma com transparência.
- [ ] Cursiva aparece **3 vezes**.
- [ ] Menor texto: 12 px. Corpo em peso 400.
- [ ] Hero em 360×640: foto, título e botão cheio visíveis sem rolar.
- [ ] Nunca dois botões cheios na mesma tela.
- [ ] Todo link e botão com 44 px de altura ou mais.
- [ ] Nenhuma animação em laço rodando no celular.
- [ ] Texto e botão do hero visíveis no primeiro quadro, com JavaScript ainda carregando.
- [ ] Página com 8,5 telas ou menos (com a Promoção no ar).
- [ ] `npm run build` passa; preview sem erro de console.

Para medir estilos, fundos e bordas, rodar no console do preview:

```js
const t = {}, f = {}, b = {}
for (const el of document.querySelectorAll('body *')) {
  const c = getComputedStyle(el), r = el.getBoundingClientRect()
  if (!r.width || !r.height) continue
  if (c.backgroundColor !== 'rgba(0, 0, 0, 0)') f[c.backgroundColor] = 1
  if (c.borderTopWidth !== '0px') b[c.borderTopColor] = 1
  if ([...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()))
    t[[c.fontFamily.split(',')[0], c.fontSize, c.fontWeight, c.letterSpacing].join(' ')] = 1
}
;({ textos: Object.keys(t), fundos: Object.keys(f), bordas: Object.keys(b) })
```
