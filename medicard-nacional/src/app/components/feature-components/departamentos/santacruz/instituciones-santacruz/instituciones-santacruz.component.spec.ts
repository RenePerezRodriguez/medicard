import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesSantacruzComponent } from './instituciones-santacruz.component';

describe('InstitucionesSantacruzComponent', () => {
  let component: InstitucionesSantacruzComponent;
  let fixture: ComponentFixture<InstitucionesSantacruzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitucionesSantacruzComponent]
    });
    fixture = TestBed.createComponent(InstitucionesSantacruzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
