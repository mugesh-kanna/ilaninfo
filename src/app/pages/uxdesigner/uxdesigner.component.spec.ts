import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxdesignerComponent } from './uxdesigner.component';

describe('UxdesignerComponent', () => {
  let component: UxdesignerComponent;
  let fixture: ComponentFixture<UxdesignerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UxdesignerComponent]
    });
    fixture = TestBed.createComponent(UxdesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
