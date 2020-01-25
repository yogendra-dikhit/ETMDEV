import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignModuleComponent } from './assign-module.component';

describe('AssignModuleComponent', () => {
  let component: AssignModuleComponent;
  let fixture: ComponentFixture<AssignModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
