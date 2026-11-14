# Dúvidas e desvios da implementação da direção

Anotadas durante a implementação de [direcao.md](direcao.md). Cada item diz o que foi
decidido (sempre a opção mais simples).

## Imagens

- **WebP não foi gerado.** A direção pede `npx --yes sharp-cli` (1200 px, qualidade ~78).
  O ambiente negou a execução de `npx --yes` (baixa e roda um pacote do npm), e não
  tentei contornar. Seguindo o plano B da própria direção, as 11 imagens foram
  **copiadas como JPEG original** (1440 px de largura, exceto `silvana-salao`, com 828 px),
  com os nomes da seção 4.1 e extensão `.jpg`. Peso total: cerca de 3,9 MB, todas com
  `loading="lazy"` (menos a do hero).
  - **Resolvido depois da revisão (M4 de [revisao.md](revisao.md)):** o WebP foi gerado com o
    Pillow já instalado na máquina (sem `npx` e sem dependência nova): 1200 px de largura,
    qualidade 78, as menores mantidas no tamanho original. `public/img` caiu de 3,95 MB para
    1,7 MB (1,5 MB de WebP). Ficam em JPEG só `hero-unhas.jpg` (o `og:image`, como pede a seção 7)
    e `logo-perfil.jpg` (4,5 KB). Os originais continuam em `levantamento/imagens/`.

## Dados

- **`site.seguidores` e `capitulos.ts` ficam até a etapa 6.** A direção manda tirá-los na
  etapa 2, mas `Numeros` e `Capitulos` ainda os importam e o build quebraria. Saem junto
  com esses componentes.
- **"Gel na tips" (R$ 110)** não tem lugar óbvio no cardápio. Ficou como linha de preço
  dentro de "Alongamento em gel", ao lado de "Unhas de gel" (R$ 130). Só aparece com
  `site.mostrarPrecos = true`.

## Hero e Nav

- **Monograma tirado do palco do hero.** A direção fala só em "hero-unhas no arco grande" e
  "silvana-salao no quadro menor". O monograma ficava por cima das fotos, e a direção
  proíbe sobreposição em cima das fotos de unha. Ele volta no rodapé (etapa 8).
- **"Role" do hero** virou botão que rola uma tela para baixo (antes era âncora para
  `#faixa`, que sai na etapa 6), assim não pula a faixa da Black Friday.
- **Ordem no hero:** rótulo, título, texto, caixa de serviços, CTAs (a ordem da lista da
  seção 5.1). A caixa de serviços saiu de cima do título.
- **`og:title`** não aparece na seção 7, então ficou como estava (`SR Espaço da Beleza`).
- **Botão flutuante** já observa `#contato-cta`; esse id entra no CTA do Contato na etapa 8.

## Quem cuida de você

- **`espaco-recepcao.jpg` traz o texto "Sonhei" por cima da foto** (veio de capa de reel). A
  direção manda manter a foto, e a seção 10 proíbe arte de post. Solução: o quadro dá
  zoom de 1.7 ancorado embaixo, o que deixa a parede e o "Sonhei" fora do enquadramento
  (aparecem só as poltronas e a planta; o monograma SR da parede também sai). Vale pedir à
  Silvana uma foto limpa da recepção.
  - **Depois, a pedido do Kevin:** o quadro mostra uma poltrona só. O arquivo passou a ser um
    recorte de 300×300 do original (640×640, poltrona da esquerda com a planta ao lado), sem
    zoom no CSS; o "Sonhei" e o monograma da parede ficam fora do arquivo.
