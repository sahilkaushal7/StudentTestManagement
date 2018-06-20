import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmarksComponent } from './getmarks.component';

describe('GetmarksComponent', () => {
  let component: GetmarksComponent;
  let fixture: ComponentFixture<GetmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
