import { Component, signal } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { ContatoComponent } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, SkillsComponent, ExperienciaComponent, ContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('curriculo-jean');
}
