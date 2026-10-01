import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FattureForm } from './fatture-form';

describe('FattureForm', () => {
  let component: FattureForm;
  let fixture: ComponentFixture<FattureForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FattureForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FattureForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
