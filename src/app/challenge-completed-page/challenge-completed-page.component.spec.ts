import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCompletedPageComponent } from './challenge-completed-page.component';

describe('ChallengeCompletedModalComponent', () => {
  let component: ChallengeCompletedPageComponent;
  let fixture: ComponentFixture<ChallengeCompletedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCompletedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCompletedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
