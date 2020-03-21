import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCompletedModalComponent } from './challenge-completed-modal.component';

describe('ChallengeCompletedModalComponent', () => {
  let component: ChallengeCompletedModalComponent;
  let fixture: ComponentFixture<ChallengeCompletedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCompletedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCompletedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
