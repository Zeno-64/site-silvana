// Galeria: fotos reais do Instagram do salão, 4:5, sem arte de post e sem repetição.
// Etiqueta só com o que dá para afirmar (as legendas originais são só emoji).
export type Resultado = {
  foto: string
  alt: string
  /** Legenda só quando diz a técnica (ex.: "Cabelos · matização"). Sem legenda, nada aparece. */
  tag?: string
  largura: number
  altura: number
  posicao?: string
  /** Zoom no cartão, para cortar o que sobra no canto (fundo bagunçado, marca d'água). */
  escala?: number
  /** `transform-origin` do zoom: de onde a foto cresce. */
  origem?: string
}

// Ordem da direção visual (seção 7): abre e fecha com cetim rosa.
export const resultados: Resultado[] = [
  { foto: '/img/unhas-preto-marmore.webp', alt: 'Unhas amendoadas em preto e marmorizado com folha dourada', largura: 1200, altura: 1600 },
  { foto: '/img/unhas-bordo.webp', alt: 'Unhas curtas em bordô sobre cetim rosé', largura: 1200, altura: 1500 },
  // A marca d'água do canto de baixo fica fora do quadro: a foto cresce a partir do canto de cima, à direita.
  { foto: '/img/unhas-brancas-ouro.webp', alt: 'Unhas amendoadas em branco leitoso com filete dourado na cutícula', largura: 1200, altura: 1500, escala: 1.16, origem: '100% 0%' },
  { foto: '/img/cabelo-matizado.webp', alt: 'Cabelo loiro matizado, liso, visto de costas', tag: 'Cabelos · matização', largura: 1200, altura: 1500, posicao: '50% 40%', escala: 1.08 },
  { foto: '/img/unhas-nude-mesa.webp', alt: 'Unhas amendoadas em nude rosado', largura: 1200, altura: 1598 },
  { foto: '/img/unhas-holograficas.webp', alt: 'Unhas longas com efeito cromado holográfico', largura: 1200, altura: 1423 },
  { foto: '/img/unhas-francesinha-strass.webp', alt: 'Unhas amendoadas com francesinha branca e pedrinhas', largura: 1200, altura: 1600 },
]
