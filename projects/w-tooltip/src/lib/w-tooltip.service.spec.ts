import { TestBed } from '@angular/core/testing';

import { WTooltipService } from './w-tooltip.service';

describe('WTooltipService', () => {
  let service: WTooltipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WTooltipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
