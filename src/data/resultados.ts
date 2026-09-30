// Galeria horizontal: fotos reais do Instagram.
export type Resultado = { foto: string; alt: string; tag: string; posicao?: string }

export const resultados: Resultado[] = [
  { foto: '/img/unhas-nude.jpg', alt: 'Unhas amêndoa nude com francesinha', tag: 'Unhas' },
  { foto: '/img/unhas-azul.jpg', alt: 'Unhas amêndoa azul-clara perolada', tag: 'Unhas', posicao: '60% 55%' },
  { foto: '/img/bronze.jpg', alt: 'Bronze uniforme com tatuagem de bronze', tag: 'Bronze', posicao: '50% 70%' },
  { foto: '/img/unhas-a.jpg', alt: 'Unhas rosa perolado com francesinha', tag: 'Unhas' },
  { foto: '/img/sobrancelhas.jpg', alt: 'Sobrancelha com design impecável', tag: 'Sobrancelhas', posicao: '50% 60%' },
  { foto: '/img/unhas-b.jpg', alt: 'Unhas curtas com acabamento perolado', tag: 'Unhas' },
  { foto: '/img/video-ago25.jpg', alt: 'Silvana finalizando cabelo liso', tag: 'Cabelos', posicao: '50% 30%' },
]
