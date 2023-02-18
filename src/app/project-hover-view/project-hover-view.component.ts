import { Component, OnInit } from '@angular/core';
import { WorkPage } from '../work-page/work-page.constants';
import { WorkPageService } from '../work-page/work-page.service';
import { gsap } from "gsap";
import {Observer} from "gsap/Observer"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger,Observer);
@Component({
  selector: 'app-project-hover-view',
  templateUrl: './project-hover-view.component.html',
  styleUrls: ['./project-hover-view.component.scss']
})
export class ProjectHoverViewComponent implements OnInit {

  myProjects = WorkPage.ProjectsConstant;
  layoutConstant = WorkPage.Layout;
  tween: gsap.core.Tween | undefined

  constructor(public workPageService: WorkPageService) { }

  ngOnInit(): void {
    this.workPageService.hoveredProjectSubject.subscribe((data) => {
      const el = this.workPageService.projectList.find(e => e.uid === data?.uid)
      if(el){
        let index = this.workPageService.projectList.indexOf(el)
        this.tween?.kill()
        this.tween = gsap.to('.view-button-image-container',{
          y:index * -500,
          duration:0.5
        })
      }
    })
    setTimeout(() => {
      this.ViewButtoninit()
    }, 1000);
  }

  ViewButtoninit = () => {
    Observer.create({target:window,
      onMove: (e:any) => {
        if(document.querySelector('.view-button-container')?.getBoundingClientRect()){
          gsap.to('.view-button-container',{
            x:e.event.clientX - document.querySelector('.view-button-container')!.getBoundingClientRect().width/2,
            y:e.event.clientY - document.querySelector('.view-button-container')!.getBoundingClientRect().height/2,
            stagger:0.1
          })
        }
      }}
    )
  }

  get getLayoutClass(){
    return this.workPageService.layout === 'grid' ? "" : 'list'
  }
  get getViewGridButtonStyle(){
    return this.workPageService.layout === 'list' ? {display:'flex'} : {display:'none'}
  }


}
