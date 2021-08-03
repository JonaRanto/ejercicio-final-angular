import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicQuienesSomosComponent } from './public-quienes-somos.component';

describe('PublicQuienesSomosComponent', () => {
  let component: PublicQuienesSomosComponent;
  let fixture: ComponentFixture<PublicQuienesSomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicQuienesSomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicQuienesSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
