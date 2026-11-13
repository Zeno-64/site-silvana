# Contexto do projeto (passagem de sessão)

Escrito em 2026-09-30 e reescrito em 2026-11-13, depois de implementar
[levantamento/direcao.md](levantamento/direcao.md). Serve para a próxima sessão abrir
direto nesta pasta sem depender do histórico do workspace.

## O que é

Site do salão **SR Espaço da Beleza** (dona: Silvana Ribeiro, sobrenome confirmado pelo
letreiro da parede e pelos certificados), feito pelo Kevin como freelance. Instagram:
`@srespacodabelezaofc` (2,6 mil seguidoras). Bio: "Sua autoestima começa aqui" ·
Cabelos | Unhas | Cílios | Sobrancelhas | Bronze · Cursos Profissionais. Local: São
Mateus, São Paulo (das marcações e hashtags dos posts). WhatsApp:
`https://wa.me/message/EHB7T5G6A4KJM1` (link curto "message": não aceita `?text=`).

## Como o conteúdo foi obtido

- `levantamento/instagram.md`: leitura do perfil logado (107 posts próprios, 36 em
  colaboração, 8 destaques frame a frame) e leitura visual com nota de 1 a 3 por post.
- `levantamento/imagens.md`: as 24 fotos nota 3 baixadas em `levantamento/imagens/`
  (fora do git).
- `levantamento/direcao.md`: a direção que o site segue. **Onde ela e o código
  discordarem, vale a direção.** Onde for ambígua, o que foi decidido está em
  `levantamento/duvidas.md`.
- `levantamento/auditoria.md`: auditoria do site anterior (história, copy, identidade).

## Decisões do Kevin

- Quiz "qual serviço é a sua cara?" e montador de combo com preço somado: ficam para
  quando a cliente enviar a lista de serviços. Quando vierem, encaixar entre Serviços e
  Resultados.
- Antes/depois e depoimentos existem, mas ocultos por falta de dados.
- Tipografia em 3 papéis, uma fonte e uma cor cada (ver `CLAUDE.md`).
- Só o que o Instagram sustenta entra no site; o resto vai para `CONTEUDO-PENDENTE.md`.

## Ordem da página (atual)

`Hero` → `Promocao` (Black Friday, some depois de 20/11/2026 23h59) → `Resultados`
(9 fotos 4:5 + cartão do Instagram; presa no computador, fita nativa no celular) →
`AntesDepois` (oculto) → `Depoimentos` (oculto) → `Servicos` (cardápio em texto; sanfona
no celular) → `Espaco` ("Quem cuida de você", `id="espaco"`) → `Contato` → `Cursos` →
`Rodape`. Globais: `Nav` (barra, menu de tela cheia no celular, progresso, botão
flutuante de WhatsApp que some no celular enquanto o CTA do Contato está na tela); o
cursor é só CSS. Primitivas: `Magnetic`, `Tilt`, `Reveal`/`Linhas`, `Blobs`,
`Monograma`, `Coracao` (ornamento único), `useMediaQuery`.

Saíram do repositório: `FaixaTexto`, `Numeros`, `Mural`, `Capitulos` (e
`capitulos.ts`), `ArteSemFoto`, as artes de post (`bronze`, `sobrancelhas`,
`unhas-azul`) e as fotos antigas.

## Estado / limitações atuais

- **Imagens em WebP** (1200 px, qualidade 78, gerado com Pillow; 1,5 MB no total). Só
  `hero-unhas.jpg` (para o `og:image`) e `logo-perfil.jpg` continuam em JPEG. Ver
  `levantamento/duvidas.md`.
- **Preços desligados** (`site.mostrarPrecos = false`). As tabelas de Unhas e Cabelos
  estão em `servicos.ts`, mas só aparecem quando a Silvana confirmar que valem. As de
  Cílios e Tranças são assinadas por outras profissionais e não entram.
- **Endereço e horário** não existem no Instagram: `site.endereco` e `site.horario`
  vazios, nada de "em breve" no site. JSON-LD e `canonical` esperam endereço e domínio.
- **Monograma** é um SVG redesenhado a partir do letreiro (`Monograma.tsx`), não a logo
  original.
- `espaco-recepcao.webp` tem o texto "Sonhei" por cima (cortado com zoom) e `fachada.webp`
  mostra o rosto do adesivo da vitrine. Ver `levantamento/duvidas.md`.
- Nenhuma foto de rosto de cliente ou aluna está no site. As 5 fotos de entrega de
  certificado esperam autorização (campo `foto?` em `cursos.ts`).

## Detalhes técnicos que custaram tempo

- `whileInView` dentro de `overflow-hidden` não dispara: ver `CLAUDE.md`.
- `Linhas` (`Reveal.tsx`): a máscara ganhou 0.4em de folga em volta (para não cortar o
  brilho rosa do título); por isso o texto sobe de 160%, e o contêiner é `flex-col`
  (margens negativas de blocos vizinhos colapsariam).
- `Resultados`: no computador a altura da seção = `100svh + distância que a fita precisa
  andar`, medida com `ResizeObserver`. No celular é outro componente (`GaleriaFita`),
  escolhido por `useMediaQuery`, porque `useScroll` com alvo fora da tela não funciona.
- `Servicos`: no celular o painel de cada cartão só é renderizado quando aberto (sanfona
  sem animar altura, para respeitar "só transform e opacity").
- No `Hero`, a linha "Cabelos · Unhas · Cílios · Sobrancelhas · Bronze" fica numa caixa:
  no celular vira faixa de ponta a ponta (uma linha só, tamanho em `vw`); de `sm` em
  diante, caixa arredondada.
- O botão flutuante observa `#contato-cta` (id do CTA do Contato).
- No shell do Claude Code no Windows, blocos `cat <<EOF` muito grandes com aspas mistas
  falharam; para arquivos longos usar a ferramenta Write.
- O navegador embutido devolve screenshot atrasado em um passo: depois de rolar, esperar
  e tirar o print duas vezes. O log de console do preview guarda erros de módulos antigos
  (HMR): confira o carimbo `?t=` do erro antes de achar que é do código atual.
