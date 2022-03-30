import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodyrightComponent } from './codyright.component';

describe('CodyrightComponent', () => {
  let component: CodyrightComponent;
  let fixture: ComponentFixture<CodyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
