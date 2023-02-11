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
    ScrollTrigger.refresh(true)
    setTimeout(() => {
      this.init()
    },3000)
  }

  ngAfterViewInit(): void {
    
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

    // for(let project in projects){
    //   console.log(`.project-item-image.Pr${parseInt(project)+1}`)
    //   gsap.to(`.project-item-image-container.Pr${parseInt(project)+1}`,{
    //     width:'100%',
    //     duration:1,
    //     ease:"none",
    //     scrollTrigger:{
    //       trigger:`.project-item-image-container.Pr${parseInt(project)+1}`,
    //       start:'top bottom+=-300px',
    //       end:'bottom bottom',
    //       markers:true,
    //     }
    //   })

    //   gsap.to(`.project-item-image.Pr${parseInt(project)+1}`,{
    //     backgroundPositionY:0,
    //     duration:1,
    //     ease:"none",
    //     scrollTrigger:{
    //       trigger:`.project-item-image-container.Pr${parseInt(project)+1}`,
    //       start:'top bottom+=-300px',
    //       end:'bottom bottom',
    //       markers:true,
    //     }
    //   })
    // }


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
