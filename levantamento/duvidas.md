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
