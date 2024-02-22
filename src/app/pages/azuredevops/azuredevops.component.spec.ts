import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuredevopsComponent } from './azuredevops.component';

describe('AzuredevopsComponent', () => {
  let component: AzuredevopsComponent;
  let fixture: ComponentFixture<AzuredevopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzuredevopsComponent]
    });
    fixture = TestBed.createComponent(AzuredevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
