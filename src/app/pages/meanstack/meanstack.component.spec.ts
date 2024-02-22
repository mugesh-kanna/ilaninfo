import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanstackComponent } from './meanstack.component';

describe('MeanstackComponent', () => {
  let component: MeanstackComponent;
  let fixture: ComponentFixture<MeanstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeanstackComponent]
    });
    fixture = TestBed.createComponent(MeanstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
