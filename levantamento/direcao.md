# Direção do site: SR Espaço da Beleza

Escrita em 12/11/2026, a partir de [instagram.md](instagram.md), [imagens.md](imagens.md),
[auditoria.md](auditoria.md), `CONTEXTO.md`, `CONTEUDO-PENDENTE.md` e das 24 imagens em
`levantamento/imagens/` (vistas uma a uma). É o documento que a implementação segue.
Onde este arquivo e o código atual discordarem, vale este arquivo. Onde ele for
ambíguo, anotar em `levantamento/duvidas.md` e seguir pela opção mais simples.

## 1. A ideia

**A página fala com as palavras da Silvana e mostra só o que o Instagram sustenta.**

Três consequências práticas:

1. **Os subtítulos em script são frases literais do perfil** (legendas e destaques).
   Hoje o site soa como revista ("fios com vida", "arte nos fios"); quem vem do
   Instagram não reconhece a voz. As frases estão na seção 5, com a fonte.
2. **A estrutura segue o material que existe.** Há 17 fotos boas de unhas, 1 de
   cabelo e nenhuma limpa de cílios, sobrancelhas, bronze ou tranças. Então o site
   deixa de dar uma tela cheia com foto para cada serviço (4 de 6 ficariam vazias ou
   com arte de post) e passa a ter **uma galeria** (onde as fotos existem) e **um
   cardápio de serviços em texto** (onde o Instagram dá técnicas reais).
3. **A prova vem antes do catálogo.** Hoje a primeira foto de resultado aparece
   depois de ~7 telas no celular. Passa a vir logo depois do hero.

## 2. Nova ordem da página

| # | Seção | Componente | Papel | Muda o quê |
|---|---|---|---|---|
| 1 | Hero | `Hero` | Promessa + onde fica + CTA | Fotos novas, linha de local, subtexto literal |
| 2 | Promoção | `Promocao` (novo) | Oferta com prazo | Black Friday até 20/11; some sozinha depois |
| 3 | Galeria | `Resultados` | Prova | 9 fotos novas, sem artes de post, sem repetição |
| 4 | Antes e depois | `AntesDepois` | Prova | Continua oculto sem dados |
| 5 | Depoimentos | `Depoimentos` (sai de dentro do `Mural`) | Prova | Continua oculto sem dados |
| 6 | Serviços | `Servicos` (substitui `Capitulos`) | Catálogo | Cardápio em texto, sem rolagem presa |
| 7 | Quem cuida de você | `Espaco` (reescrito) | Confiança | Apresenta a Silvana, a higiene e o lugar |
| 8 | Contato | `Contato` | Fechamento da cliente | Ganha local; endereço e horário quando existirem |
| 9 | Cursos | `Cursos` | Outro público | Vai para depois do contato, com conteúdo real |
| 10 | Rodapé | dentro de `Contato` ou componente próprio | Fecho | Nome, local, Instagram |

**Saem da página e do repositório:** `FaixaTexto` (repete a lista de serviços),
`Numeros` (números de vaidade), `Mural` (repete fotos e tem 51 links para fora),
`Capitulos` (vira `Servicos`). Apagar os arquivos, não deixar código morto.

**Por que Cursos vai para o fim:** fala com quem quer aprender, não com quem quer
ser atendida. A história da cliente fecha no Contato; os Cursos ficam depois, como
uma faixa à parte, com link direto no menu.

## 3. Identidade visual

O que se vê nas fotos do salão: parede cinza, logo espelhado rosé (círculo com
corações e "SR" em letra cursiva preta, "Espaço da Beleza" acompanhando o arco),
"SILVANA RIBEIRO" em letras pretas, flores rosa, sacolas e certificados rosa. Nas
fotos de unha, o fundo é cetim salmão sobre preto.

- **Tokens de cor e tipografia: não mudam.** Fundo chocolate, rosa único, os 3
  papéis de texto do `CLAUDE.md`. A paleta já é o ponto mais fiel ao Instagram.
