import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtestsComponent } from './addtests.component';

describe('AddtestsComponent', () => {
  let component: AddtestsComponent;
  let fixture: ComponentFixture<AddtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
