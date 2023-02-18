import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { WorkPage } from './work-page.constants';

@Injectable({
  providedIn: 'root'
})
export class WorkPageService {

  projectList = WorkPage.ProjectsConstant;
  hoveredProject: typeof WorkPage.ProjectsConstant[0] | undefined;
  hoveredProjectSubject: Subject<typeof this.hoveredProject> = new Subject();
  layout : 'grid' | 'list' = "grid";
  
  constructor() { 
    this.hoveredProjectSubject.subscribe((e) => {
      this.hoveredProject = e;
    })
  }

  setHoveredProject = (project:typeof WorkPage.ProjectsConstant[0] | undefined) => {
    this.hoveredProjectSubject.next(project)
  }
}
