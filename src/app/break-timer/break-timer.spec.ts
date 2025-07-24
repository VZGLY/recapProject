import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakTimer } from './break-timer';

describe('BreakTimer', () => {
  let component: BreakTimer;
  let fixture: ComponentFixture<BreakTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakTimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
