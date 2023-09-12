import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesSucreComponent } from './instituciones-sucre.component';

describe('InstitucionesSucreComponent', () => {
  let component: InstitucionesSucreComponent;
  let fixture: ComponentFixture<InstitucionesSucreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionesSucreComponent]
    });
    fixture = TestBed.createComponent(InstitucionesSucreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
