// Depoimentos de clientes (prints da aba "Avaliações" do Instagram).
// Enquanto a lista estiver vazia, a faixa de depoimentos não aparece.
// Só publicar com autorização da cliente.
export type Depoimento = { nome: string; servico: string; texto: string }

export const depoimentos: Depoimento[] = []
