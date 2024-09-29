import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonbonComponent } from './bonbon/bonbon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BonbonComponent],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.jpg" alt="logo" aria-hidden="true">
      <h1>Bon-Bon-Bolt</h1>
    </header>
    <section class="content">
      <app-bonbon></app-bonbon>
    </section>
    
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bon-Bon-Bolt';
}
