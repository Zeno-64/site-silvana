# Plano: fotos novas no site inteiro e página do Bronze

Escrito em 15/11/2026 para ser executado no Opus. Decisão do Kevin: **as fotos que a
Silvana mandou pelo WhatsApp em 14/11 substituem as antigas do Instagram em todo o site**;
do bronze, **2 fotos ficam na página inicial** e **o resto (fotos e vídeo) vai para uma
página própria do Bronze**.

Vale junto com [direcao-visual.md](direcao-visual.md) (aparência) e [direcao.md](direcao.md)
(textos e ordem). O site é para celular: conferir tudo em **375×812** e **360×640**.

## 1. Ponto de partida

- Originais em `levantamento/whatsapp/` (fora do git): 22 fotos e 4 vídeos, numerados
  na ordem de chegada.
- **Já feito** (commit `0bde206`): a galeria "Feito aqui" usa 9 fotos novas
  (`01`, `03`, `04`, `06`, `07`, `16`, `19`, `25`, `26`). Não mexer.
- **Ainda do Instagram:** a foto do hero (`hero-unhas.webp` e `.jpg`), o retrato de "Quem
  cuida de você" (`silvana-salao.webp`) e o avatar da barra (`logo-perfil.jpg`, 150 px).
- O site não tem roteador nem lugar para vídeo. `wrangler.jsonc` só serve `dist/`.

## 2. O que cada arquivo vira

Fotos vistas uma a uma em 15/11. Dimensões em pixels.

| Original | O que mostra | Destino | Arquivo final |
|---|---|---|---|
| `05` (1280×960) | Unhas vermelhas e prata no cetim rosa, deitada | **Hero** | `public/img/hero.webp` e `hero-og.jpg` |
| `21` (1240×1269) | Três mulheres de camiseta branca; legenda "Equipe" | **Quem cuida de você** | `public/img/equipe.webp` |
| `22` (719×778) | Logo em néon rosa sobre fundo escuro | **Avatar da barra** | `public/img/logo.webp` |
| `13` (900×1600) | Bronze: barriga e quadril de frente, marquinha, fundo rosa | **Início** e página do Bronze | `public/img/bronze-frente.webp` |
| `14` (900×1600) | Bronze: costas com a marquinha, fundo rosa, tatuagem grande | **Início** e página do Bronze | `public/img/bronze-costas.webp` |
| `10` (1200×1600) | Bronze: colo com a marquinha, parede de folhagem | Página do Bronze | `public/img/bronze-colo.webp` |
| `11` (900×1600) | Bronze na cabine de luz azul (close de corpo) | Página do Bronze | `public/img/bronze-cabine-1.webp` |
| `12` (900×1600) | Bronze na cabine de luz azul (close de corpo) | Página do Bronze | `public/img/bronze-cabine-2.webp` |
| `09-video` (576×1024, 0:17) | Bronze: marquinha e retirada da fita; marca do CapCut | Página do Bronze | `public/video/bronze.mp4` e `public/img/bronze-video.webp` |

**Não entram agora** (ficam em `levantamento/whatsapp/`):

- `02`, `08`, `17`, `24`: repetem o que a galeria já mostra. Reserva.
- `23` (noiva): rosto inteiro de cliente e serviço que não está no cardápio.
- `15-video` (cabelo, 0:59, 464×832): bom material, mas a página inicial continua sem
  vídeo. Fica como pendência.
- `18-video` e `20-video`: são gravações de tela do Instagram, com a interface por cima.
  O `18` mostra o rosto de uma mulher; o `20` tem só 4 s de bronze em baixa resolução.

## 3. Preparar as imagens e o vídeo

Mesma receita da galeria: recorte no arquivo (não no CSS), WebP qualidade 78, sem
ampliar. O Pillow está instalado no Python 3.12 do usuário (`python -I` não o enxerga).
Conferir cada recorte olhando o arquivo gerado.

- **`hero.webp`:** a foto inteira (4:3), 1280 px de largura. A marca d'água do canto fica:
  cortá-la tiraria parte da mão. `hero-og.jpg`: recorte de 1200×630 centrado nas unhas.
