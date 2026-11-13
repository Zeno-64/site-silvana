// Cursos da Silvana (fontes: certificados, arte de 13/04/2025 e destaques do Instagram).
// Datas e valores não existem no Instagram: não escrever nada sobre eles.
// `foto` é opcional: só preencher com autorização das alunas (ver CONTEUDO-PENDENTE.md).
export type Curso = {
  id: string
  titulo: string
  script: string
  linhas: string[]
  bg: string
  foto?: string
  alt?: string
}

export const cursos: Curso[] = [
  {
    id: 'unhas',
    titulo: 'Unhas',
    script: 'nail design',
    linhas: [
      'Alongamento em fibra de vidro e molde F1',
      'Do básico ao avançado',
      '8 horas de aula',
      'Certificado',
    ],
    bg: '#3a1c25',
  },
  {
    id: 'cilios',
    titulo: 'Cílios',
    script: 'lash design',
    linhas: [
      'Extensão de cílios: fio a fio, brasileiro e híbrido',
      'Aula 90% prática, com modelo',
      '8 horas de aula',
      'Certificado',
    ],
    bg: '#2a1626',
  },
]
