import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BonbonService } from '../bonbon.service';
import { BonbonBrands } from '../bonbon-brands';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img class="listing-photo" [src]="bonbonBrands?.photo">
      <section class="listing-description">
        <h2 class="listing-heading">{{bonbonBrands?.name}}</h2>
        <p class="listing-brand">{{bonbonBrands?.brand}}</p>
      </section>
      <section class="listing-features">
        <h3 class="section-heading">A bonbonról</h3>
        <ul>
          <li>Összetevők: {{bonbonBrands?.ingredients}}</li>
          <li>Történelem: {{bonbonBrands?.history}}</li>
        </ul>
      </section>
      <section class="rating-section">
        <h3 class="rating-head">Értékeld ezt a Mozart golyót: </h3>
        <!--<div class="buttons">
          <button type="submit" class="one"></button>
          <button type="submit" class="two">2</button>
          <button type="submit" class="three">3</button>
          <button type="submit" class="four">4</button>
          <button type="submit" class="five">5</button>
          </div>-->
          <div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  bonbonService=inject(BonbonService);
  bonbonBrands: BonbonBrands | undefined;
  constructor(){
    const bonbonBrandsId=Number(this.route.snapshot.params['id']);
    this.bonbonBrands=this.bonbonService.getBonbonBrandsById(bonbonBrandsId);
  }
}