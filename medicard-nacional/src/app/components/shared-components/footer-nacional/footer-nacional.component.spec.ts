import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNacionalComponent } from './footer-nacional.component';

describe('FooterNacionalComponent', () => {
  let component: FooterNacionalComponent;
  let fixture: ComponentFixture<FooterNacionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterNacionalComponent]
    });
    fixture = TestBed.createComponent(FooterNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
