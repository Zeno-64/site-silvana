# Dúvidas e desvios da implementação da direção

Anotadas durante a implementação de [direcao.md](direcao.md). Cada item diz o que foi
decidido (sempre a opção mais simples).

## Imagens

- **WebP não foi gerado.** A direção pede `npx --yes sharp-cli` (1200 px, qualidade ~78).
  O ambiente negou a execução de `npx --yes` (baixa e roda um pacote do npm), e não
  tentei contornar. Seguindo o plano B da própria direção, as 11 imagens foram
  **copiadas como JPEG original** (1440 px de largura, exceto `silvana-salao`, com 828 px),
  com os nomes da seção 4.1 e extensão `.jpg`. Peso total: cerca de 3,9 MB, todas com
  `loading="lazy"` (menos a do hero). Se o Kevin quiser WebP, basta rodar o `sharp-cli`
  por conta própria sobre `public/img/` e trocar as extensões em `src/data/resultados.ts`
  e no `Hero`.

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
