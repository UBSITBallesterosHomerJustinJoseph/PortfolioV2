import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidTerms } from './mid-terms';

describe('MidTerms', () => {
  let component: MidTerms;
  let fixture: ComponentFixture<MidTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidTerms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MidTerms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
