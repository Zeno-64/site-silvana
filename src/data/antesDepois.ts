// Pares de fotos "antes / depois". Enquanto a lista estiver vazia, a seção
// não aparece no site. Para publicar um caso, coloque as duas fotos em
// public/img/antes-depois/ (mesmo enquadramento!) e adicione aqui:
//
//   { servico: 'Sobrancelhas', antes: '/img/antes-depois/sobrancelha-1-antes.jpg',
//     depois: '/img/antes-depois/sobrancelha-1-depois.jpg', legenda: 'Design + henna' }
export type CasoAntesDepois = {
  servico: string
  antes: string
  depois: string
  legenda: string
}

export const antesDepois: CasoAntesDepois[] = []
