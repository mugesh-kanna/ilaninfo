import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishcommunicationComponent } from './englishcommunication.component';

describe('EnglishcommunicationComponent', () => {
  let component: EnglishcommunicationComponent;
  let fixture: ComponentFixture<EnglishcommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishcommunicationComponent]
    });
    fixture = TestBed.createComponent(EnglishcommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
