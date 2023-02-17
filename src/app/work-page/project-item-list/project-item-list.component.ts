import { WorkPageService } from './../work-page.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WorkPage } from '../work-page.constants';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
gsap.registerPlugin(Observer);

@Component({
  selector: 'app-project-item-list',
  templateUrl: './project-item-list.component.html',
  styleUrls: ['./project-item-list.component.scss']
})
export class ProjectItemListComponent implements OnInit {

  @Input() item!: typeof WorkPage.ProjectsConstant[0]

  constructor(private WorkPageService :WorkPageService) { 
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init()
    },100)
  }

  init = () => {

    const projects = gsap.utils.toArray<HTMLElement>('.project-item-container')

    const tl = gsap.timeline({paused:true})
    tl.fromTo('.view-button-container',{
      scale:0,
      duration:0.5
    },{
      scale:1,
      duration:0.2,
    },'hover')


    for(let project in projects){
      Observer.create({
        target:projects[project],
        onHover:(self) => {
          console.log(self.target.classList[1],this.item.name)
          this.WorkPageService.setHoveredProject(WorkPage.ProjectsConstant.find(e => e.uid === self.target.classList[1]))
          tl.play()
          gsap.to('html',{
            cursor:'none'
          })
        },
        onHoverEnd:() => {
          // this.WorkPageService.setHoveredProject(undefined)
          tl.reverse()
          gsap.to('html',{
            cursor:'auto'
          })
        }
      })
    }
  }

}
