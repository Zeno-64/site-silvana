# Conteúdo pendente: SR Espaço da Beleza

O que o site usa vem do Instagram (@srespacodabelezaofc), lido em 12/11/2026
(ver `levantamento/instagram.md`). O que falta depende da Silvana. Cada item diz **o que
destrava** e onde entra no código. A direção completa está em `levantamento/direcao.md`.

## Perguntas para a Silvana (em ordem de impacto)

| # | Pergunta | O que destrava |
|---|---|---|
| 1 | Qual o endereço e o horário de funcionamento? | `site.endereco`, `site.horario`, mapa, JSON-LD (`src/lib/site.ts`, `Contato.tsx`) |
| 2 | Os valores das tabelas de Unhas e de Cabelos dos destaques ainda valem? | `site.mostrarPrecos = true` (valores já estão em `src/data/servicos.ts`) |
| 3 | Pode usar no site as fotos de unhas e de cabelo do Instagram? | Mantém a galeria no ar com tranquilidade (`src/data/resultados.ts`) |
| 4 | As alunas das fotos de certificado autorizam aparecer no site? | Fotos nos cartões de Cursos (`2025-11-09-formatura-...-s5` e `-s7`, campo `foto` em `src/data/cursos.ts`) |
| 5 | A Kerolyn autoriza publicar a mensagem dela sobre o curso? | Primeiro depoimento em `src/data/depoimentos.ts` |
| 6 | Tranças continua sendo feita no salão? E os volumes egípcio, glamour e russo de cílios? | Mantém ou tira o cartão de Tranças; completa Cílios |
| 7 | O número (11) 98282-8471 é o WhatsApp do salão? | Botões com mensagem pronta por serviço (`https://wa.me/55DDDNUMERO?text=`) |
| 8 | A foto de 28/10/2026 (francesinha no cetim rosa) é foto real? | Mais uma foto na galeria |
| 9 | Compressa quente e massagem são de todo atendimento ou foram só no frio? | Voltam para Unhas e Sobrancelhas em `servicos.ts` (posts de 10/09 e 14/09 abrem com "Nesse frio") |
| 10 | Tem fotos de cílios, sobrancelhas, bronze e tranças sem rosto e sem texto? | A galeria deixa de ser quase só unhas |
| 11 | Quem é a mulher do adesivo da vitrine (foto da fachada)? Tem foto da fachada sem o adesivo e da recepção sem o texto "Sonhei"? | Seção "Quem cuida de você" (`fachada.jpg`, `espaco-recepcao.jpg`) |

## Bloqueia o lançamento

| Item | Onde entra |
|---|---|
| **Logo original em PNG/SVG, fundo transparente** | Hoje o monograma é um SVG redesenhado a partir do letreiro (`src/components/Monograma.tsx`) e o avatar do menu é a foto de perfil em 150 px (`public/img/logo-perfil.jpg`). |
| **Domínio** | Definir e apontar depois do deploy (ver passo a passo em `../landing-page-natalie/PLAYBOOK.md`). Com domínio e endereço entram `canonical` e JSON-LD. |

## Deixa o site mais forte

| Item | Onde entra |
|---|---|
| **Pares antes e depois** (mesmo enquadramento, com autorização) | `src/data/antesDepois.ts`. Enquanto estiver vazio a seção **não aparece**. O slider já está pronto e testado. |
| **Datas e valores dos cursos** | `src/components/Cursos.tsx` e `src/data/cursos.ts`. O Instagram não traz; hoje só há o CTA "Quero saber das turmas". |
| **Itens fora do cardápio por falta de confirmação** | Compressa quente e massagem (ação de inverno), tatuagem como brinde (promoção), Hidragloss e preenchimento (promoção e sorteio, sem sinal de serviço fixo), volumes egípcio, glamour e russo (só na tabela assinada por outra profissional). Entram em `src/data/servicos.ts` se a Silvana confirmar. |
| **Imagens em WebP** | `npx --yes sharp-cli` foi negado no ambiente; as fotos de `public/img/` são JPEG de 1440 px. Rodar o sharp por conta própria e trocar as extensões em `src/data/resultados.ts` e `Hero.tsx`. |

## Fica para depois (combinado)

- **Quiz "Qual serviço é a sua cara?"** e **montador de combo com preço somado**:
  dependem da lista completa de serviços (e preços, se forem públicos) que a cliente vai enviar.

## Cuidados

- Rostos de clientes e de alunas só com autorização delas.
- Conferir se a Silvana autoriza usar as fotos do Instagram no site (são dela, mas vale confirmar).
- Os preços da Black Friday (`src/data/promocao.ts`) valem só de 10 a 20/11/2026.
