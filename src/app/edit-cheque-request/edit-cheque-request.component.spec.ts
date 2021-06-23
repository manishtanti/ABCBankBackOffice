import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChequeRequestComponent } from './edit-cheque-request.component';

describe('EditChequeRequestComponent', () => {
  let component: EditChequeRequestComponent;
  let fixture: ComponentFixture<EditChequeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChequeRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChequeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
