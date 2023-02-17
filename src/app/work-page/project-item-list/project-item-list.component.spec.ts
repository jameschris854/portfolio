import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectItemListComponent } from './project-item-list.component';

describe('ProjectItemListComponent', () => {
  let component: ProjectItemListComponent;
  let fixture: ComponentFixture<ProjectItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
