import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {
  readonly email = signal('jgustavoscosta@gmail.com');
  readonly githubUsername = signal('JeanGust4');
  readonly githubUrl = signal('https://github.com/JeanGust4');
  readonly localizacao = signal('Fortaleza - CE');
  readonly telefone = signal('(85) 9 9291-6033');
  readonly whatsappUrl = signal('https://wa.me/5585992916033');

  readonly copiado = signal(false);

  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);
      setTimeout(() => this.copiado.set(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  }
}
