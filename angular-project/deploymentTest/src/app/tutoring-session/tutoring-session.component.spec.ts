import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoringSessionComponent } from './tutoring-session.component';

describe('TutoringSessionComponent', () => {
  let component: TutoringSessionComponent;
  let fixture: ComponentFixture<TutoringSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutoringSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutoringSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
