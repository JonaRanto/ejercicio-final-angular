import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCursosComponent } from './private-cursos.component';

describe('PrivateCursosComponent', () => {
  let component: PrivateCursosComponent;
  let fixture: ComponentFixture<PrivateCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
