// Galeria: fotos que a Silvana mandou pelo WhatsApp em 14/11/2026 (originais em
// levantamento/whatsapp/, fora do git), recortadas em 4:5 já sem a marca d'água do canto,
// menos nos dois cabelos (a marca fica sobre a capa e cortar tiraria as pontas).
// Etiqueta só com o que dá para afirmar: ela não disse a técnica de nenhuma foto.
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

// Abre e fecha com cetim rosa; unhas alternam com os outros serviços.
export const resultados: Resultado[] = [
  { foto: '/img/unhas-azul-dourado.webp', alt: 'Unhas amendoadas em nude com azul royal, francesinha branca e folha dourada, sobre cetim rosa', largura: 819, altura: 1024 },
  { foto: '/img/cabelo-liso-preto.webp', alt: 'Cabelo preto longo e liso, visto de costas, com capa rosa', largura: 1086, altura: 1358 },
  { foto: '/img/cilios.webp', alt: 'Cílios volumosos, em close do olho', largura: 746, altura: 932 },
  { foto: '/img/unhas-preto-nude.webp', alt: 'Unhas amendoadas em preto e nude com filete dourado, sobre cetim rosa', largura: 800, altura: 1000 },
  { foto: '/img/trancas.webp', alt: 'Tranças rente à cabeça, uma delas com fita prateada trançada', largura: 823, altura: 1029 },
  { foto: '/img/sobrancelha.webp', alt: 'Sobrancelha desenhada, vista de lado, com o olho fechado', largura: 774, altura: 968 },
  { foto: '/img/cabelo-loiro.webp', alt: 'Cabelo loiro longo e liso, visto de costas, com capa rosa', largura: 1086, altura: 1358 },
  { foto: '/img/unhas-francesinha-rosa.webp', alt: 'Unhas quadradas com francesinha rosa, sobre cetim rosa', largura: 731, altura: 914 },
  { foto: '/img/unhas-francesinha-branca.webp', alt: 'Unhas quadradas longas com francesinha branca, sobre cetim rosa', largura: 819, altura: 1024 },
]
