# Contexto do projeto (passagem de sessão)

Escrito em 2026-09-30, reescrito em 2026-11-13 (depois de implementar
[levantamento/direcao.md](levantamento/direcao.md)) e atualizado em 2026-11-14 com a
[direção visual](levantamento/direcao-visual.md). Serve para a próxima sessão abrir
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
- `levantamento/direcao.md`: ordem das seções, copy e fotos. **Onde ela e o código
  discordarem, vale a direção.** Onde for ambígua, o que foi decidido está em
  `levantamento/duvidas.md`.
- `levantamento/direcao-visual.md`: a aparência (cor, tipografia, forma, espaço, fotos,
  movimento), medida e pensada para celular (375×812 e 360×640). **Vence `direcao.md`
  em tudo que é aparência.** Foi implementada em 9 etapas (14/11/2026).
- `levantamento/auditoria.md`: auditoria do site anterior (história, copy, identidade).

## Decisões do Kevin

- Quiz "qual serviço é a sua cara?" e montador de combo com preço somado: ficam para
  quando a cliente enviar a lista de serviços. Quando vierem, encaixar entre Serviços e
  Resultados.
- Antes/depois e depoimentos existem, mas ocultos por falta de dados.
- Tipografia em papéis fixos (hoje 9 estilos, ver `CLAUDE.md`). **Mudança de uma regra do
  Kevin, feita pela direção visual: o texto passou a ter dois tons (`texto` e
  `texto-suave`); ele pode vetar.** O título perdeu o brilho rosa e a cursiva ficou
  restrita a 3 cabeçalhos.
- Só o que o Instagram sustenta entra no site; o resto vai para `CONTEUDO-PENDENTE.md`.

## Ordem da página (atual)

`Hero` (foto de ponta a ponta no celular, duas colunas no computador) → `Promocao`
(Black Friday, some depois de 20/11/2026 23h59) → `Resultados` (9 fotos 4:5 mandadas pela
Silvana no WhatsApp + cartão do Instagram; presa no computador, fita nativa no celular; ver
"Galeria com as fotos do WhatsApp" em `levantamento/duvidas.md`) → `AntesDepois` (oculto) →
`Depoimentos` (oculto) → `Servicos` (em papel claro, `.papel`; sanfona no celular) →
`Espaco` ("Quem cuida de você", `id="espaco"`, só o retrato em arco) → `Contato` →
`Cursos` → `Rodape`. Globais: `Nav` (barra de 64 px, menu de tela cheia no celular,
progresso de 2 px, botão flutuante de WhatsApp que some enquanto o botão cheio do hero,
da Promoção ou do Contato está na tela); o cursor é só CSS. Primitivas: `Magnetic`,
`Tilt` (só na galeria do computador), `Reveal`/`Linhas`, `Monograma`, `Coracao`
(ornamento único), `useMediaQuery`. Sequência de fundos: `fundo`, `superficie`
(Promoção), `fundo`, `papel` (Serviços), `fundo`, `superficie` (Contato), `fundo`.

Saíram do repositório: `FaixaTexto`, `Numeros`, `Mural`, `Capitulos` (e
`capitulos.ts`), `ArteSemFoto`, `Blobs`, a classe `.grao`, as artes de post (`bronze`,
`sobrancelhas`, `unhas-azul`) e as fotos antigas (e, na direção visual, `fachada`,
`espaco-recepcao`, `unhas-leitosas` e `unhas-francesinha-ouro`).

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
- Fachada e recepção estão **fora do site** (a fachada era um close de capa de reel com o
  rosto do adesivo; a recepção, um recorte de 300 px). Voltam só com foto nova da
  Silvana (pendência 11 de `CONTEUDO-PENDENTE.md`).
- Nenhuma foto de rosto de cliente ou aluna está no site. As 5 fotos de entrega de
  certificado esperam autorização (campo `foto?` em `cursos.ts`).

## Detalhes técnicos que custaram tempo

- `whileInView` dentro de `overflow-hidden` não dispara: ver `CLAUDE.md`.
- `Linhas` (`Reveal.tsx`): a máscara tem 0.15em de folga em volta (para não cortar o
  itálico); o texto sobe de 130% em 0,6 s, e o contêiner é `flex-col` (margens negativas
  de blocos vizinhos colapsariam).
- `Resultados`: no computador a altura da seção = `100svh + distância que a fita precisa
  andar`, medida com `ResizeObserver`. No celular é outro componente (`GaleriaFita`),
  escolhido por `useMediaQuery`, porque `useScroll` com alvo fora da tela não funciona.
- `Servicos`: no celular o painel de cada cartão só é renderizado quando aberto (sanfona
  sem animar altura, para respeitar "só transform e opacity"). A seção usa `.papel`, que
  troca as variáveis de cor dentro dela; por isso nenhum componente dela sabe que está
  no claro.
- No `Hero`, a foto é a primeira coisa do celular (46svh, `object-position` 50% 0% para a
  barra do menu cair na parte preta) e só o título tem animação de entrada. Cada item da
  linha de serviços não quebra no meio (`whitespace-nowrap`), com o espaço fora do `span`,
  senão a linha estoura a largura do celular.
- O botão flutuante observa `#hero-cta`, `#promocao-cta` e `#contato-cta`: um botão cheio
  por tela, também no computador.
- Âncoras: `html` tem `scroll-padding-top: 4rem` para parar abaixo da barra fixa.
- No shell do Claude Code no Windows, blocos `cat <<EOF` muito grandes com aspas mistas
  falharam; para arquivos longos usar a ferramenta Write.
- O navegador embutido devolve screenshot atrasado em um passo: depois de rolar, esperar
  e tirar o print duas vezes. O log de console do preview guarda erros de módulos antigos
  (HMR): confira o carimbo `?t=` do erro antes de achar que é do código atual.
