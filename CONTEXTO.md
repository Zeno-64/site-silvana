# Contexto do projeto (passagem de sessão)

Escrito em 2026-09-30, ao final da sessão que criou o site, para a próxima
sessão abrir direto nesta pasta sem depender do histórico do workspace.

## O que é

Site do salão **SR Espaço da Beleza** (dona: Silvana), feito pelo Kevin como
freelance. Instagram: `@srespacodabelezaofc` (2,6 mil seguidoras). Bio:
"Sua autoestima começa aqui" · Cabelos | Unhas | Cílios | Sobrancelhas |
Bronze · Cursos Profissionais. WhatsApp: `https://wa.me/message/EHB7T5G6A4KJM1`
(link curto "message": não aceita `?text=` com mensagem pré-preenchida).

Destaques do perfil: Unhas, Cílios, Cabelos, Tranças, Avaliações, Bronze,
Curso Cílios, Curso Unha.

## Como o material foi obtido

- Perfil público aberto no navegador embutido, **sem login** (aparece um
  pop-up de cadastro que não atrapalha a leitura).
- Só ~12 posts carregam sem login, com 480–640 px. Os destaques (incluindo
  **Avaliações**) são stories e exigem login: **não foram vistos**.
- Baixado para `brand/instagram/` (bruto) e copiado com nomes limpos para
  `public/img/`. A logo é só a foto de perfil em 150 px.
- Busca na web por mais informação (endereço, avaliações) não achou nada.

## Decisões do Kevin

- Implementar tudo do plano **exceto** o quiz "qual serviço é a sua cara?" e o
  montador de combo com preço somado: ficam para quando a cliente enviar a
  lista de serviços. Quando vierem, encaixar entre Serviços e Resultados.
- Antes/depois e parede de clientes entram no site (feitos, mas ocultos por
  falta de dados).

## O que existe (ordem da página)

`Hero` → `FaixaTexto` → `Capitulos` (6, fundo muda de cor) → `Resultados`
(galeria horizontal presa) → `AntesDepois` (oculto sem dados) → `Numeros` →
`Espaco` → `Cursos` → `Mural` (fitas do Instagram + depoimentos, ocultos sem
dados) → `Contato`. Globais: `Cursor`, `Nav` (barra, progresso, botão
flutuante de WhatsApp). Primitivas: `Magnetic`, `Tilt`, `Reveal`/`Linhas`,
`Blobs`, `Monograma`.

Verificado no preview: desktop 1440×900 e mobile 375×812 (sem overflow
horizontal), console limpo, troca de cor dos capítulos, galeria horizontal,
slider de antes/depois (clique e arraste, com dado temporário já revertido).

## Estado / limitações atuais

- **Monograma** é um SVG redesenhado (`Monograma.tsx`), não a logo original.
- **Cílios e Tranças** não têm foto: mostram arte com o nome em script
  (`ArteSemFoto` em `Capitulos.tsx`); o curso de Cílios idem em `Cursos.tsx`.
- Textos de **Cabelos, Cílios e Tranças** são genéricos/provisórios. Só Unhas,
  Sobrancelhas e Bronze usam detalhes reais dos posts (compressa quente +
  massagem; massagem facial relaxante, toalha morna, design impecável; bronze
  uniforme, tatuagem de bronze, pele hidratada).
- Fotos de **Bronze e Sobrancelhas** são artes de post com texto embutido;
  competem com o texto do capítulo. Trocar por fotos limpas quando houver.
- **Endereço, horário, cidade, mapa e domínio** ainda não existem no site.
- `Numeros` usa só dados reais: 2,6 mil seguidoras, 6 áreas, 2 cursos.
  Atualizar `site.seguidores` em `src/lib/site.ts` se mudar muito.
- Sem SEO avançado ainda (sem `canonical`, sem JSON-LD `HealthAndBeautyBusiness`):
  fazer quando houver endereço e domínio.
- O nome "Silvana" vem do perfil; o sobrenome não foi confirmado (apareceu
  parcialmente numa placa em um vídeo). Não usar sem confirmar.

## Próximos passos sugeridos

1. Kevin pedir à cliente o que está em `CONTEUDO-PENDENTE.md` (logo original,
   fotos limpas, endereço/horário, pares antes/depois, lista de serviços).
2. Com a lista de serviços: quiz + montador de combo (WhatsApp com mensagem
   montada; o link atual não aceita texto, então usar `https://wa.me/55DDDNUMERO?text=`
   quando houver o número).
3. Endereço/mapa/horário na seção `Contato` + JSON-LD + `canonical`/domínio.
4. Otimizar imagens (WebP/AVIF) quando chegarem as originais.
5. Domínio próprio (passo a passo em `../landing-page-natalie/PLAYBOOK.md`,
   se a pasta existir na máquina).

## Detalhes técnicos que custaram tempo

- `whileInView` dentro de `overflow-hidden` não dispara: ver `CLAUDE.md`.
- `FaixaTexto` usa duas cópias lado a lado e volta de -50% para 0 sem "pulo".
  A velocidade é constante e **não reage à rolagem da página** (pedido do
  Kevin: no celular a versão que acelerava com o scroll ficava estranha); só
  muda se a pessoa clicar/tocar e arrastar na faixa (`touch-pan-y` deixa o
  scroll vertical funcionar por cima dela). Não voltar a ligar `useVelocity`.
- **Tipografia unificada** (pedido do Kevin, menos poluição de cores): título
  branco com brilho rosa, subtítulo rosa em script, texto numa cor só e um
  pouco maior. Regras em `CLAUDE.md`; classes em `src/index.css`. Removidos o
  degradê `ouro-rosa`, as cores de acento por capítulo (`acento` saiu de
  `capitulos.ts`), `suave`, `ouro` e `cobre`. A faixa gigante ficou toda branca
  (sem as palavras só de contorno). As manchas de fundo (`Blobs`) e as cores de
  fundo de cada capítulo continuam como estavam.
- `Linhas` (`Reveal.tsx`): a máscara ganhou 0.4em de folga em volta (para não
  cortar o brilho do título); por isso o texto sobe de 160%, e o contêiner é
  `flex-col` (margens negativas de blocos vizinhos colapsariam).
- Capítulos no celular baixo (375×667): o texto maior deixa só ~140px para a
  foto do capítulo mais longo (Sobrancelhas). Se incomodar, encurtar a frase.
- No `Hero`, a linha "Cabelos · Unhas · Cílios · Sobrancelhas · Bronze" fica
  numa caixa: no celular vira faixa de ponta a ponta (uma linha só, tamanho em
  `vw`); de `sm` em diante, caixa arredondada. Entre `lg` e `xl` a coluna do
  texto tem ~480px, por isso a fonte é menor até `xl`.
- `Mural` repete cada fileira 6× para cobrir telas largas (menos de ~2.900 px
  por metade deixa vazio à direita).
- Capítulos: altura da seção = `n * 90svh`; o índice ativo sai de
  `floor(scrollYProgress * n)`. A navegação lateral (`irPara`) usa a mesma conta.
- `Resultados`: a altura da seção = `100svh + distância que a fita precisa
  andar`, medida com `ResizeObserver`.
- No shell do Claude Code no Windows, blocos `cat <<EOF` muito grandes com
  aspas mistas falharam; para arquivos longos usar a ferramenta Write.
- O navegador embutido devolve screenshot atrasado em um passo: depois de
  rolar, esperar e tirar o print duas vezes.
