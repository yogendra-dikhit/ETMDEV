import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdispComponent } from './projectdisp.component';

describe('ProjectdispComponent', () => {
  let component: ProjectdispComponent;
  let fixture: ComponentFixture<ProjectdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
