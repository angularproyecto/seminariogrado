/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SinteticosComponent } from './sinteticos.component';

describe('SinteticosComponent', () => {
  let component: SinteticosComponent;
  let fixture: ComponentFixture<SinteticosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinteticosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinteticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
