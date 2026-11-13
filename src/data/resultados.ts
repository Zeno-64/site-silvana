// Galeria: fotos reais do Instagram do salão, 4:5, sem arte de post e sem repetição.
// Etiqueta só com o que dá para afirmar (as legendas originais são só emoji).
export type Resultado = {
  foto: string
  alt: string
  tag: string
  largura: number
  altura: number
  posicao?: string
  /** Zoom leve no cartão, para cortar fundo bagunçado. */
  escala?: number
}

export const resultados: Resultado[] = [
  { foto: '/img/unhas-nude-mesa.webp', alt: 'Unhas amendoadas em nude rosado', tag: 'Unhas', largura: 1200, altura: 1598 },
  { foto: '/img/unhas-bordo.webp', alt: 'Unhas curtas em bordô sobre cetim rosé', tag: 'Unhas', largura: 1200, altura: 1500 },
  { foto: '/img/unhas-brancas-ouro.webp', alt: 'Unhas amendoadas em branco leitoso com filete dourado na cutícula', tag: 'Unhas', largura: 1200, altura: 1500 },
  { foto: '/img/cabelo-matizado.webp', alt: 'Cabelo loiro matizado, liso, visto de costas', tag: 'Cabelos · matização', largura: 1200, altura: 1500, posicao: '50% 40%', escala: 1.08 },
  { foto: '/img/unhas-holograficas.webp', alt: 'Unhas longas com efeito cromado holográfico', tag: 'Unhas', largura: 1200, altura: 1423 },
  { foto: '/img/unhas-preto-marmore.webp', alt: 'Unhas amendoadas em preto e marmorizado com folha dourada', tag: 'Unhas', largura: 1200, altura: 1600 },
  { foto: '/img/unhas-francesinha-strass.webp', alt: 'Unhas amendoadas com francesinha branca e pedrinhas', tag: 'Unhas', largura: 1200, altura: 1600 },
  { foto: '/img/unhas-leitosas.webp', alt: 'Unhas curtas em branco leitoso', tag: 'Unhas', largura: 1200, altura: 1200 },
  { foto: '/img/unhas-francesinha-ouro.webp', alt: 'Unhas quadradas com francesinha branca em V e folha dourada', tag: 'Unhas', largura: 1200, altura: 1233 },
]