- **Monograma:** conferir `Monograma.tsx` contra o logo real (referência:
  `levantamento/imagens/2025-11-09-formatura-alunas-DQ2g6rLkX-R-s5.jpg`, canto
  superior direito). O real tem anel fino duplo, 5 a 6 corações pequenos presos ao
  anel e "Espaço da Beleza" em cursiva seguindo a curva de baixo. Aproximar o SVG
  disso. Não usar a foto como logo.
- **Coração do logo como único ornamento.** Um SVG pequeno (`Coracao`, cor `rosa`)
  serve de separador: entre itens do cardápio, no rodapé, ao lado do rótulo. Entra
  no lugar da numeração "Capítulo 01 / 06", que some.
- **Fotos:** proporção 4:5 em toda a galeria (as originais são 3:4 e 4:5). O arco
  (topo redondo) continua sendo a moldura de retrato: hero e "Quem cuida".
  Cantos `rounded-2xl` no resto. Nada de filtro ou sobreposição de cor em cima das
  fotos de unha: a cor do esmalte é a informação.
- **Nenhuma arte de post no site.** Saem `bronze.jpg`, `sobrancelhas.jpg` e
  `unhas-azul.jpg` (têm texto e botão desenhado que não clica).
- **Serviço sem foto não ganha foto falsa nem arte com o nome.** O cardápio é
  tipográfico para todos, com ou sem foto. `ArteSemFoto` some.
- **Fundos por serviço:** as cores `bg` de hoje (`#2b1116`, `#3a1c25`...) continuam,
  agora como fundo do cartão de cada serviço no cardápio.
- **Movimento:** mantém `Reveal`/`Linhas`, `Magnetic`, `Tilt`, `Blobs`. Some a
  rolagem presa dos capítulos. Só `transform` e `opacity`, como hoje.

## 4. Imagens

### 4.1 Preparo

Copiar de `levantamento/imagens/` para `public/img/` com os nomes abaixo. Tentar
gerar WebP com 1200 px de largura (`npx --yes sharp-cli`, qualidade ~78), sem
adicionar dependência ao projeto. Se não funcionar, copiar o JPEG original e
registrar em `duvidas.md`. Toda `<img>` leva `width`, `height`, `alt` e
`loading="lazy"` (a do hero: `loading="eager"` e `fetchpriority="high"`).

| Novo nome em `public/img/` | Origem em `levantamento/imagens/` | Onde entra | `alt` |
|---|---|---|---|
| `hero-unhas` | `2025-11-03-unhas-DQmNpR6ESA0-s1.jpg` | Hero (principal) e `og:image` | Mãos com unhas amendoadas em nude rosado sobre cetim rosé, fundo preto |
| `silvana-salao` | `2025-08-23-cabelo-DNtPlLd4gVP.jpg` | Hero (secundária) e Quem cuida | Silvana de uniforme rosa, com prancha e secador, em frente ao logo do salão |
| `unhas-nude-mesa` | `2025-11-03-unhas-DQmNpR6ESA0-s3.jpg` | Galeria 1 | Unhas amendoadas em nude rosado |
| `unhas-bordo` | `2025-04-16-unhas-DIhsEL5PLZK.jpg` | Galeria 2 | Unhas curtas em bordô sobre cetim rosé |
| `unhas-brancas-ouro` | `2025-04-18-unhas-DImZw2ZP1bl.jpg` | Galeria 3 | Unhas amendoadas em branco leitoso com filete dourado na cutícula |
| `cabelo-matizado` | `2023-10-19-cabelo-Cyk3s3TOc73.jpg` | Galeria 4 | Cabelo loiro matizado, liso, visto de costas |
| `unhas-holograficas` | `2025-04-13-unhas-DIZwq0UPcIQ.jpg` | Galeria 5 | Unhas longas com efeito cromado holográfico |
| `unhas-preto-marmore` | `2025-07-27-unhas-DMmVbxZsFta-s3.jpg` | Galeria 6 | Unhas amendoadas em preto e marmorizado com folha dourada |
| `unhas-francesinha-strass` | `2025-07-27-unhas-DMmVgVgskLk.jpg` | Galeria 7 | Unhas amendoadas com francesinha branca e pedrinhas |
| `unhas-leitosas` | `2025-12-04-unhas-DR2ZkwvEbIG-s3.jpg` | Galeria 8 | Unhas curtas em branco leitoso |
| `unhas-francesinha-ouro` | `2025-04-13-unhas-DIZtEpAvGCY.jpg` | Galeria 9 | Unhas quadradas com francesinha branca em V e folha dourada |