- **`fachada.jpg` mostra o adesivo da vitrine com o rosto de uma mulher** ("Seja sua melhor
  versão / Cursos: Nail design / Lash..."). É propaganda do próprio salão, provavelmente a
  Silvana, mas **isso não está confirmado** em nenhum lugar. O `alt` descreve só o adesivo,
  sem dar nome. Perguntar à Silvana quem é, ou trocar por foto da fachada sem o adesivo.
  - **Pedido de mostrar a fachada inteira:** não dá com esta foto. Ela é um close inclinado
    de capa de reel (360×640, sem original maior) e o quadro já mostra de 67% (computador) a
    87% (celular) da altura dela; mostrar a foto inteira só acrescentaria o resto do adesivo e
    o chão. Precisa de foto nova, tirada de longe (pendência 11 de `CONTEUDO-PENDENTE.md`).

## Contato, Cursos, rodapé e Depoimentos

- **Depoimentos** (`Depoimentos.tsx`) saiu do Mural e continua oculto sem dados. A direção
  não dá texto para essa seção; o único rótulo é `Avaliações` (nome do destaque do
  Instagram), sem título. Os cartões deixaram de ser cremes (cor fora da paleta) e usam
  `cetim` com texto `.corpo`.
- **Monograma** foi redesenhado a partir do letreiro da foto de referência: anel duplo fino,
  6 corações presos ao anel e "Espaço da Beleza" em curva embaixo. Continua sendo uma
  aproximação em SVG, não o arquivo original da logo.
- **Rodapé** é um componente próprio (`Rodape.tsx`), depois de Cursos, como na ordem da
  seção 2. O link do Instagram no rodapé tem o texto `Instagram` (a direção diz só "link do
  Instagram").
- **Botão flutuante em computador:** a direção só manda sumir no celular. Em `md`+ ele
  continua visível junto do CTA do Contato.

## Limpeza

- Removidos também, por ficarem sem uso depois das trocas: `IconeBrilho`, as classes
  `.contorno` e `.faixa.reversa` de `index.css`.
- `README.md` estava descrevendo o site antigo (capítulos, faixa de texto); foi atualizado
  junto com `CLAUDE.md`, `CONTEXTO.md` e `CONTEUDO-PENDENTE.md`.
- Dois acertos pequenos em componentes ocultos, para cumprir a seção 10: o `aria-label` do
  comparador de antes e depois perdeu um travessão, e os rótulos "Antes"/"Depois" usam a
  cor `texto` (antes `creme`).
- **Tamanho no celular:** com a faixa da Black Friday no ar a página tem 9,95 telas de
  812 px; depois de 20/11/2026, 9,0. A direção pede "no máximo ~9".
  - **Medida da primeira foto (revisão, M1):** em 375×812, com a faixa, o topo da primeira
    foto da galeria fica a 2.128 px. Ela entra na tela depois de 1,62 tela de rolagem
    (2,62 telas contadas do topo da página). Sem a faixa: 0,67 de rolagem. Pela leitura
    "2 telas de rolagem" da seção 10, o critério passa; o código não mudou por isso.
  - **Depois, o Kevin escolheu compactar** para cumprir também a leitura rígida (posição
    ÷ 812). Só abaixo de `md`:
    - **Hero:** respiro menor (`pt-[88px] pb-10`, espaços de 20 px), palco das fotos com
      até 290 px de largura e "Role" escondido.
    - **Faixa da Black Friday:** `py-10`; os 6 preços viram cartões que deslizam para o
      lado (mesmo estilo dos cartões do computador). Só 2 preços aparecem inteiros sem
      deslizar.
    - **Galeria:** `pt-12`.

    Em 375×812, a primeira foto foi de 2.128 para 1.587 px (1,95 tela; 1,42 sem a faixa),
    e a página de 9,93 para 9,26 telas (8,73 sem a faixa). Do `md` para cima, nada muda.

## Correções da revisão ([revisao.md](revisao.md))

- **Título do hero:** voltou às duas linhas da direção, `Sua autoestima` /
  `<em>começa aqui.</em>`. Para "Sua autoestima" caber numa linha, o tamanho passou a
  `clamp(2.75rem, 12vw, 7.2rem)`, e a partir de `lg` `min(6.8vw, 5.4rem)` (a coluna do
  texto é estreita). Conferido em 360, 375, 768, 1024 e 1440 px: sempre 2 linhas.
- **Legenda da galeria:** saiu de cima da foto (tinha um degradê `fundo/90`) e foi para
  baixo dela, fora da imagem. Nada de cor sobre as unhas.

## Direção visual ([direcao-visual.md](direcao-visual.md), implementada em 14/11/2026)

Onde a direção foi ambígua ou entrou em choque com `direcao.md`, valeu a opção mais simples.

- **Rótulo do hero:** a direção visual escreve `São Mateus, SP` (uma linha) e `direcao.md`
  escreve `São Paulo`. Em 360 px "São Paulo" não cabe numa linha, então o celular mostra
  "SP" e de `sm` para cima aparece "São Paulo" (dois `span`, um escondido em cada tamanho).
- **Hero sem parallax, sem inclinação e sem "Role":** o botão "Role" foi removido inteiro,
  não só o traço animado (sozinho ele não diz nada). O parallax do mouse também saiu no
  computador, porque o palco com duas fotos sobrepostas deixou de existir.
- **Foto do hero no celular:** `object-position` 50% 0% (a direção diz que a barra fica
  sobre a parte preta; com 45% ela caía sobre as mãos). No computador continua 50% 45%.
- **Nome do salão na barra** (só de `sm` para cima): em `.botao-texto` (Jost), porque a
  regra "sem maiúsculas em Playfair" proíbe o estilo antigo e não há um 10º estilo. Os
  links da barra do computador também usam `.botao-texto`.
- **Cursos:** a direção visual manda rótulo `Nail design` / `Lash design` e título
  `Curso de unhas` / `Curso de cílios` (a `direcao.md` tinha rótulo "Curso de", título
  "Unhas" e a cursiva "nail design"). Valeu a visual; `cursos.ts` troca `script` por
  `rotulo`. Sem `Tilt` nos cartões ("iguais").
- **Botão flutuante:** some também com o botão do hero e o da Promoção, e isso vale no
  computador também (a regra era só para o celular), por ser a opção mais simples.
- **Galeria no computador (presa):** só troca de tokens; continua com `Tilt` e o reflexo
  claro que segue o mouse (é um `radial-gradient` de efeito de mouse, não fundo nem botão).
- **`unhas-brancas-ouro`:** a foto já é 4:5, então `object-position` não corta nada. A
  marca d'água sai com `scale(1.16)` partindo do canto de cima à direita (`origem` em
  `resultados.ts`).
- **Arquivos apagados de `public/img`:** `unhas-leitosas`, `unhas-francesinha-ouro`,
  `fachada`, `espaco-recepcao` (ficam no histórico do git; os originais seguem em
  `levantamento/imagens/`).
- **Monograma do rodapé:** o SVG tem "SR" e "Espaço da Beleza" em Great Vibes. É a logo, então
  não entra na conta das "3 cursivas" nem dos 9 estilos de texto da conferência.
- **`Reveal`:** o atraso é limitado a 0,1 s dentro do componente (`Math.min`), então chamadas
  antigas com `atraso={0.35}` etc. continuam compilando e ficam dentro da regra. Perdeu o
  parâmetro `y` (era 28 px; agora fixo em 16 px).
- **Depoimentos (oculto):** deixou de ser uma faixa que roda sozinha (era um laço infinito) e
  virou fita nativa com encaixe, igual à galeria.
- **Faixa da Black Friday no celular:** continua em cartões que deslizam para o lado (a
  direção visual só pede troca de tokens, botão cheio de largura total e valor em
  `.titulo-cartao`).
- **Cabeçalho de Cursos:** `Cursos <em>profissionais</em>` em uma frase corrida (no celular
  quebra em duas linhas por `text-wrap: balance`); antes eram duas linhas fixas com a segunda
  menor.
- **`theme-color`** em `index.html` passou a `#1a0f10` (novo `fundo`).
- **CTA da Promoção em contorno (não cheio):** a seção 9 manda botão cheio na Promoção, mas
  a seção 12 manda "nunca dois botões cheios na mesma tela". A faixa é curta: em 360×640 e
  em 375×812 o botão cheio do hero e o da Promoção apareciam juntos (rolagem de 440 a 560 px).
  Valeu a regra geral: a Promoção usa o contorno de largura total, e só o hero tem o cheio.