- **`equipe.webp`:** quadrado (1:1), 1200 px, sem cortar nenhum rosto.
- **`logo.webp`:** quadrado centrado no anel, 192×192.
- **Bronze da página inicial (`13` e `14`):** 4:5, pegando a **parte de cima** da foto,
  onde está a marquinha: no `13`, da cintura até a linha do quadril; no `14`, das costas
  até a linha da cintura. O recorte do `14` deve deixar de fora o máximo possível da
  tatuagem grande (ela identifica a cliente).
- **Demais fotos de bronze:** 4:5, com a marquinha no centro.
- **Vídeo:** só os primeiros 9,9 s (depois disso a tela fica preta até o fim), **sem a
  faixa de áudio**, sem os 40 px de cima (marca do CapCut), H.264 com `+faststart`, até
  1 MB. O `bronze-video.webp` é um quadro nítido do próprio vídeo, para servir de capa.
- **Arquivar as antigas:** mover `hero-unhas.webp`, `hero-unhas.jpg`, `silvana-salao.webp`
  e `logo-perfil.jpg` de `public/img` para `levantamento/fotos-antigas/`.

## 4. Página inicial

### 4.1 Hero
- Troca a foto por `hero.webp`. A foto nova é deitada e rosa-claro, então:
  - **Celular:** a barra do menu passa a ter fundo `fundo` sólido desde o topo, e a foto
    começa **abaixo** dela (hoje a barra fica por cima da parte preta da foto antiga; por
    cima do cetim rosa ela ficaria ilegível). A foto ocupa a largura toda, em 4:3.
  - **Computador:** a coluna da foto passa de 4:5 para 4:3.
- Continua valendo o critério: em 360×640, foto, título e botão cheio aparecem sem rolar.
- `index.html`: `og:image` passa a `/img/hero-og.jpg`.

### 4.2 Barra
- O avatar passa a `logo.webp`.

### 4.3 Quem cuida de você
- Sai o retrato em arco; entra `equipe.webp` em **1:1, raio de 16 px**, largura total até
  360 px, centralizada. O arco não comporta três rostos; com isso ele deixa de existir no
  site (atualizar a seção 5 de `direcao-visual.md`).
- `alt`: "Equipe do SR Espaço da Beleza". **Não dar nome a ninguém:** não se sabe quem é
  quem na foto.
- O texto da seção não muda.

### 4.4 Faixa do Bronze (nova)
- Fica **entre Resultados e Serviços**, com `id="bronze"` e fundo `superficie`.
- Conteúdo, de cima para baixo: rótulo `Bronze`; título `Marquinha <em>no ponto</em>`
  (tirado da frase que já está em `servicos.ts`); as **duas fotos lado a lado**
  (`bronze-frente` e `bronze-costas`, 4:5, raio 16, 12 px entre elas); botão de
  **contorno**, largura total, `Ver o bronze`, que leva a `/bronze/`.
- Sem cursiva (a página inicial já tem as 3) e sem botão cheio.
- No cartão Bronze de Serviços, acrescentar o link `Ver fotos do bronze` para `/bronze/`,
  ao lado de "Agendar bronze".

## 5. Página do Bronze

### 5.1 Como fazer
- Segunda página estática, **sem roteador**: `bronze/index.html` na raiz, com sua entrada
  (`src/bronze.tsx`) e seu componente (`src/paginas/Bronze.tsx`). Em `vite.config.ts`,
  declarar as duas entradas em `build.rollupOptions.input`.
- Endereço: `/bronze/`. Conferir que o build gera `dist/bronze/index.html`.
- Usa o mesmo `index.css`, os mesmos tokens, as 9 classes de texto, os 3 tipos de botão e o
  `Rodape`. Não usa o `Nav` da página inicial (ele depende das âncoras de lá).
- `bronze/index.html` com `title`, `description` e `og:image` próprios
  (`/img/bronze-frente.webp`), `theme-color` igual ao da página inicial.
- O texto vem de `servicos.ts` (frase e técnicas do cartão Bronze), sem duplicar nem
  inventar. Preço não aparece.

