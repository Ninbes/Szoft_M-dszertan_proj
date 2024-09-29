import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonbonBrandsComponent } from '../bonbon-brands/bonbon-brands.component';
import { BonbonBrands } from '../bonbon-brands';
import { BonbonService } from '../bonbon.service';

@Component({
  selector: 'app-bonbon',
  standalone: true,
  imports: [CommonModule, BonbonBrandsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Írjon ide egy márkát" #filter>
        <button class="primary" type="button" >Keres</button>
      </form>
    </section>
    <section class="results">
    <app-bonbon-brands *ngFor="let bonbonBrands of bonbonBrandsList" [bonbonBrands]="bonbonBrands"></app-bonbon-brands>
    </section>
  `,
  styleUrl: './bonbon.component.css'
})
export class BonbonComponent {
  bonbonBrandsList: BonbonBrands[]=[];
  bonbonService: BonbonService=inject(BonbonService);
  constructor(){
    this.bonbonBrandsList=this.bonbonService.getAllBonbonBrands();
  }
}
