# Revisão do site contra a direção

Revisão do site implementado (até o commit `5907a56`) contra [direcao.md](direcao.md),
feita em 13/11/2026 sem alterar código. Fontes: `CLAUDE.md`, `direcao.md`,
[duvidas.md](duvidas.md) e [instagram.md](instagram.md). O preview foi percorrido
inteiro em 1440×900 e em 375×812. O console ficou sem erros nos dois tamanhos.

**Resumo:** não há problema grave. Quatro itens são médios: o critério de "2 telas"
da seção 10 falha no celular enquanto a Black Friday estiver no ar; um `<em>` está
fora do lugar no título do hero; há sobreposição de cor nas fotos de unha; e as
imagens ainda são pesadas. O resto é detalhe.

## Situação depois das correções

Os itens médios foram tratados no commit seguinte a esta revisão:

| Item | Situação |
|---|---|
| M1 | **Corrigido.** Hero, faixa e galeria foram compactados no celular, e a primeira foto ficou a 1,95 tela do topo com a faixa no ar (antes, 2,62). A página passou a ter 9,26 telas. Detalhes em `duvidas.md`. |
| M2 | **Corrigido.** O título ficou em 2 linhas, com o `<em>` em "começa aqui.". O tamanho foi ajustado para não quebrar em 4 linhas no computador. |
| M3 | **Corrigido.** A legenda foi para baixo da foto, sem degradê. |
| M4 | **Corrigido.** As fotos estão em WebP de 1200 px, com qualidade 78: `public/img` caiu de 3,95 MB para 1,7 MB (1,5 MB de WebP; o `hero-unhas.jpg` do `og:image` continua). |

Detalhes registrados em `duvidas.md`.

## Grave

Nenhum.

## Médio

### M1. No celular, a galeria aparece depois de 2 telas enquanto a Black Friday estiver no ar

- **Critério:** seção 10, em `direcao.md:382`: "a primeira foto de resultado aparece
  em até 2 telas de rolagem e a página inteira tem no máximo ~9 telas".
- **Medido em 375×812, com a faixa:**

  | Medida | Valor |
  |---|---|
  | Primeira foto da galeria | 2.181 px, ou **2,69 telas** |
  | Altura da página | 8.081 px, ou **9,95 telas** |
  | Hero | 1.163 px |
  | Promoção | 775 px |

- **Depois de 20/11 (sem a faixa):** a galeria cai para cerca de 1.406 px (1,73 tela)
  e a página para 9,0 telas. As duas medidas passam.
- **Causa:** o hero tem `min-h-[100svh]` com `pt-28 pb-24` (`src/components/Hero.tsx:95`
  e `:101`) e, no celular, empilha texto, CTAs e as duas fotos. A faixa vem logo
  abaixo, como manda a direção.
- **O que falta em `duvidas.md`:** a decisão registra as 9,95 telas
  (`duvidas.md:74-75`), mas não registra que a galeria fica a 2,69 telas.
- **Atenuante:** a `hero-unhas` já é foto de resultado e aparece na primeira tela, o
  que cumpre a intenção do item 3 da seção 1 ("a prova vem antes do catálogo"). Cabe
  ao Kevin aceitar o desvio até 20/11 ou pedir para compactar o hero no celular.

### M2. O `<em>` do título do hero está na palavra errada

- **Direção** (`direcao.md:141`): `Sua autoestima` / `<em>começa aqui.</em>`.
- **Implementado** (`src/components/Hero.tsx:114`):
  `linhas={['Sua', <em>autoestima</em>, 'começa aqui.']}`. O título fica em 3 linhas,
  com o itálico em "autoestima" e "começa aqui." sem destaque.
- É o único texto da página que difere da direção.

### M3. A legenda das fotos de unha tem uma sobreposição de cor

- **Direção** (`direcao.md:68`): "Nada de filtro ou sobreposição de cor em cima das
  fotos de unha: a cor do esmalte é a informação."
- **Implementado** (`src/components/Resultados.tsx:24`): o `figcaption` da legenda
  ("Unhas") usa `bg-gradient-to-t from-fundo/90 to-transparent` com `pt-10 pb-4`. Isso
  escurece a faixa de baixo de cada foto, cerca de 70 px.
- Em várias fotos, essa faixa tem dedos e unhas. No celular, a mão da primeira foto
  fica sob o degradê.

### M4. As imagens pesam 3,95 MB, contra o alvo de 1200 px em WebP

