import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNacionalComponent } from './navbar-nacional.component';

describe('NavbarNacionalComponent', () => {
  let component: NavbarNacionalComponent;
  let fixture: ComponentFixture<NavbarNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarNacionalComponent]
    });
    fixture = TestBed.createComponent(NavbarNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