`fachada.jpg`, `espaco-recepcao.jpg` e `logo-perfil.jpg` ficam. Apagar de
`public/img/`: `bronze.jpg`, `sobrancelhas.jpg`, `unhas-azul.jpg`, `unhas-a.jpg`,
`unhas-b.jpg`, `unhas-nude.jpg`, `unhas-video.jpg`, `video-ago25.jpg`, `silvana.jpg`
(conferir com busca que nada mais aponta para elas).

**Regra: nenhuma foto aparece duas vezes na página**, com uma exceção:
`silvana-salao` no hero (pequena) e em Quem cuida (grande).

### 4.2 O que ficou de fora, e por quê

- **Mãos com tatuagem ou com iniciais pintadas na unha** (`DKyNMcZN_eN` s1 e s3,
  `DKugTFGufgC`, `DKugrELu_DS`, `DKuhOGluAgn`, `DQxmQMUkYhv`): identificam a
  cliente mesmo sem rosto. Ficam de reserva para quando houver autorização.
- **`2026-10-28-unhas-DfBfP94x_MP.jpg`:** mesmo cenário dos posts que o Instagram
  rotulou como conteúdo de IA. Não usar até a cliente confirmar que é foto real.
- **As 5 fotos de entrega de certificado:** rosto e nome de alunas. Só com
  autorização. São as melhores fotos para a seção Cursos; ver seção 8.
- **Capas de reel de cabelo (640 px, nota 2):** pequenas demais para a galeria.

### 4.3 Ajustes de enquadramento

- `hero-unhas`: `object-position: 50% 45%` (as mãos estão no centro; sobra preto em
  cima e cinza embaixo).
- `cabelo-matizado`: o fundo é bagunçado nas bordas. `object-position: 50% 40%` e,
  no cartão 4:5, `scale` leve (1.08) para cortar a lateral esquerda.
- `silvana-salao` tem 828 px de largura: no hero, no máximo ~300 px de largura
  renderizada; em Quem cuida, no máximo ~420 px.

## 5. Copy, seção por seção

Regras: português do Brasil, frases curtas, sem travessão. Segunda pessoa
("você"). O texto corrido pode ser nosso; **o script (subtítulo) é sempre uma frase
literal do perfil**, em minúsculas, sem emoji. Nenhuma frase aparece duas vezes na
página.

### 5.1 Hero

