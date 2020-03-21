import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCanceledPageComponent } from './challenge-canceled-page.component';

describe('ChallengeCanceledPageComponent', () => {
  let component: ChallengeCanceledPageComponent;
  let fixture: ComponentFixture<ChallengeCanceledPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeCanceledPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCanceledPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
