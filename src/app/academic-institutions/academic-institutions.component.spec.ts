import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInstitutionsComponent } from './academic-institutions.component';

describe('AcademicInstitutionsComponent', () => {
  let component: AcademicInstitutionsComponent;
  let fixture: ComponentFixture<AcademicInstitutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicInstitutionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicInstitutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
