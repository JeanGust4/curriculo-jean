import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly nome = signal('Jean Gustavo');
  readonly papel = signal('Fullstack Developer · Estudante UniAteneu');
  readonly bio = signal('Desenvolvedor focado em soluções robustas de software, aplicações web reativas e projetos com impacto como o GeoMentor (Geologia & Tecnologia).');
  readonly avatarUrl = signal('/foto-jean.jpeg');
}
