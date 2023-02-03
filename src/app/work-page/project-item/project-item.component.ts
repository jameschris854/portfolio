import { Component, Input, OnInit } from '@angular/core';

gsap.registerEffect(Observer)

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item!: any

  constructor() { 
    setTimeout(() => {
      this.init()
    }, 1000);
  }

  init = () => {
    const projects = gsap.utils.toArray<HTMLElement>('.project-item-container')
    for(let project in projects){
      Observer.create({
        target:projects[project],
        onHover:() => {
          gsap.to('.view-button',{
            scale:1,
            duration:0.5
          })
          gsap.to('html',{
            cursor:'none'
          })
        },
        onHoverEnd:() => {
          gsap.to('.view-button',{
            scale:0,
            duration:0.2,
          })
          gsap.to('html',{
            cursor:'auto'
          })
        }
      })
    }
  }

  ngOnInit(): void {
  }

}
