import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesOruroComponent } from './instituciones-oruro.component';

describe('InstitucionesOruroComponent', () => {
  let component: InstitucionesOruroComponent;
  let fixture: ComponentFixture<InstitucionesOruroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionesOruroComponent]
    });
    fixture = TestBed.createComponent(InstitucionesOruroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
