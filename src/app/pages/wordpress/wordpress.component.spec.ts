import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressComponent } from './wordpress.component';

describe('WordpressComponent', () => {
  let component: WordpressComponent;
  let fixture: ComponentFixture<WordpressComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WordpressComponent]
    });
    fixture = TestBed.createComponent(WordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
