import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLostCardReportComponent } from './edit-lost-card-report.component';

describe('EditLostCardReportComponent', () => {
  let component: EditLostCardReportComponent;
  let fixture: ComponentFixture<EditLostCardReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLostCardReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLostCardReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
