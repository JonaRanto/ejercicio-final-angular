import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMisCursosComponent } from './private-mis-cursos.component';

describe('PrivateMisCursosComponent', () => {
  let component: PrivateMisCursosComponent;
  let fixture: ComponentFixture<PrivateMisCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateMisCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMisCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
