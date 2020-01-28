import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksubComponent } from './worksub.component';

describe('WorksubComponent', () => {
  let component: WorksubComponent;
  let fixture: ComponentFixture<WorksubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
