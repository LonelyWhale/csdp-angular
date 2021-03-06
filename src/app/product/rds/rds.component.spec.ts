/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RdsComponent } from './rds.component';

describe('RdsComponent', () => {
  let component: RdsComponent;
  let fixture: ComponentFixture<RdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
