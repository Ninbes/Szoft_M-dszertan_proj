import { Component, Input } from '@angular/core';
import { BonbonBrands } from '../bonbon-brands';
@Component({
  selector: 'app-bonbon-brands',
  standalone: true,
  imports: [],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="bonbonBrands.photo" alt="Photo of a {{bonbonBrands.brand}} Mozart Kugeln">
      <h2 class="listing-heading">{{bonbonBrands.name}}</h2>
      <p class="listing-rate">{{bonbonBrands.rate}}</p>
    </section>
  `,
  styleUrl: './bonbon-brands.component.css'
})
export class BonbonBrandsComponent {
  @Input() bonbonBrands!: BonbonBrands;
}
