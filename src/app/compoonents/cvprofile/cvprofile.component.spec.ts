import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvprofileComponent } from './cvprofile.component';

describe('CvprofileComponent', () => {
  let component: CvprofileComponent;
  let fixture: ComponentFixture<CvprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
