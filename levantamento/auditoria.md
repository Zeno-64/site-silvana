# Auditoria do site: SR Espaço da Beleza

Feita em 12/11/2026, sobre o commit `602eafe`. Só leitura: nenhum arquivo de `src/` foi alterado.

## Como foi feita

- Preview local (`site-silvana`, porta 5174), percorrido de cima a baixo em **desktop 1440×900** e **celular 375×812**.
- Console sem erros. Sem rolagem horizontal no celular (`scrollWidth` = 375).
- Comparado com `CONTEXTO.md`, `CONTEUDO-PENDENTE.md` e `levantamento/instagram.md` (143 posts lidos).
- Limite: no celular o painel do navegador estava oculto, então as animações só avançavam a cada captura. Layout e posições foram conferidos por medida (JS), não só por imagem.

## Resumo

O site é bonito e fiel à paleta do Instagram, e o caminho até o WhatsApp é curto em qualquer ponto da página. O problema é o que ele **não responde**: onde fica, quando abre, quanto custa (ou ao menos "a partir de"), quem atende e o que as clientes acham. No lugar disso, a página repete a mesma lista de serviços três vezes e as mesmas 11 fotos em quatro seções. Há também três afirmações que não batem com o Instagram, o que fere a regra de não inventar informação da cliente.

## A história que a página conta hoje

| # | Seção | Altura (desktop / celular) | O que diz | Papel na história |
|---|---|---|---|---|
| 1 | Hero | 947 / 1.050 px | "Sua autoestima começa aqui." + lista de 5 serviços + 2 CTAs | Promessa |
| 2 | Faixa de texto | 242 / 122 px | Os 6 serviços em letras gigantes | Repete a lista (2ª vez) |
| 3 | Capítulos (6) | 4.860 / 4.385 px | Um serviço por tela, com frase e CTA | Repete a lista (3ª vez), agora com detalhe |
| 4 | Resultados | 1.934 / 2.382 px | Galeria horizontal presa | Prova (fraca: ver item 5) |
| 5 | Números | 194 / 502 px | 2,6 mil seguidoras · 6 áreas · 2 cursos | Prova (fraca: ver item 10) |
| 6 | O espaço | 908 / 1.062 px | Fachada + recepção | Confiança, mas sem endereço |
| 7 | Cursos | 1.098 / 981 px | Curso de Cílios e de Unhas | Muda de público (profissionais) |
| 8 | Mural | 1.366 / 1.082 px | Fitas de fotos "do Instagram" | Repete as fotos da galeria |
| 9 | Contato | 996 / 772 px | "Vamos cuidar de você?" + WhatsApp | Fechamento |

Total: **12.544 px no desktop (~14 telas)** e **12.336 px no celular (~15 telas)**. Capítulos + Resultados, as duas seções presas que "seguram" a rolagem, ocupam **54–55% da página**. No celular, a primeira foto de resultado só aparece depois de ~6,8 telas.

A sequência é: promessa → lista → lista → lista detalhada → fotos → números → lugar → cursos → fotos de novo → contato. Falta o meio da história: **por que confiar** (avaliações, quem faz, cuidados de higiene) e **como chegar** (endereço, horário). O que existe de prova vem depois de muito catálogo, e os Cursos entram entre a prova e o fechamento, falando com outra pessoa (quem quer aprender, não quem quer ser atendida).

## O que está fraco, em ordem de impacto

### 1. Nenhuma informação prática: onde, quando, quanto

- Endereço, bairro, cidade, horário e mapa não aparecem em lugar nenhum (nem no Contato, nem no rodapé, que só tem "© 2026 SR Espaço da Beleza").
- Quem chega pelo Google não sabe se o salão é perto antes de abrir o WhatsApp. Isso é a primeira pergunta de quem procura salão, e hoje toda conversa começa por ela.
- O Instagram já dá pistas que o site não usa: marcação "São Mateus" em vários posts, "Jd. Santa Barbara" em outros, hashtags `#SaoMateus` e `#salaodebelezasp`. **Não é endereço**: precisa ser confirmado com a cliente antes de entrar (está em `CONTEUDO-PENDENTE.md`).
- O `<title>` também não tem local ("SR Espaço da Beleza | Cabelos, Unhas..."), o que pesa em busca local.

