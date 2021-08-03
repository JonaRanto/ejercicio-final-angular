import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateEditarPerfilComponent } from './private-editar-perfil.component';

describe('PrivateEditarPerfilComponent', () => {
  let component: PrivateEditarPerfilComponent;
  let fixture: ComponentFixture<PrivateEditarPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateEditarPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateEditarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
