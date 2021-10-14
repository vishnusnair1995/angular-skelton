import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDialogueComponent } from './business-dialogue.component';

describe('BusinessDialogueComponent', () => {
  let component: BusinessDialogueComponent;
  let fixture: ComponentFixture<BusinessDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