### 2. Sem prova de outras clientes

- Depoimentos e antes/depois estão prontos no código, mas ocultos por falta de dados. Resultado: a única prova social visível é "2,6 mil seguidoras".
- O Mural diz "nos destaques você encontra as avaliações das clientes", ou seja, manda a pessoa sair do site para achar a prova. É o argumento mais forte de um salão de bairro e ele está fora da página.
- O Instagram tem um destaque "Avaliações⭐️" (não lido) e posts com texto de cliente satisfeita ("Mais uma cliente saindo super satisfeita"), mas nada disso tem autorização ainda.

### 3. Três afirmações que não batem com o Instagram

Fere a regra do `CLAUDE.md` de não inventar informação da cliente, e vira promessa no balcão.

- **Mimos de inverno apresentados como fixos.** Unhas ("Compressa quente", "Massagem nas mãos") e Sobrancelhas ("Massagem facial relaxante", "Toalha morna nas mãos ou nos pés") vêm de dois posts de setembro/2026 que começam com "**Nesse frio**" ([DdHMBZKxyzp](https://www.instagram.com/srespacodabelezaofc/p/DdHMBZKxyzp/), [DdRVGTXxTuN](https://www.instagram.com/srespacodabelezaofc/p/DdRVGTXxTuN/)). Era uma ação da estação; o site lista como parte do serviço o ano todo.
- **Palavras trocadas.** O post de unhas diz "massagem relaxante", não "nas mãos". O de sobrancelhas diz "compressa quentinha", não "toalha morna".
- **"Todo dia tem novidade no perfil"** (Mural). A grade tem intervalos de meses sem post (ex.: de 09/05 a 06/07/2026; de 03/07/2024 a 12/03/2025).

### 4. Repetição de lista e de fotos

- **A lista de serviços aparece 3 vezes seguidas** antes de qualquer prova: caixa do hero, faixa gigante, capítulos. A faixa não acrescenta informação.
- **O site inteiro usa 11 fotos.** As 7 da galeria Resultados voltam no Mural (6 cópias de cada na fita); `unhas-nude.jpg` aparece no hero, no capítulo Unhas, na galeria, no mural e no `og:image`. Quem rola até o Mural vê pela terceira ou quarta vez a mesma foto, sob o título "Nosso dia a dia", que promete o contrário.
- **"Sua autoestima começa aqui."** é o título do hero e é repetida, igual, como primeira frase de "O espaço" (vem de `site.frase`).
- **Sobrancelhas diz a mesma coisa três vezes**: a arte da foto ("Sobrancelhas, mais do que estética, é autocuidado"), o subtítulo ("mais que estética") e a frase ("Sobrancelha é autocuidado"), e ainda "design impecável" na frase e na lista.
- **Bronze**: a lista ("Bronze uniforme", "Tatuagem de bronze", "Pele hidratada e radiante") repete a frase logo acima, item por item.
- "Cuidado feito com calma" (hero) volta como "um cuidado feito com calma" (Cabelos).
- Os dois cartões de curso têm a mesma linha: "Fale com a gente e saiba datas e valores."

### 5. Artes de post no lugar de fotos, com botões que não funcionam

- Bronze, Sobrancelhas e a 2ª foto da galeria (`unhas-azul.jpg`, na verdade a arte "Um cuidado a mais para suas unhas") são **artes de divulgação com texto embutido**. Na galeria "Resultados", 3 das 7 peças são propaganda, não resultado.
- As artes têm um **botão desenhado "Agende seu horário"** que não é clicável. No celular ele fica na parte de baixo da foto, perto do botão flutuante real; a pessoa vai tocar e nada acontece.
- A arte do Bronze diz "Faça seu bronze e **ganhe** uma tatuagem de bronze" (soa como promoção), enquanto o texto do capítulo diz "com direito a tatuagem de bronze". Se era promoção com prazo, o site perpetua.
- O `alt` dessas imagens descreve só a foto ("Unhas amêndoa azul-clara perolada"), não o texto da arte.
- Todas as fotos têm 360–640 px de largura e ocupam arcos de até ~560 px no desktop: ficam moles em tela grande (já registrado como pendente).

### 6. Metade dos serviços sem foto ou com texto genérico, quando o Instagram tem o detalhe

- **Cílios e Tranças** não têm foto: mostram o monograma com o nome em script. Na tela fica um arco vazio cor de vinho. O cartão do **Curso de Cílios** é igual: um retângulo escuro com texto.
- **Cabelos, Cílios e Tranças** têm frases que serviriam para qualquer salão ("Do fio à finalização", "Um olhar mais marcante, delicado e no ponto certo", "Tranças com capricho"), e a lista de itens vazia.
- O levantamento do Instagram já tem termos reais que o site não usa: progressiva, selagem orgânica, selagem/botox sem formol, matização, Hidragloss (cabelos); alongamento de cílios "Brasileiro", extensão, lash design (cílios); henna (sobrancelhas); molde F1, banho de gel, blindagem, fibra, manutenção (unhas); postiça realista. Hoje Unhas, o serviço com mais posts, não cita nenhuma técnica.
- **Tranças está indefinida.** Não está na bio, nem na caixa do hero, nem no `<title>`; está na faixa, nos capítulos, na `description` e conta no "6 áreas". O único post que fala de tranças (out/2023) credita outra conta (`@maiahair_trancas`). Precisa confirmar se é serviço da casa.

### 7. Comprimento e ritmo, principalmente no celular

- A rolagem fica "presa" em mais da metade da página. Para passar dos serviços são ~4,4 telas no celular, mesmo para quem só quer unhas.
- O índice lateral dos capítulos (os traços clicáveis) é escondido abaixo de `sm`: **no celular não há como pular de capítulo**, nem menu (os links do topo só aparecem a partir de `md`). Quem quer Cursos ou Contato tem que rolar tudo.
- O rótulo "Capítulo 01 / 06" é linguagem de livro; para quem procura um serviço, "capítulo" não diz nada.
- No celular, a seção Números vira três blocos empilhados (502 px) para três números.

### 8. Cursos: outro público, sem conteúdo, no meio do caminho

- Fica entre a prova (Resultados/Espaço) e o fechamento (Mural/Contato), desviando a cliente que já estava convencida.
- Não diz nada além do nome: sem data, carga horária, formato, para quem é. O Instagram também não tem isso nas legendas (só os destaques, não lidos).
- O subtítulo "Seja a sua melhor versão — e transforme em profissão" tem o verbo sem objeto (transforme **o quê** em profissão?).

### 9. O caminho até o WhatsApp

O que funciona: 7 links para o WhatsApp (barra, hero, cada capítulo, os 2 cursos, contato, botão flutuante), o flutuante aparece depois de 500 px, e o CTA principal do hero fica acima da dobra no celular (topo em ~475 px de 812).

O que atrapalha:

- **Todo botão cai na mesma conversa vazia.** "Agendar cílios", "Agendar bronze" e "Curso de Unhas" abrem o mesmo link `wa.me/message/...`, que não aceita texto pré-preenchido. O contexto que a pessoa escolheu se perde e ela precisa digitar do zero (limitação conhecida; resolve com o número).
- **Sem nada para decidir antes de chamar.** Sem preço, local ou horário, o WhatsApp vira lugar de tirar dúvida básica, não de agendar.
- **Saídas para o Instagram antes do fechamento.** "Conheça mais no Instagram" em O espaço, e o Mural inteiro é link para o perfil (51 links para o Instagram na página, quase todos cópias da fita, contra 7 para o WhatsApp). Quem sai para o Instagram dificilmente volta para o CTA final.
- O botão flutuante cobre o canto inferior direito das fotos dos capítulos no celular.

### 10. Números que não convencem

- "2,6 mil seguidoras" é número de vaidade, e pequeno; "6 áreas" e "2 cursos" só recontam o que a página já mostrou.
- "6 áreas" contradiz a caixa do hero, que lista 5 (sem Tranças).
- "Seguidoras" assume só mulheres; ver item 11.

### 11. Tom de voz e público

- O Instagram fala de perto e com energia: "maravilhosa(s)", "a gata", "brilho que todas vocês merecem", promoções com vagas contadas, fé ("Toda honra e glória a Deus"). O site fala num tom de revista de luxo ("capítulos", "fios com vida", "arte nos fios"). Não está errado, mas a cliente que vem do perfil não reconhece a voz da Silvana.
- O texto é todo no feminino ("linda", "renovada", "bem-vinda", "seguidoras"), e o perfil tem post "Homem também faz as unhas" ([DQonogYEX37](https://www.instagram.com/srespacodabelezaofc/p/DQonogYEX37/)). Decisão do Kevin/da cliente, mas hoje o site exclui sem querer.

### 12. Quem atende não aparece

- O nome "Silvana" só existe nos `alt` das fotos; nenhum texto visível apresenta quem faz o trabalho. Ela aparece em foto no hero, no capítulo Cabelos e na fachada, sem legenda.
- O Instagram mostra uma equipe ("Agradecemos pela confiança em **nossa equipe**", "Novas Lash design e Nail design", parceria constante com `@studioribeiro_e`). O site não diz se é uma profissional ou várias.
- O cuidado com higiene (esterilização de alicates e espátulas, [DeUlLBYx14r](https://www.instagram.com/srespacodabelezaofc/reel/DeUlLBYx14r/)) é argumento de confiança forte em unhas e não aparece.

### 13. Menores

- `<title>` sem Tranças e `description` com Tranças (ver item 6).
- "O espaço" diz "Cada detalhe [...] foi pensado para você chegar, respirar e sair renovada": frase que serviria para qualquer salão.
- O título do Mural ("Nosso dia a dia, direto do Instagram") repete o rótulo logo acima ("No Instagram").

## O que manter

- **Paleta e clima.** Fundo chocolate, rosa e script batem com as artes da cliente (cetim, preto e rosa, 🖤🩷). É o ponto mais forte de coerência com o Instagram.
- **Título do hero = slogan da bio.** "Sua autoestima começa aqui." é a frase da própria cliente; só não repetir em outra seção.
- **Sistema de tipografia** (título, subtítulo, texto). Está aplicado de forma consistente em todas as seções e lê bem nos dois tamanhos.
- **CTA sempre à mão.** Barra fixa com "Agendar", botão flutuante, CTA por serviço. O CTA do hero aparece sem rolar no celular.
- **Fotos reais do espaço** (fachada com a Silvana, recepção com o monograma na parede). São as únicas fotos que ninguém mais tem; dão concretude.
- **Detalhes reais nos capítulos de Unhas, Sobrancelhas e Bronze**, depois de corrigir o que é sazonal (item 3).
- **Seções ocultas sem dados** (antes/depois, depoimentos). Melhor do que mostrar vazio.
- **Contato curto e claro**: "Chame no WhatsApp, conte o que você quer e a gente encontra o melhor horário."
- **Desempenho técnico**: console limpo, sem rolagem lateral no celular, `prefers-reduced-motion` respeitado.

## O que falta, em ordem de impacto

| # | Falta | Depende de |
|---|---|---|
| 1 | Endereço (ao menos bairro e cidade), horário de funcionamento, mapa | Cliente |
| 2 | Avaliações reais com autorização (destaque "Avaliações") | Cliente |
| 3 | Revisar os itens sazonais de Unhas e Sobrancelhas (são fixos ou foram só no frio?) | Cliente / Kevin |
| 4 | Fotos limpas, sem arte, em resolução maior; fotos de Cílios e Tranças | Cliente |
| 5 | Confirmar se Tranças é serviço da casa | Cliente |
| 6 | Quem atende: apresentação da Silvana (e da equipe, se houver) | Cliente / Kevin |
| 7 | Técnicas por serviço (o Instagram já tem várias; confirmar quais ainda são feitas) | Cliente |
| 8 | Número de WhatsApp para links com mensagem pronta por serviço | Cliente |
| 9 | Dados dos cursos (formato, carga horária, datas, para quem é) | Cliente |
| 10 | Navegação no celular (pular capítulos, chegar a Cursos/Contato) | Kevin |
| 11 | Decisão sobre público masculino e sobre o tom (mais próximo do Instagram ou não) | Kevin / cliente |
| 12 | Faixa de preço ou "a partir de", se a cliente quiser público | Cliente |
