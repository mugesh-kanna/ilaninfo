import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyComponent } from './tally.component';

describe('TallyComponent', () => {
  let component: TallyComponent;
  let fixture: ComponentFixture<TallyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallyComponent]
    });
    fixture = TestBed.createComponent(TallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
