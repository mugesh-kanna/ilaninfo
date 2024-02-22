import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceAiComponent } from './datascience-ai.component';

describe('DatascienceAiComponent', () => {
  let component: DatascienceAiComponent;
  let fixture: ComponentFixture<DatascienceAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatascienceAiComponent]
    });
    fixture = TestBed.createComponent(DatascienceAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
