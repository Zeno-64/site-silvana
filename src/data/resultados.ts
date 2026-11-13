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
  { foto: '/img/unhas-nude-mesa.jpg', alt: 'Unhas amendoadas em nude rosado', tag: 'Unhas', largura: 1440, altura: 1918 },
  { foto: '/img/unhas-bordo.jpg', alt: 'Unhas curtas em bordô sobre cetim rosé', tag: 'Unhas', largura: 1440, altura: 1800 },
  { foto: '/img/unhas-brancas-ouro.jpg', alt: 'Unhas amendoadas em branco leitoso com filete dourado na cutícula', tag: 'Unhas', largura: 1406, altura: 1758 },
  { foto: '/img/cabelo-matizado.jpg', alt: 'Cabelo loiro matizado, liso, visto de costas', tag: 'Cabelos · matização', largura: 1440, altura: 1800, posicao: '50% 40%', escala: 1.08 },
  { foto: '/img/unhas-holograficas.jpg', alt: 'Unhas longas com efeito cromado holográfico', tag: 'Unhas', largura: 1440, altura: 1708 },
  { foto: '/img/unhas-preto-marmore.jpg', alt: 'Unhas amendoadas em preto e marmorizado com folha dourada', tag: 'Unhas', largura: 1440, altura: 1920 },
  { foto: '/img/unhas-francesinha-strass.jpg', alt: 'Unhas amendoadas com francesinha branca e pedrinhas', tag: 'Unhas', largura: 1440, altura: 1920 },
  { foto: '/img/unhas-leitosas.jpg', alt: 'Unhas curtas em branco leitoso', tag: 'Unhas', largura: 1440, altura: 1440 },
  { foto: '/img/unhas-francesinha-ouro.jpg', alt: 'Unhas quadradas com francesinha branca em V e folha dourada', tag: 'Unhas', largura: 1440, altura: 1480 },
]
