import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BonbonService } from '../bonbon.service';
import { BonbonBrands } from '../bonbon-brands';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
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
          <!--<div class="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>-->
        <form class=rating [formGroup]="applyForm">
          <input type="radio" id="1" name="stars" value=1>
          <label for="1"></label>
          <input type="radio" id="2" name="stars" value=2>
          <label for="2"></label>
          <input type="radio" id="3" name="stars" value=3>
          <label for="3"></label>
          <input type="radio" id="4" name="stars" value=4>
          <label for="4"></label>
          <input type="radio" id="5" name="stars" value=5>
          <label for="5"></label>
        </form>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  bonbonService=inject(BonbonService);
  bonbonBrands: BonbonBrands | undefined;
  applyForm=new FormGroup(
    {
      rate:new FormControl('')
    }
  );
  constructor(){
    const bonbonBrandsId=Number(this.route.snapshot.params['id']);
    this.bonbonService.getBonbonBrandsById(bonbonBrandsId).then(bonbonBrands =>{
      this.bonbonBrands=bonbonBrands;
    });
  }
  rateApplication(){
    this.bonbonService.rateApplication(
    Number(this.applyForm.value.rate ?? ''));
  }
}