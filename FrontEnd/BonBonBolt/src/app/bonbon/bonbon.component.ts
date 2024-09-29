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
        <button class="primary" type="button" (click)="filterResults(filter.value)">Keresés</button>
      </form>
    </section>
    <section class="results">
    <app-bonbon-brands *ngFor="let bonbonBrands of filteredBonbonBrandsList" [bonbonBrands]="bonbonBrands"></app-bonbon-brands>
    </section>
  `,
  styleUrl: './bonbon.component.css'
})
export class BonbonComponent {
  bonbonBrandsList: BonbonBrands[]=[];
  bonbonService: BonbonService=inject(BonbonService);
  filteredBonbonBrandsList:BonbonBrands[]=[];
  constructor(){
    this.bonbonService.getAllBonbonBrands().then((bonbonBrandsList: BonbonBrands[])=>{
      this.bonbonBrandsList=bonbonBrandsList;
      this.filteredBonbonBrandsList=bonbonBrandsList;
    });
  }
  filterResults(text:string){
    if(!text) this.filteredBonbonBrandsList=this.bonbonBrandsList;
    this.filteredBonbonBrandsList=this.bonbonBrandsList.filter(
      bonbonBrands => bonbonBrands?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
