// Cada serviço vira um "capítulo" da rolagem: a cor do fundo troca junto (o texto
// e os destaques continuam sempre iguais: ver os papéis de tipografia em index.css).
// `itens` só traz o que aparece nos posts da Silvana; onde não há detalhe
// confirmado, a lista fica vazia (ver CONTEUDO-PENDENTE.md).
export type Capitulo = {
  id: string
  nome: string
  script: string
  frase: string
  itens: string[]
  bg: string
  foto?: string
  alt?: string
  /** object-position da foto, para enquadrar bem no arco */
  posicao?: string
}

export const capitulos: Capitulo[] = [
  {
    id: 'cabelos',
    nome: 'Cabelos',
    script: 'fios com vida',
    frase: 'Do fio à finalização: um cuidado feito com calma, para você sair se sentindo linda.',
    itens: [],
    bg: '#2b1116',
    foto: '/img/video-ago25.jpg',
    alt: 'Silvana finalizando um cabelo longo e liso com prancha e secador',
    posicao: '50% 30%',
  },
  {
    id: 'unhas',
    nome: 'Unhas',
    script: 'um cuidado a mais',
    frase: 'Unhas que combinam com você, com aquele momento de carinho que faz diferença.',
    itens: ['Compressa quente', 'Massagem nas mãos'],
    bg: '#3a1c25',
    foto: '/img/unhas-nude.jpg',
    alt: 'Mãos com unhas em amêndoa nude e francesinha sobre cetim champanhe',
    posicao: '50% 45%',
  },
  {
    id: 'cilios',
    nome: 'Cílios',
    script: 'olhar de destaque',
    frase: 'Um olhar mais marcante, delicado e no ponto certo para o seu rosto.',
    itens: [],
    bg: '#2a1626',
  },
  {
    id: 'sobrancelhas',
    nome: 'Sobrancelhas',
    script: 'mais que estética',
    frase: 'Sobrancelha é autocuidado: design impecável, num momento só seu.',
    itens: ['Massagem facial relaxante', 'Toalha morna nas mãos ou nos pés', 'Design impecável'],
    bg: '#1f1311',
    foto: '/img/sobrancelhas.jpg',
    alt: 'Sobrancelha com design impecável em close',
    posicao: '50% 55%',
  },
  {
    id: 'bronze',
    nome: 'Bronze',
    script: 'pele iluminada',
    frase: 'Bronze uniforme, pele hidratada e radiante — com direito a tatuagem de bronze.',
    itens: ['Bronze uniforme', 'Tatuagem de bronze', 'Pele hidratada e radiante'],
    bg: '#38220f',
    foto: '/img/bronze.jpg',
    alt: 'Costas com marquinha de bronze e detalhe de tatuagem de bronze',
    posicao: '50% 60%',
  },
  {
    id: 'trancas',
    nome: 'Tranças',
    script: 'arte nos fios',
    frase: 'Tranças com capricho, do visual do dia a dia ao look para brilhar.',
    itens: [],
    bg: '#341a10',
  },
]
