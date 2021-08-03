import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMiPerfilComponent } from './private-mi-perfil.component';

describe('PrivateMiPerfilComponent', () => {
  let component: PrivateMiPerfilComponent;
  let fixture: ComponentFixture<PrivateMiPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateMiPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMiPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
