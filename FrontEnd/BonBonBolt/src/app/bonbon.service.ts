import { Injectable } from '@angular/core';
import { BonbonBrands } from './bonbon-brands';
@Injectable({
  providedIn: 'root'
})
export class BonbonService {
  protected bonbonBrandsList: BonbonBrands[]=[
    {
      "id":1,
      "name": "Die Echte Reber Mozartkugeln",
      "brand": "Reber",
      "ingredients": "mogyoró praliné, pisztácia marcipán, mandula marcipán, tejcsokoládá, étcsokoládé",
      "history": "A márka története 1865-ben kezdődött amikor Peter Reber megnyitotta első cukrászda-kávézóját Münchenben. 73 év folyamatos működés után 1938-ban költözött át a kávézó Bad Reichenhall-ba, ahol a cég székhelye ma is található. A cég vezetését azóta a család ötödik generációja látja el és valamennyi Reber csokoládé hagyományos családi receptek alapján készül, így az eredeti Reber Mozart Kugel, több mint 100 éve változatlan.",
      "photo": "/assets/reber.jpg",
      "rate": 4.7
    },
    {
      "id":2,
      "name": "Echte Salzburger Mozartkugeln",
      "brand": "Mirabell",
      "ingredients": "világos nugátkrém, sötét nugátkrém, marcipán, étcsokoládé",
      "history": "A Mirabell az egyik leghíresebb osztrák márka, amely nagy hagyományokra tekint vissza. Az igazi Mozart golyókat még mindig az eredeti recept szerint gyártják. A Grödigben található gyárban (Mozart szülővárosának, Salzburgnak külvárosában) 14 lépés és körülbelül 2,5 óra gyártás szükséges minden golyó legyártásához. A cég megvásárolta a kizárólagos jogot a gömb alakú Mozart golyók készítésére, így az egyetlen gyártó aki tökéletes gömb alakú bonon-t készít.",
      "photo": "/assets/mirabell.jpg",
      "rate": 3.9
    }
  ];
  constructor() { }
  getAllBonbonBrands(): BonbonBrands[]{
    return this.bonbonBrandsList;
  }
  getBonbonBrandsById(id:Number): BonbonBrands | undefined{
    return this.bonbonBrandsList.find(bonbonBrands => bonbonBrands.id === id);
  }
}