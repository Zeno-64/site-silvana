// Cardápio de serviços: só o que o Instagram da Silvana sustenta (ver
// levantamento/direcao.md, seção 5.4). Cílios, Sobrancelhas e Tranças não têm preço:
// as tabelas que existem são assinadas por outras profissionais.
export type LinhaPreco = { nome: string; preco: string }

export type Tecnica = {
  nome: string
  /** Valor de referência, literal da tabela (só aparece com site.mostrarPrecos). */
  preco?: string
  /** Quando a técnica agrupa itens, o modo com preço abre nestas linhas. */
  linhas?: LinhaPreco[]
}

export type Servico = {
  id: string
  nome: string
  script: string
  frase: string
  tecnicas: Tecnica[]
  /** Linha extra em .corpo-pequeno, depois da lista. */
  nota?: string
  /** Cor de fundo do cartão. */
  bg: string
  /** Com valores ligados, o cartão ganha o aviso de referência. */
  temPrecos?: boolean
}

export const servicos: Servico[] = [
  {
    id: 'unhas',
    nome: 'Unhas',
    script: 'o clássico que não tem erro',
    frase:
      'Do preparo ao resultado final, cada detalhe faz diferença para um alongamento bonito, resistente e feito com cuidado.',
    tecnicas: [
      {
        nome: 'Alongamento em gel',
        linhas: [
          { nome: 'Unhas de gel', preco: 'R$ 130' },
          { nome: 'Gel na tips', preco: 'R$ 110' },
        ],
      },
      { nome: 'Alongamento em fibra', preco: 'R$ 150' },
      { nome: 'Molde F1' },
      { nome: 'Banho de gel', preco: 'R$ 90' },
      { nome: 'Blindagem de gel' },
      {
        nome: 'Manutenção',
        linhas: [
          { nome: 'Manutenção (gel)', preco: 'R$ 100' },
          { nome: 'Manutenção (fibra)', preco: 'R$ 110' },
        ],
      },
      { nome: 'Esmaltação em gel' },
      { nome: 'Postiça realista', preco: 'R$ 90' },
    ],
    nota: 'Homem também faz as unhas.',
    bg: '#3a1c25',
    temPrecos: true,
  },
  {
    id: 'cabelos',
    nome: 'Cabelos',
    script: 'o brilho que todas vocês merecem',
    frase: 'Fios alinhados, brilho e aquele resultado lindo.',
    tecnicas: [
      { nome: 'Corte', preco: 'R$ 40' },
      { nome: 'Escova e prancha', preco: 'a partir de R$ 40' },
      {
        nome: 'Progressiva',
        linhas: [
          { nome: 'Progressiva com formol', preco: 'a partir de R$ 120' },
          { nome: 'Progressiva sem formol', preco: 'a partir de R$ 150' },
        ],
      },
      { nome: 'Selagem', preco: 'a partir de R$ 120' },
      { nome: 'Botox', preco: 'a partir de R$ 90' },
      { nome: 'Hidratação', preco: 'a partir de R$ 45' },
      { nome: 'Reconstrução', preco: 'a partir de R$ 50' },
      { nome: 'Cronograma capilar', preco: 'a partir de R$ 250' },
      {
        nome: 'Coloração',
        linhas: [
          { nome: 'Coloração com sua tinta', preco: 'R$ 60' },
          { nome: 'Coloração com tinta do salão', preco: 'a partir de R$ 90' },
        ],
      },
      { nome: 'Luzes', preco: 'a partir de R$ 350' },
      { nome: 'Morena iluminada', preco: 'a partir de R$ 320' },
      { nome: 'Matização' },
    ],
    bg: '#2b1116',
    temPrecos: true,
  },
  {
    id: 'cilios',
    nome: 'Cílios',
    script: 'não é terapia, mas é terapêutico',
    frase: 'Extensão de cílios do natural ao marcante.',
    tecnicas: [
      { nome: 'Fio a fio' },
      { nome: 'Volume brasileiro' },
      { nome: 'Híbrido' },
      { nome: 'Extensão cola fria' },
    ],
    bg: '#2a1626',
  },
  {
    id: 'sobrancelhas',
    nome: 'Sobrancelhas',
    script: 'realçando olhares',
    frase: 'Design de sobrancelhas, com ou sem henna.',
    tecnicas: [{ nome: 'Design' }, { nome: 'Design com henna' }],
    bg: '#1f1311',
  },
  {
    id: 'bronze',
    nome: 'Bronze',
    script: 'ativando a marquinha',
    frase: 'Marquinha no ponto, com protocolo adequado para o seu tipo de pele.',
    tecnicas: [
      { nome: 'Bronzeamento natural com fita' },
      { nome: 'Bronzeamento artificial' },
      { nome: 'Tatuagem de bronze' },
    ],
    bg: '#38220f',
  },
  {
    id: 'trancas',
    nome: 'Tranças',
    script: 'com muita dedicação e amor',
    frase: 'Aqui não tem idade na linguagem do autocuidado e da autoestima.',
    tecnicas: [
      { nome: 'Trança boxeadora' },
      { nome: 'Nagô' },
      { nome: 'Nagô com desenhos' },
      { nome: 'Tiara nagô' },
    ],
    bg: '#341a10',
  },
]