- **Direção** (`direcao.md:84-86`): WebP de 1200 px, com qualidade ~78. O plano B,
  JPEG original, foi usado e registrado.
- **Situação:** `public/img` tem 3,95 MB em 14 JPEGs. As 10 fotos da galeria somam
  3,5 MB, em 1440×1920. Três passam de 560 KB:

  | Arquivo | Peso |
  |---|---|
  | `unhas-preto-marmore` | 766 KB |
  | `unhas-francesinha-strass` | 624 KB |
  | `unhas-bordo` | 565 KB |

- **Exibição:** os cartões aparecem com ~270 px de largura no celular (`w-[72vw]`) e
  ~330 px no computador a 900 px de altura (`h-[46svh]`, em 4:5), sem `srcset`. Quem percorre a galeria pelo celular baixa ~3,5 MB.
- O `lazy` protege a primeira carga: só hero-unhas (195 KB), silvana-salao (177 KB) e
  o logo entram de início.
- **Correção:** já está listada em `CONTEUDO-PENDENTE.md:37` (rodar o `sharp-cli`). Vale
  fazer antes de divulgar o site.

## Detalhe

### D1. As fotos do salão ficam pouco nítidas

- `espaco-recepcao.jpg` tem 640×640 e recebe zoom de 1.7
  (`src/components/Espaco.tsx:82`). Só ~376 px da imagem original preenchem o quadro,
  o que a deixa mole em tela retina.
- `fachada.jpg` tem 360×640 (`Espaco.tsx:61`).
- Uma foto nova resolve as duas, e ela já é pedida em `CONTEUDO-PENDENTE.md:21`.

### D2. Acessibilidade da sanfona de serviços

- O botão tem `aria-controls` (`src/components/Servicos.tsx:56`), mas o painel só
  existe no DOM quando está aberto (`:68`). Com ele fechado, o `aria-controls` aponta
  para um id que não existe.
- Funciona: Unhas começa aberto, Cabelos abre ao toque, e mais de um painel pode
  ficar aberto ao mesmo tempo (a direção não proíbe).

### D3. Menu do celular

**O que funciona:**

- Tela cheia.
- Os 4 links mais o WhatsApp.
- O foco vai para o X ao abrir.
- Esc fecha e devolve o foco ao botão.
- Tocar num link fecha e rola até a seção.
- A rolagem do fundo trava com `overflow: hidden`.

**O que falta:**

- O painel tem `role="dialog" aria-modal` (`src/components/Nav.tsx:144`), mas o
  Tab sai dele para a página por trás.
- O `body.style.overflow` (`Nav.tsx:52`) não trava a rolagem em Safari iOS mais
  antigos.

### D4. O botão flutuante cobre preços da faixa

- No celular, o botão flutuante (56 px, no canto inferior direito) passa por cima da
  coluna de preços da faixa da Black Friday durante a rolagem.
- Some corretamente quando o CTA do Contato está na tela (`Nav.tsx:40-46` e `:70`).

### D5. A data da faixa só é conferida ao renderizar

- A checagem fica em `src/components/Promocao.tsx:13`. Quem estiver com a página
  aberta na virada de 20 para 21/11 continua vendo a faixa até recarregar.
- O efeito prático é nulo.

### D6. Carga horária dos cursos

- O "8 horas de aula" de Unhas (`src/data/cursos.ts:22`) está na direção
  (`direcao.md:300` e `:305`, com base no certificado de 09/11/2025, "08 horas").
  Ele não aparece transcrito em `instagram.md`, cuja seção do Curso Unha corta a
  carga horária (`instagram.md:234`).
- O certificado de Cílios traz "5 hs" e "08 horas" (`instagram.md:220`). A direção
  ficou com 8.
- Vale confirmar as duas cargas com a Silvana.

### D7. Técnicas que podem não ser do salão

- **Cabelos** (`src/data/servicos.ts:66-90`): vem de uma tabela sem o nome do salão e
  marcada "Conteúdo de IA" (`instagram.md:156`).
- **Tranças** (`servicos.ts:133-138`): vem da tabela da trancista Isadora Rios
  (`instagram.md:164-179`).
- A implementação segue a direção (`direcao.md:211` e `:216`), e as perguntas já estão
  em `CONTEUDO-PENDENTE.md:12` e `:16`. Fica o registro de que o cartão de Tranças é
  o mais frágil se a resposta for "não".

### D8. Selo da logo numa foto

- `unhas-brancas-ouro.jpg` traz no canto inferior esquerdo o selo da logo do salão
  ("SR Beleza", com corações). Não é arte de post nem dado novo; aceitável.
