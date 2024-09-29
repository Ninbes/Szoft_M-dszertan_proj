import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonbonBrandsComponent } from './bonbon-brands.component';

describe('BonbonBrandsComponent', () => {
  let component: BonbonBrandsComponent;
  let fixture: ComponentFixture<BonbonBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonbonBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BonbonBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
