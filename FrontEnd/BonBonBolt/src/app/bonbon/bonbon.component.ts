import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonbonBrandsComponent } from '../bonbon-brands/bonbon-brands.component';
import { BonbonBrands } from '../bonbon-brands';

@Component({
  selector: 'app-bonbon',
  standalone: true,
  imports: [BonbonBrandsComponent, CommonModule],
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
  bonbonBrandsList: BonbonBrands[]=[
    {
      "id":1,
      "name": "Echten Reber Mozart-Kugeln",
      "brand": "Reber",
      "ingredients": "mogyoró praliné, pisztácia marcipán, mandula marcipán, tejcsokoládá, étcsokoládé",
      "history": "A márka története 1865-ben kezdődött amikor Peter Reber megnyitotta első cukrászda-kávézóját Münchenben. 73 év folyamatos működés után 1938-ban költözött át a kávézó Bad Reichenhall-ba, ahol a cég székhelye ma is található. A cég vezetését azóta a család ötödik generációja látja el és valamennyi Reber csokoládé hagyományos családi receptek alapján készül, így az eredeti Reber Mozart Kugel, több mint 100 éve változatlan.",
      "photo": "/assets/reber.jpg",
      "rate": 4.7
    },
    {
      "id":2,
      "name": "Mirabell Mozart-Kugeln",
      "brand": "Mirabell",
      "ingredients": "világos nugátkrém, sötét nugátkrém, marcipán, étcsokoládé",
      "history": "A Mirabell az egyik leghíresebb osztrák márka, amely nagy hagyományokra tekint vissza. Az igazi Mozart golyókat még mindig az eredeti recept szerint gyártják. A Grödigben található gyárban (Mozart szülővárosának, Salzburgnak külvárosában) 14 lépés és körülbelül 2,5 óra gyártás szükséges minden golyó legyártásához.",
      "photo": "/assets/mirabell.jpg",
      "rate": 3.9
    }
  ];
}