import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSantacruzComponent } from './menu-santacruz.component';

describe('MenuSantacruzComponent', () => {
  let component: MenuSantacruzComponent;
  let fixture: ComponentFixture<MenuSantacruzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuSantacruzComponent]
    });
    fixture = TestBed.createComponent(MenuSantacruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
