import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQueryRequestComponent } from './edit-query-request.component';

describe('EditQueryRequestComponent', () => {
  let component: EditQueryRequestComponent;
  let fixture: ComponentFixture<EditQueryRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQueryRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQueryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
