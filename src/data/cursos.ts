// Cursos da Silvana (fontes: certificados, arte de 13/04/2025 e destaques do Instagram).
// Datas e valores não existem no Instagram: não escrever nada sobre eles.
// `foto` é opcional: só preencher com autorização das alunas (ver CONTEUDO-PENDENTE.md).
export type Curso = {
  id: string
  /** Linha pequena acima do título (ex.: "Nail design"). */
  rotulo: string
  titulo: string
  linhas: string[]
  foto?: string
  alt?: string
}

export const cursos: Curso[] = [
  {
    id: 'unhas',
    rotulo: 'Nail design',
    titulo: 'Curso de unhas',
    linhas: [
      'Alongamento em fibra de vidro e molde F1',
      'Do básico ao avançado',
      '8 horas de aula',
      'Certificado',
    ],
  },
  {
    id: 'cilios',
    rotulo: 'Lash design',
    titulo: 'Curso de cílios',
    linhas: [
      'Extensão de cílios: fio a fio, brasileiro e híbrido',
      'Aula 90% prática, com modelo',
      '8 horas de aula',
      'Certificado',
    ],
  },
]
