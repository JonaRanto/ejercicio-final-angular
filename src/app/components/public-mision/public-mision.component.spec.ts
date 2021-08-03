import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicMisionComponent } from './public-mision.component';

describe('PublicMisionComponent', () => {
  let component: PublicMisionComponent;
  let fixture: ComponentFixture<PublicMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicMisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
