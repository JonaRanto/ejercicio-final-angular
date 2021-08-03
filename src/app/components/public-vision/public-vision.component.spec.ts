import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicVisionComponent } from './public-vision.component';

describe('PublicVisionComponent', () => {
  let component: PublicVisionComponent;
  let fixture: ComponentFixture<PublicVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicVisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
