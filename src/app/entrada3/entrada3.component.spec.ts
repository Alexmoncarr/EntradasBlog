import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrada3Component } from './entrada3.component';

describe('Entrada3Component', () => {
  let component: Entrada3Component;
  let fixture: ComponentFixture<Entrada3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Entrada3Component]
    });
    fixture = TestBed.createComponent(Entrada3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
