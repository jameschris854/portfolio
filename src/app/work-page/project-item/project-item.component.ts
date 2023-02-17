import { Component, Input, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Observer,ScrollTrigger);

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() item!: any

  constructor() { 
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
}
