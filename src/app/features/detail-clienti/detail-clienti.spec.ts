import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClienti } from './detail-clienti';

describe('DetailClienti', () => {
  let component: DetailClienti;
  let fixture: ComponentFixture<DetailClienti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailClienti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailClienti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
