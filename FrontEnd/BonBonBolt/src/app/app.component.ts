import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BonbonComponent } from './bonbon/bonbon.component';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BonbonComponent, RouterModule],
  template: `
  <main>
    <header class="brand-name">
    <a routerLink=""><img class="brand-logo" src="/assets/logo.jpg" alt="logo" aria-hidden="true"></a>
      <h1>Bon-Bon-Bolt</h1>
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    
  </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bon-Bon-Bolt';
}
