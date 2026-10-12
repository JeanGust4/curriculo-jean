import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  nome = signal('Jean Gustavo');
  papel = signal('Fullstack Developer · Estudante UniAteneu');
  bio = signal('Desenvolvedor focado em soluções robustas de software, aplicações web reativas e projetos com impacto como o GeoMentor (Geologia & Tecnologia).');
  avatarUrl = signal('https://api.dicebear.com/8.x/bottts-neutral/svg?seed=JeanGust4');
}
