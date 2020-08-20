import { TestBed } from '@angular/core/testing';

import { PenDialogToShopService } from './pen-dialog-to-shop.service';

describe('PenDialogToShopService', () => {
  let service: PenDialogToShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenDialogToShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
