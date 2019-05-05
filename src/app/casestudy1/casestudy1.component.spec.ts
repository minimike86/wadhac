import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Casestudy1Component } from './casestudy1.component';

describe('Casestudy1Component', () => {
  let component: Casestudy1Component;
  let fixture: ComponentFixture<Casestudy1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Casestudy1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Casestudy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
