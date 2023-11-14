import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entrada2Component } from './entrada2.component';

describe('Entrada2Component', () => {
  let component: Entrada2Component;
  let fixture: ComponentFixture<Entrada2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Entrada2Component]
    });
    fixture = TestBed.createComponent(Entrada2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
