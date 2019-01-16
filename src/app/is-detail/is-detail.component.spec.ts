import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsDetailComponent } from './is-detail.component';

describe('IsDetailComponent', () => {
  let component: IsDetailComponent;
  let fixture: ComponentFixture<IsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
