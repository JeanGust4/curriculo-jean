import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Skill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  readonly filtroAtivo = signal<string>('Todos');

  readonly skills = signal<Skill[]>([
    { nome: 'Angular 22', categoria: 'Frontend', icone: '🅰️' },
    { nome: 'TypeScript', categoria: 'Frontend', icone: '🔷' },
    { nome: 'SCSS / CSS Moderno', categoria: 'Frontend', icone: '🎨' },
    { nome: 'HTML5 Semântico', categoria: 'Frontend', icone: '🌐' },
    { nome: 'RxJS & Signals', categoria: 'Frontend', icone: '⚡' },
    { nome: 'Node.js', categoria: 'Backend', icone: '🟢' },
    { nome: 'NestJS', categoria: 'Backend', icone: '🦁' },
    { nome: 'APIs RESTful', categoria: 'Backend', icone: '🔌' },
    { nome: 'PostgreSQL', categoria: 'Backend', icone: '🐘' },
    { nome: 'Git & GitHub', categoria: 'Ferramentas', icone: '🐙' },
    { nome: 'Docker', categoria: 'Ferramentas', icone: '🐳' },
    { nome: 'Linux / Shell', categoria: 'Ferramentas', icone: '🐧' },
    { nome: 'Comunicação Técnica', categoria: 'Soft Skills', icone: '💬' },
    { nome: 'Trabalho em Squad', categoria: 'Soft Skills', icone: '🤝' },
    { nome: 'Resolução de Problemas', categoria: 'Soft Skills', icone: '🎯' },
  ]);

  readonly categorias = computed(() => {
    const cats = Array.from(new Set(this.skills().map(s => s.categoria)));
    return ['Todos', ...cats];
  });

  readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.skills();
    }
    return this.skills().filter(s => s.categoria === filtro);
  });

  setFiltro(categoria: string): void {
    this.filtroAtivo.set(categoria);
  }
}
