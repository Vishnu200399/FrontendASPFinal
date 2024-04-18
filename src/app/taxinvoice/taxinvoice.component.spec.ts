import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxinvoiceComponent } from './taxinvoice.component';

describe('TaxinvoiceComponent', () => {
  let component: TaxinvoiceComponent;
  let fixture: ComponentFixture<TaxinvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxinvoiceComponent]
    });
    fixture = TestBed.createComponent(TaxinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