### 5.2 Conteúdo (celular primeiro)
1. **Barra simples** (64 px, fundo `fundo`): link `← Início` para `/`, avatar, botão de
   contorno `Agendar`.
2. **Cabeçalho:** rótulo `Serviço`; título `Bronze`; cursiva `ativando a marquinha`
   (frase literal do perfil; única cursiva da página); a frase do cartão em `.corpo`;
   **botão cheio** de largura total `Agendar no WhatsApp`.
3. **"O resultado":** `bronze-frente`, `bronze-costas` e `bronze-colo`, em grade de 2
   colunas, 4:5, raio 16, 12 px de espaço. A terceira foto ocupa as duas colunas.
4. **"Na cabine":** `bronze-cabine-1` e `bronze-cabine-2` lado a lado e, abaixo, o
   **vídeo** em largura total (9:16, raio 16).
5. **Técnicas:** faixa `superficie` com a lista do cartão (divisória `linha`).
6. **Fecho:** botão de contorno `Agendar bronze`, link `← Voltar ao início` e o `Rodape`.

### 5.3 Vídeo
- `<video>` com `controls`, `playsInline`, `muted`, `preload="none"` e `poster`. **Não
  toca sozinho e não repete.** Só carrega quando a pessoa aperta.
- `aria-label` descrevendo o que o vídeo mostra.

## 6. Cuidados

- **Autorização das clientes.** As fotos e o vídeo de bronze são de corpo de cliente; a
  tatuagem do `14` identifica a pessoa. Foram mandadas pela dona para o site, mas a
  autorização das clientes não está registrada. Entra como pendência em
  `CONTEUDO-PENDENTE.md`, junto com: quem é quem na foto da equipe, e se a Silvana está
  nela.
- **Página inicial discreta.** Lá ficam só os dois recortes de fundo rosa (`13` e `14`).
  Os closes da cabine (`11` e `12`) só aparecem na página do Bronze.
- **Nada inventado:** nenhum preço, técnica ou promessa que não esteja em `servicos.ts` ou
  em `instagram.md`.
- **Nitidez:** nenhuma foto exibida maior que a metade da largura real do arquivo.

## 7. Etapas (um commit e um push por etapa, com `npm run build` passando)

1. **Arquivos:** gerar as imagens e o vídeo da seção 3 e arquivar as antigas.
2. **Hero, barra e `og:image`** (4.1 e 4.2).
3. **Quem cuida de você** com a foto da equipe (4.3).
4. **Página do Bronze** (seção 5).
5. **Faixa do Bronze na página inicial** e link no cartão (4.4).
6. **Documentação:** `CLAUDE.md` (duas páginas estáticas, sem roteador; onde fica a
   página do Bronze), `CONTEXTO.md`, `CONTEUDO-PENDENTE.md`, `duvidas.md` e a regra do
   arco em `direcao-visual.md`.

Onde este plano for ambíguo, vale a opção mais simples, anotada em `duvidas.md`.

## 8. Conferência final

Em 375×812 e 360×640, nas duas páginas:

- [ ] `public/img` não tem mais `hero-unhas.*`, `silvana-salao.webp` nem
      `logo-perfil.jpg`, e nada em `src/` ou nos `.html` aponta para eles.
- [ ] Página inicial com **exatamente 2** fotos de bronze; os closes da cabine só em
      `/bronze/`.
- [ ] Hero em 360×640: foto, título e botão cheio visíveis sem rolar; barra legível.
- [ ] `/bronze/` abre no preview e existe `dist/bronze/index.html` depois do build.
- [ ] `← Início` e `Ver o bronze` funcionam nos dois sentidos.
- [ ] O vídeo não toca sozinho, não tem faixa de áudio e pesa até 1 MB.
- [ ] O script de medição da seção 12 de `direcao-visual.md` continua passando nas duas
      páginas: até 9 estilos de texto, só os 6 fundos da paleta, bordas só `linha` e
      `rosa`.
- [ ] No máximo um botão cheio por tela e uma cursiva na página do Bronze.
- [ ] Página inicial com até 8,5 telas em 375×812.
- [ ] `npm run build` passa e o preview não mostra erro de console.
