import { Injectable } from '@angular/core';
import { BonbonBrands } from './bonbon-brands';
@Injectable({
  providedIn: 'root'
})
export class BonbonService {
  
  url='http://localhost:9090/bonbons/';

  constructor() { }

  async getAllBonbonBrands(): Promise<BonbonBrands[]> {
    const data=await fetch(this.url);
    return await data.json() ?? [];
  }
  async getBonbonBrandsById(id: Number): Promise<BonbonBrands | undefined>{
    const data=await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}