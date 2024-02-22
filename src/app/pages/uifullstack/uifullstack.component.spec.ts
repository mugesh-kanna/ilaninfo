import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UifullstackComponent } from './uifullstack.component';

describe('UifullstackComponent', () => {
  let component: UifullstackComponent;
  let fixture: ComponentFixture<UifullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UifullstackComponent]
    });
    fixture = TestBed.createComponent(UifullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
