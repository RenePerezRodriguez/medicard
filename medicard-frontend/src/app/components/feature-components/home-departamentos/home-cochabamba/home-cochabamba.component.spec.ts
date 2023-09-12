import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCochabambaComponent } from './home-cochabamba.component';

describe('HomeCochabambaComponent', () => {
  let component: HomeCochabambaComponent;
  let fixture: ComponentFixture<HomeCochabambaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCochabambaComponent]
    });
    fixture = TestBed.createComponent(HomeCochabambaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
