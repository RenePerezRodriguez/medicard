import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCochabambaComponent } from './menu-cochabamba.component';

describe('MenuCochabambaComponent', () => {
  let component: MenuCochabambaComponent;
  let fixture: ComponentFixture<MenuCochabambaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCochabambaComponent]
    });
    fixture = TestBed.createComponent(MenuCochabambaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
