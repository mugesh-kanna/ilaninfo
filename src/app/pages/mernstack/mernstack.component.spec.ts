import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MernstackComponent } from './mernstack.component';

describe('MernstackComponent', () => {
  let component: MernstackComponent;
  let fixture: ComponentFixture<MernstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MernstackComponent]
    });
    fixture = TestBed.createComponent(MernstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
