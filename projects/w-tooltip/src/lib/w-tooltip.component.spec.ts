import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WTooltipComponent } from './w-tooltip.component';

describe('WTooltipComponent', () => {
  let component: WTooltipComponent;
  let fixture: ComponentFixture<WTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
