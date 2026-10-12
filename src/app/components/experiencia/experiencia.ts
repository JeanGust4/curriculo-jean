import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  readonly experiencias = signal<Experiencia[]>([
    {
      id: 1,
      periodo: 'Projeto Autoral',
      titulo: 'GeoMentor',
      organizacao: 'GitHub / Código Aberto',
      descricao:
        'Projeto autoral desenvolvido com foco no ensino, mentoria e disseminação de conhecimentos em Geologia e Geociências, integrando tecnologia moderna, interface interativa e ferramentas educacionais.',
      tipo: 'projeto',
      destaque: true,
      link: 'https://github.com/JeanGust4',
      tecnologias: ['Geociências & Geologia', 'TypeScript', 'Web SPA', 'Git & GitHub'],
    },
    {
      id: 2,
      periodo: 'Em andamento',
      titulo: 'Graduação em Tecnologia',
      organizacao: 'UniAteneu',
      descricao:
        'Formação acadêmica com ênfase em computação aplicada, modelagem de sistemas, algoritmos, arquitetura de software e governança de tecnologia.',
      tipo: 'formacao',
      tecnologias: ['Engenharia de Software', 'Estruturas de Dados', 'Bancos de Dados'],
    },
    {
      id: 3,
      periodo: 'Prática Ativa',
      titulo: 'Desenvolvimento Web Fullstack',
      organizacao: 'Projetos Práticos & Aprendizado Contínuo',
      descricao:
        'Criação de interfaces reativas em Angular moderno com foco em performance e componentização, além de serviços e integrações de back-end.',
      tipo: 'trabalho',
      tecnologias: ['Angular 22', 'TypeScript', 'Node.js', 'SCSS Moderno'],
    },
  ]);
}
