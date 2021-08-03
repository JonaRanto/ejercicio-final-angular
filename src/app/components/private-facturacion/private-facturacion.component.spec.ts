import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateFacturacionComponent } from './private-facturacion.component';

describe('PrivateFacturacionComponent', () => {
  let component: PrivateFacturacionComponent;
  let fixture: ComponentFixture<PrivateFacturacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateFacturacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
