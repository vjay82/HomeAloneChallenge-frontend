import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevardTreePageComponent } from './revard-tree-page.component';

describe('RevardTreePageComponent', () => {
  let component: RevardTreePageComponent;
  let fixture: ComponentFixture<RevardTreePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevardTreePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevardTreePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
