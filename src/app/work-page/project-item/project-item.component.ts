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

    const tl = gsap.timeline({paused:true})
    tl.fromTo('.view-button',{
      scale:0,
      duration:0.5
    },{
      scale:1,
      duration:0.2,
    })

    for(let project in projects){
      Observer.create({
        target:projects[project],
        onHover:() => {
          tl.play()
          gsap.to('html',{
            cursor:'none'
          })
        },
        onHoverEnd:() => {
          tl.reverse()
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
