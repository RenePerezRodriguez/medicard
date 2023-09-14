import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesLapazComponent } from './instituciones-lapaz.component';

describe('InstitucionesLapazComponent', () => {
  let component: InstitucionesLapazComponent;
  let fixture: ComponentFixture<InstitucionesLapazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionesLapazComponent]
    });
    fixture = TestBed.createComponent(InstitucionesLapazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
