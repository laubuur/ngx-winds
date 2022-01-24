import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WdsCalendarComponent } from './wds-calendar.component';

describe('WdsCalendarComponent', () => {
  let component: WdsCalendarComponent;
  let fixture: ComponentFixture<WdsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WdsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WdsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
