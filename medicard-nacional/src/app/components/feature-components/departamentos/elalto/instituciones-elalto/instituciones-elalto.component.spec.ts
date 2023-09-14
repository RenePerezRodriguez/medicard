import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesElaltoComponent } from './instituciones-elalto.component';

describe('InstitucionesElaltoComponent', () => {
  let component: InstitucionesElaltoComponent;
  let fixture: ComponentFixture<InstitucionesElaltoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionesElaltoComponent]
    });
    fixture = TestBed.createComponent(InstitucionesElaltoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
