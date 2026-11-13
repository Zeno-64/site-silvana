// Faixa de promoção (Black Friday), literal das artes do post DfXPnifkSN5.
// Só renderiza até `ate`; depois disso o componente devolve null sozinho.
// Lista vazia também = não renderiza.
export type ItemPromocao = { servico: string; valor: string }

export const promocao = {
  rotulo: 'Black Friday · de 10 a 20 de novembro',
  /** Fim da promoção: 20/11/2026, 23h59, horário de Brasília. */
  ate: '2026-11-20T23:59:59-03:00',
  itens: [
    { servico: 'Alongamento, primeira aplicação', valor: 'R$ 89,99' },
    { servico: 'Design de sobrancelhas com henna', valor: 'R$ 34,99' },
    { servico: 'Botox capilar', valor: 'R$ 79,90' },
    { servico: 'Progressiva', valor: 'R$ 99,99' },
    { servico: 'Extensão de cílios, cola fria', valor: 'R$ 49,90' },
    { servico: 'Bronzeamento artificial', valor: 'R$ 1,00 por minuto' },
  ] as ItemPromocao[],
}
