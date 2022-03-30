import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTempDrivenComponent } from './form-temp-driven.component';

describe('FormTempDrivenComponent', () => {
  let component: FormTempDrivenComponent;
  let fixture: ComponentFixture<FormTempDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTempDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTempDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
