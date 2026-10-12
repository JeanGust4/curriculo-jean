export type ExperienciaTipo = 'formacao' | 'projeto' | 'trabalho';

export interface Experiencia {
  id: number;
  periodo: string;
  titulo: string;
  organizacao: string;
  descricao: string;
  tipo: ExperienciaTipo;
  destaque?: boolean;
  link?: string;
  tecnologias?: string[];
}
