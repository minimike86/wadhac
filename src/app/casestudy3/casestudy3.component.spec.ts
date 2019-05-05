import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casestudy3Component } from './casestudy3.component';

describe('Casestudy3Component', () => {
  let component: Casestudy3Component;
  let fixture: ComponentFixture<Casestudy3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casestudy3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casestudy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
