import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSantacruzComponent } from './home-santacruz.component';

describe('HomeSantacruzComponent', () => {
  let component: HomeSantacruzComponent;
  let fixture: ComponentFixture<HomeSantacruzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSantacruzComponent]
    });
    fixture = TestBed.createComponent(HomeSantacruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
