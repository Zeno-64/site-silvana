# Conteúdo pendente — SR Espaço da Beleza

O que o site já usa vem do Instagram (@srespacodabelezaofc, perfil público, sem login).
O que falta depende da Silvana. Cada item diz **onde** entra no código.

## Bloqueia o lançamento

| Item | Onde entra |
|---|---|
| **Logo original em PNG/SVG, fundo transparente** | Hoje o monograma é um SVG redesenhado (`src/components/Monograma.tsx`) e o avatar do menu é a foto de perfil em 150 px (`public/img/logo-perfil.jpg`). |
| **Fotos originais, em alta resolução e sem arte por cima** | As de hoje têm 480–640 px e boa parte são posts com texto embutido (Bronze, Sobrancelhas). Ficam ótimas no celular, mas borram em tela grande. Trocar em `public/img/` mantendo os nomes. |
| **Endereço, horário de funcionamento e cidade** | Ainda não aparecem no site. Entram em `src/lib/site.ts` e na seção `Contato.tsx` (mapa incluso). |
| **Domínio** | Definir e apontar depois do deploy (ver passo a passo em `../landing-page-natalie/PLAYBOOK.md`). |

## Deixa o site mais forte

| Item | Onde entra |
|---|---|
| **Pares antes e depois** (mesmo enquadramento, com autorização) | `src/data/antesDepois.ts`. Enquanto estiver vazio a seção **não aparece**. O slider já está pronto e testado. |
| **Depoimentos** (prints da aba Avaliações, com autorização) | `src/data/depoimentos.ts`. Enquanto estiver vazio a faixa **não aparece**. |
| **Fotos de Cílios e de Tranças** | Hoje esses dois capítulos usam uma arte com o nome em script. Trocar em `src/data/capitulos.ts` (campo `foto`). |
| **Descrição real de Cabelos, Cílios e Tranças** | Os textos desses três são provisórios e genéricos; só Unhas, Sobrancelhas e Bronze usam detalhes vistos nos posts. Ajustar `frase` e `itens` em `capitulos.ts`. |
| **Detalhes dos cursos** (Cílios e Unha): datas, carga horária, valor | `src/components/Cursos.tsx`. Hoje só diz "fale com a gente". |
| **Fotos de clientes e do espaço** | Alimentam `src/data/resultados.ts` (galeria horizontal) e o mural do Instagram. |

## Fica para depois (combinado)

- **Quiz "Qual serviço é a sua cara?"** e **montador de combo com preço somado**:
  dependem da lista completa de serviços (e preços, se forem públicos) que a cliente vai enviar.

## Cuidados

- Rostos de clientes só com autorização delas.
- Conferir se a Silvana autoriza usar as fotos do Instagram no site (são dela, mas vale confirmar).
