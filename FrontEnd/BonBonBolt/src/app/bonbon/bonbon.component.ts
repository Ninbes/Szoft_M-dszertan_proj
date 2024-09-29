import { Component } from '@angular/core';

@Component({
  selector: 'app-bonbon',
  standalone: true,
  imports: [],
    template: `
    <section>
      <form>
        <input type="text" placeholder="Írjon ide egy márkát" #filter>
        <button class="primary" type="button" >Keres</button>
      </form>
    </section>
    <section class="results">
    </section>
  `,
  styleUrl: './bonbon.component.css'
})
export class BonbonComponent {

}
