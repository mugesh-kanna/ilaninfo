import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotnetfullstackComponent } from './dotnetfullstack.component';

describe('DotnetfullstackComponent', () => {
  let component: DotnetfullstackComponent;
  let fixture: ComponentFixture<DotnetfullstackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotnetfullstackComponent]
    });
    fixture = TestBed.createComponent(DotnetfullstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
