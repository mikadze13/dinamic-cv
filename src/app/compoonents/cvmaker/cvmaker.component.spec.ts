import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvmakerComponent } from './cvmaker.component';

describe('CvmakerComponent', () => {
  let component: CvmakerComponent;
  let fixture: ComponentFixture<CvmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvmakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
