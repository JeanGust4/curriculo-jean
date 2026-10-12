export type SkillCategory = 'Frontend' | 'Backend' | 'Ferramentas' | 'Soft Skills';

export interface Skill {
  nome: string;
  categoria: SkillCategory;
  icone?: string;
  nivel?: string;
}
