import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonfullstackComponent } from './pythonfullstack.component';

describe('PythonfullstackComponent', () => {
  let component: PythonfullstackComponent;
  let fixture: ComponentFixture<PythonfullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PythonfullstackComponent]
    });
    fixture = TestBed.createComponent(PythonfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
