import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointyHandlesComponent } from './appointy-handles.component';

describe('AppointyHandlesComponent', () => {
  let component: AppointyHandlesComponent;
  let fixture: ComponentFixture<AppointyHandlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointyHandlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointyHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
