import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHoverViewComponent } from './project-hover-view.component';

describe('ProjectHoverViewComponent', () => {
  let component: ProjectHoverViewComponent;
  let fixture: ComponentFixture<ProjectHoverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHoverViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHoverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
