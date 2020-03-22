import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChallengesPageComponent } from './manage-challenges-page.component';

describe('ManageChallengesComponent', () => {
  let component: ManageChallengesPageComponent;
  let fixture: ComponentFixture<ManageChallengesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageChallengesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageChallengesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
