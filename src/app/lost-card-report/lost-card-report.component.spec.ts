import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostCardReportComponent } from './lost-card-report.component';

describe('LostCardReportComponent', () => {
  let component: LostCardReportComponent;
  let fixture: ComponentFixture<LostCardReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostCardReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LostCardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
