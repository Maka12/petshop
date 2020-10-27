import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReadsComponent } from './product-reads.component';

describe('ProductReadsComponent', () => {
  let component: ProductReadsComponent;
  let fixture: ComponentFixture<ProductReadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