- O selo é a melhor referência do logo real, mais nítida que a foto citada em
  `direcao.md:58-61`, para uma próxima versão do `Monograma`.

## Parecer sobre as decisões em `duvidas.md`

| Decisão | Parecer |
|---|---|
| JPEG em vez de WebP (`duvidas.md:8-15`) | **Aceito como plano B**, que a direção prevê. A correção pendente é o M4. |
| `site.seguidores` e `capitulos.ts` até a etapa 6 (`:19-21`) | **Aceito.** Já saíram: não há mais referência em `src/`. |
| "Gel na tips" dentro de Alongamento em gel (`:22-24`) | **Aceito.** Só aparece com preços ligados, e não cria técnica nova. |
| Monograma fora do palco do hero (`:28-30`) | **Aceito.** Cumpre `direcao.md:68` e a 5.1, que no hero só fala de fotos. |
| "Role" virou botão (`:31-32`) | **Aceito.** Não pula a faixa. |
| Ordem do hero (`:33-34`) | **Aceito.** Confere com a 5.1. |
| `og:title` mantido (`:35`) | **Aceito.** A seção 7 não pede mudança. |
| Flutuante observando `#contato-cta` (`:36`) | **Aceito e conferido.** O id existe (`Contato.tsx:27`), e o botão some no celular com o CTA na tela. |
| Recepção com zoom de 1.7 para tirar o "Sonhei" (`:40-44`) | **Aceito como provisório.** Ver D1; a foto nova já é pendência. |
| Rosto no adesivo da fachada (`:45-48`) | **Aceito com pendência.** Se não for a Silvana, cai na proibição de rosto da seção 10. A pergunta está em `CONTEUDO-PENDENTE.md:21`; confirmar antes de divulgar. |
| Depoimentos com rótulo "Avaliações" e cartões `cetim` (`:52-55`) | **Aceito.** A seção segue oculta sem dados, e a cor ficou dentro da paleta. |
| Monograma redesenhado (`:56-58`) | **Aceito.** Ver D8 para uma referência melhor. |
| `Rodape.tsx` próprio, com o link "Instagram" (`:59-61`) | **Aceito.** Confere com a 5.9 e a ordem da seção 2. |
| Flutuante visível no desktop (`:62-63`) | **Aceito.** A direção só pede que ele suma no celular. |
| Limpeza: `IconeBrilho`, `.contorno`, `.faixa.reversa`, travessão e cor `creme` (`:67-73`) | **Aceito.** Nada disso aparece mais em `src/`. |
| Celular com 9,95 telas (`:74-75`) | **Apontar correção no registro.** Falta anotar que a galeria fica a 2,69 telas (M1). O "~9" fica aceitável até 20/11, a critério do Kevin. |

## Conferido e correto

- **Ordem das seções:** Hero, Promoção, Galeria, Serviços, Quem cuida, Contato,
  Cursos, Rodapé. Antes e depois e Depoimentos ficam ocultos, sem dados.
- **Textos:** todos os rótulos, títulos, scripts, frases, itens da faixa, cardápio,
  cursos, contato e rodapé estão iguais à direção, salvo o M2. `title`, `description`
  e `og:image` estão como pedido.
- **Informação da cliente:** nada fora de `instagram.md` ou da direção. Endereço e
  horário estão vazios e não aparecem; os preços estão desligados.
- **Fotos:**
  - Cada arquivo aparece uma vez; só `silvana-salao` repete (hero e "Quem cuida"),
    como a direção permite.
  - Não há arte de post nem rosto de cliente ou aluna.
  - Toda `<img>` tem `width`, `height` e `alt`; hero-unhas tem `eager` e
    `fetchPriority high`.
- **Links:** 3 links para o Instagram (cartão da galeria, Contato, rodapé). Os 12 CTAs
  usam o mesmo `wa.me/message/...`.
- **Black Friday:**
  - Com `Date.now()` em 21/11/2026 às 00:00:01 (Brasília), a faixa some e o hero
    encosta direto na galeria, sem buraco.
  - O limite `2026-11-20T23:59:59-03:00` está no fuso certo.
- **Galeria:**
  - Presa no computador.
  - Fita nativa com snap no celular, sem rolagem horizontal na página
    (`scrollWidth` 375).
- **Seção 10:** a tipografia fica só nas classes `.titulo`, `.subtitulo`, `.corpo` e
  `.corpo-pequeno`, e não entrou cor nova.
