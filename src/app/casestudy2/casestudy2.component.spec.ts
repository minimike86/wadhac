import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casestudy2Component } from './casestudy2.component';

describe('Casestudy2Component', () => {
  let component: Casestudy2Component;
  let fixture: ComponentFixture<Casestudy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casestudy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casestudy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
