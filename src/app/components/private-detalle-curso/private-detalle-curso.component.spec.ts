import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDetalleCursoComponent } from './private-detalle-curso.component';

describe('PrivateDetalleCursoComponent', () => {
  let component: PrivateDetalleCursoComponent;
  let fixture: ComponentFixture<PrivateDetalleCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateDetalleCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDetalleCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