- **Rótulo:** `Salão de beleza · São Mateus, São Paulo`
- **Título:** `Sua autoestima` / `<em>começa aqui.</em>` (mantém; é a bio)
- **Texto:** `Um salão, vários cuidados e aquele momento só seu.`
  (legenda de 19/09/2026, [DdeWFTBBR7x](https://www.instagram.com/srespacodabelezaofc/reel/DdeWFTBBR7x/))
- **Caixa de serviços:** `Cabelos · Unhas · Cílios · Sobrancelhas · Bronze` (mantém, é a bio)
- **CTAs:** `Agendar no WhatsApp` (principal) e `Ver serviços` (âncora `#servicos`)
- **Fotos:** `hero-unhas` no arco grande; `silvana-salao` no quadro menor.

"São Mateus" vem das marcações de local e da hashtag `#SaoMateus` dos posts do
próprio salão; "São Paulo", de `#salaodebelezasp` e `#SorteioSãoPaulo`. Entra em
`site.bairro` e `site.cidade` para trocar num lugar só.

### 5.2 Promoção (Black Friday)

Faixa logo abaixo do hero, fundo `cetim`, contorno `rosa`. Dados em
`src/data/promocao.ts`. **Só renderiza até 20/11/2026, 23h59 (horário de Brasília)**;
depois disso o componente devolve `null` sozinho. Lista vazia também = não renderiza.

- **Rótulo:** `Black Friday · de 10 a 20 de novembro`
- **Título:** `Nossa Black <em>já começou</em>`
- **Itens** (literais das artes do post [DfXPnifkSN5](https://www.instagram.com/srespacodabelezaofc/p/DfXPnifkSN5/)):

| Serviço | Valor |
|---|---|
| Alongamento, primeira aplicação | R$ 89,99 |
| Design de sobrancelhas com henna | R$ 34,99 |
| Botox capilar | R$ 79,90 |
| Progressiva | R$ 99,99 |
| Extensão de cílios, cola fria | R$ 49,90 |
| Bronzeamento artificial | R$ 1,00 por minuto |

- **CTA:** `Garantir meu horário` (WhatsApp)
- Layout: no celular, lista em 1 coluna (serviço à esquerda, valor à direita, em
  `.titulo` pequeno); a partir de `md`, grade de 3 colunas. Sem contador regressivo.

### 5.3 Galeria

- **Rótulo:** `Resultados`
- **Título:** `Feito <em>aqui</em>`
- **Script:** `dignidade recuperada com sucesso` (destaque Unhas)
- **Linha de apoio (`.corpo-pequeno`):** `Fotos do nosso Instagram.`
- As 9 fotos na ordem da tabela 4.1 (o cabelo no meio quebra a sequência de unhas).
- Etiqueta por foto: `Unhas` ou `Cabelos · matização`. Nada além disso: as
  legendas originais são só emoji, então não há técnica confirmada por foto.
- Último cartão da fita, sem foto: `Tem mais no Instagram` + `@srespacodabelezaofc`
  (único link para o Instagram fora do Contato e do rodapé).
- **Desktop (`md`+):** mantém a galeria horizontal presa de hoje.
  **Celular:** fita horizontal nativa com `scroll-snap` e `overflow-x-auto`, sem
  prender a rolagem vertical. Altura da seção no celular: a do conteúdo.

### 5.4 Serviços (cardápio)

`id="servicos"`. Substitui os capítulos. Sem rolagem presa.

- **Rótulo:** `Serviços`
- **Título:** `Tudo em <em>um só lugar</em>`
- **Layout desktop:** grade de 2 colunas, 6 cartões, cada um com o fundo `bg` do
  serviço, borda `rosa-claro/20`, `rounded-3xl`. Dentro: nome em `.titulo`
  (maiúsculas), script em `.subtitulo`, frase em `.corpo`, lista de técnicas em
  `.corpo-pequeno` (uma por linha, separadas por linha fina; quando os preços
  estiverem ligados, o valor alinha à direita), botão de contorno `Agendar <serviço>`.
- **Layout celular:** os mesmos 6 cartões empilhados, em sanfona: só nome e script
  visíveis; toque abre frase, lista e botão. O primeiro (Unhas) começa aberto.
  Usar `<details>`/`<summary>` ou botão com `aria-expanded`. Assim a seção inteira
  cabe em ~2 telas e dá para pular de um serviço a outro.
- **Ordem:** Unhas, Cabelos, Cílios, Sobrancelhas, Bronze, Tranças (do que tem mais
  conteúdo real para o que tem menos).

| Serviço | Script (literal) | Frase | Técnicas |
|---|---|---|---|
| **Unhas** | `o clássico que não tem erro` | Do preparo ao resultado final, cada detalhe faz diferença para um alongamento bonito, resistente e feito com cuidado. | Alongamento em gel · Alongamento em fibra · Molde F1 · Banho de gel · Blindagem de gel · Manutenção · Esmaltação em gel · Postiça realista |
| **Cabelos** | `o brilho que todas vocês merecem` | Fios alinhados, brilho e aquele resultado lindo. | Corte · Escova e prancha · Progressiva · Selagem · Botox · Hidratação · Reconstrução · Cronograma capilar · Coloração · Luzes · Morena iluminada · Matização |
| **Cílios** | `não é terapia, mas é terapêutico` | Extensão de cílios do natural ao marcante. | Fio a fio · Volume brasileiro · Híbrido · Extensão cola fria |
| **Sobrancelhas** | `realçando olhares` | Design de sobrancelhas, com ou sem henna. | Design · Design com henna |
| **Bronze** | `ativando a marquinha` | Marquinha no ponto, com protocolo adequado para o seu tipo de pele. | Bronzeamento natural com fita · Bronzeamento artificial · Tatuagem de bronze |
| **Tranças** | `com muita dedicação e amor` | Aqui não tem idade na linguagem do autocuidado e da autoestima. | Trança boxeadora · Nagô · Nagô com desenhos · Tiara nagô |

- No cartão de **Unhas**, depois da lista, uma linha em `.corpo-pequeno`:
  `Homem também faz as unhas.` (legenda de 04/11/2025)
- **Fontes:** Unhas e Cabelos, das tabelas dos destaques e das legendas; Cílios, do
  post de 2023, do curso (fio a fio, brasileiro, híbrido) e da arte da Black Friday
  (cola fria); Sobrancelhas, das legendas e da Black Friday; Bronze, das legendas,
  hashtags e do destaque ("Protocolo adequado para o tipo de pele"); Tranças, do
  destaque Tranças.
- **Não entram:** compressa quente e massagem (ação de inverno), "ganhe uma
  tatuagem" (promoção da arte), Hidragloss e preenchimento (promoção e sorteio, sem
  sinal de serviço fixo), volumes egípcio, glamour e russo (só na tabela assinada
  por outra profissional). Tudo isso vai para `CONTEUDO-PENDENTE.md`.

### 5.5 Preços

As tabelas de Unhas e de Cabelos estão nos destaques do próprio salão, sem data
(cerca de julho/2026). Entram nos dados, mas **desligadas**:

- `site.mostrarPrecos = false` em `src/lib/site.ts`.
- Em `servicos.ts`, cada técnica pode ter `preco?: string` (ex.: `'R$ 130'`,
  `'a partir de R$ 120'`). Preencher só o que está nas duas tabelas, literal:
  - Unhas: gel R$ 130 · fibra R$ 150 · manutenção gel R$ 100 · manutenção fibra
    R$ 110 · banho de gel R$ 90 · gel na tips R$ 110 · postiça realista R$ 90.
  - Cabelos: corte R$ 40 · escova e prancha a partir de R$ 40 · progressiva com
    formol a partir de R$ 120 · progressiva sem formol a partir de R$ 150 ·
    cronograma a partir de R$ 250 · botox a partir de R$ 90 · hidratação a partir
    de R$ 45 · reconstrução a partir de R$ 50 · selagem a partir de R$ 120 ·
    coloração com sua tinta R$ 60 · coloração com tinta do salão a partir de R$ 90 ·
    luzes a partir de R$ 350 · morena iluminada a partir de R$ 320.
- Com a chave ligada, a lista mostra o valor à direita e o cartão ganha a linha
  `Valores de referência. Confirme no WhatsApp.` Com a chave desligada, nada de
  preço aparece (fora a faixa da Black Friday).
- Onde a lista de técnicas da seção 5.4 agrupa itens (ex.: "Progressiva",
  "Manutenção", "Coloração"), o modo com preço abre nas linhas da tabela acima.
- Cílios, Sobrancelhas e Tranças ficam sem preço: as tabelas são assinadas por
  outras profissionais (Ana Souza, Isadora Rios).

O Kevin liga a chave quando a Silvana confirmar que os valores valem.

### 5.6 Quem cuida de você

`id="espaco"` (mantém a âncora). Junta apresentação, higiene e lugar.

- **Rótulo:** `O salão`
- **Título:** `Quem cuida <em>de você</em>`
- **Script:** `cuidado e higiene em cada detalhe` (legenda de 10/10/2026)
- **Texto 1:** `O SR Espaço da Beleza é o salão da Silvana Ribeiro, em São Mateus. Ela atende, tem uma equipe ao lado e ainda ensina: é a instrutora dos cursos de unhas e de cílios da casa.`
- **Texto 2:** `Alicates e espátulas são esterilizados, porque a segurança de cada cliente é essencial.`
- **Link de texto:** `Conheça os cursos` (âncora `#cursos`). Sai o link para o Instagram.
- **Fotos (parallax de hoje, 3 camadas):** `silvana-salao` no arco (maior),
  `fachada.jpg` e `espaco-recepcao.jpg` nos quadros menores. Some o selo "bem-vinda".
- O sobrenome está confirmado: letreiro "SILVANA RIBEIRO" na parede e assinatura
  dos certificados.

### 5.7 Contato

- **Rótulo:** `Já agendou seu horário?` (destaque Unhas)
- **Título:** `Vamos cuidar` / `<em>de você?</em>` (mantém)
- **Texto:** `Chame no WhatsApp, conte o que você quer e a gente encontra o melhor horário.` (mantém)
- **CTA:** `Chamar no WhatsApp`
- **Abaixo do CTA, bloco de informações** (`.corpo-pequeno`, centralizado):
  - `São Mateus · São Paulo` (sempre)
  - endereço, se `site.endereco` não estiver vazio
  - horário, se `site.horario` não estiver vazio
  - `@srespacodabelezaofc`
- `site.endereco` e `site.horario` nascem como `''`. Nada de "em breve".

### 5.8 Cursos

`id="cursos"`. Depois do Contato. Fundo `fundo-2` para marcar a mudança de assunto.

- **Rótulo:** `Para quem quer aprender`
- **Título:** `Cursos` / `<em>profissionais</em>` (mantém o tamanho grande de hoje)
- **Script:** `voa, garota` (destaque Curso Unha)
- **Texto:** `A Silvana Ribeiro ensina, no próprio salão, as técnicas que usa no atendimento. Você sai com certificado.`
- **Dois cartões**, sem foto, com o fundo do serviço correspondente e `Tilt`:

| | Unhas | Cílios |
|---|---|---|
| Rótulo | `Curso de` | `Curso de` |
| Título | `Unhas` | `Cílios` |
| Script | `nail design` | `lash design` |
| Linha 1 | Alongamento em fibra de vidro e molde F1 | Extensão de cílios: fio a fio, brasileiro e híbrido |
| Linha 2 | Do básico ao avançado | Aula 90% prática, com modelo |
| Linha 3 | 8 horas de aula | 8 horas de aula |
| Linha 4 | Certificado | Certificado |
| CTA | `Quero saber das turmas` | `Quero saber das turmas` |

Fontes: certificado de Nails Design de 09/11/2025 ("alongamento de fibra e molde
F1", "carga horária de 08 horas"), arte do curso de 13/04/2025 ("Do básico ao
avançado", "Certificado garantido"), destaque Curso Cílios ("Aula 90% prática",
"Fio a fio, Brasileiro e Híbrido", certificado de 8 horas). Datas e valores não
existem no Instagram: não escrever nada sobre eles além do CTA.

Dados em `src/data/cursos.ts`, com campo `foto?` opcional para quando houver
autorização das alunas (seção 8).

### 5.9 Rodapé

Uma linha: monograma pequeno · `SR Espaço da Beleza` · `São Mateus, São Paulo` ·
link do Instagram · `© ano`. Corações do logo como separadores.

## 6. Navegação e caminho até o WhatsApp

- **Links do topo (`md`+):** Resultados · Serviços · O salão · Cursos · botão `Agendar`.
- **Celular:** botão de menu na barra. Abre painel de tela cheia (fundo `fundo`,
  links em `.titulo`, um por linha, mais o botão do WhatsApp). Fecha ao tocar num
  link, no X ou com Esc; trava a rolagem do fundo enquanto aberto; `aria-expanded`
  e foco visível. Animação só com `opacity`/`transform`.
- **Botão flutuante do WhatsApp:** mantém. No celular, some enquanto o CTA do
  Contato estiver na tela (evita dois botões iguais sobrepostos).
- **Links para o Instagram:** só três (último cartão da galeria, Contato, rodapé).
- Todos os CTAs continuam no mesmo link `wa.me/message/...` (sem texto pronto).
  O telefone lido numa arte de 2025 não foi confirmado: não usar.

## 7. `index.html`

- `<title>`: `SR Espaço da Beleza | Salão de beleza em São Mateus, São Paulo`
- `description`: `Cabelos, unhas, cílios, sobrancelhas, bronze e tranças em São Mateus, São Paulo. Cursos profissionais de unhas e de cílios. Agende pelo WhatsApp.`
- `og:description`: a mesma. `og:image`: `hero-unhas` (JPEG, não WebP).
- JSON-LD e `canonical` continuam para quando houver endereço e domínio.

## 8. O que depende da Silvana

Substitui a lista de `CONTEUDO-PENDENTE.md` (manter os itens de logo, domínio,
antes/depois e quiz que já estão lá). Em ordem de impacto:

| # | Pergunta | O que destrava |
|---|---|---|
| 1 | Qual o endereço e o horário de funcionamento? | `site.endereco`, `site.horario`, mapa, JSON-LD |
| 2 | Os valores das tabelas de Unhas e de Cabelos dos destaques ainda valem? | `site.mostrarPrecos = true` |
| 3 | Pode usar no site as fotos de unhas e de cabelo do Instagram? | Mantém a galeria no ar com tranquilidade |
| 4 | As alunas das fotos de certificado autorizam aparecer no site? | Fotos nos cartões de Cursos (`2025-11-09-formatura-...-s5` e `-s7`) |
| 5 | A Kerolyn autoriza publicar a mensagem dela sobre o curso? | Primeiro depoimento em `depoimentos.ts` |
| 6 | Tranças continua sendo feita no salão? E os volumes egípcio, glamour e russo? | Mantém ou tira o cartão; completa Cílios |
| 7 | O número (11) 98282-8471 é o WhatsApp do salão? | Botões com mensagem pronta por serviço |
| 8 | A foto de 28/10/2026 (francesinha no cetim rosa) é foto real? | Mais uma foto na galeria |
| 9 | Compressa quente e massagem são de todo atendimento ou foram só no frio? | Voltam para Unhas e Sobrancelhas |
| 10 | Tem fotos de cílios, sobrancelhas, bronze e tranças sem rosto e sem texto? | Galeria deixa de ser quase só unhas |

## 9. Ordem de implementação

Uma etapa por vez. Ao fim de cada uma: `npm run build`, preview em 1440×900 e
375×812 sem erro de console e sem rolagem lateral, commit em português e
`git push origin main`.

1. **Imagens:** preparar os arquivos da seção 4.1 em `public/img/` (sem apagar os
   antigos ainda).
2. **Dados:** `site.ts` (`bairro`, `cidade`, `endereco`, `horario`,
   `mostrarPrecos`; tirar `seguidores`), `servicos.ts` (no lugar de `capitulos.ts`),
   `resultados.ts`, `promocao.ts`, `cursos.ts`.
3. **Hero, Nav (menu no celular) e `index.html`.**
4. **Promoção.**
5. **Galeria** (fotos novas, fita nativa no celular, último cartão).
6. **Serviços** (cardápio; apagar `Capitulos`, `FaixaTexto`, `Numeros`).
7. **Quem cuida de você** (reescrever `Espaco`).
8. **Contato, Cursos e rodapé** (apagar `Mural`; `Depoimentos` vira componente
   próprio, oculto sem dados; nova ordem em `App.tsx`).
9. **Limpeza e documentos:** apagar imagens antigas sem uso; conferir que nenhuma
   frase e nenhuma foto se repete; atualizar `CLAUDE.md` (lista de arquivos de
   dados), `CONTEXTO.md` (nova ordem e decisões) e `CONTEUDO-PENDENTE.md` (seção 8).

## 10. Conferência final

- Nenhum texto com informação que não esteja em `instagram.md` ou neste arquivo.
- Nenhuma arte de post, nenhum rosto de cliente ou aluna, nenhuma foto repetida.
- No celular, a primeira foto de resultado aparece em até 2 telas de rolagem e a
  página inteira tem no máximo ~9 telas.
- Com a data do sistema depois de 20/11/2026, a faixa da Black Friday não aparece
  e o hero encosta direto na galeria, sem buraco.
- Títulos só em `.titulo`, scripts só em `.subtitulo`, texto só em `.corpo` e
  `.corpo-pequeno`. Nenhuma cor nova.
