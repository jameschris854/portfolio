import { gsap } from 'gsap';
import { Component, OnInit } from '@angular/core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trigger } from '@angular/animations';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ScrollTrigger.refresh(true)
  }
  ngAfterViewInit(): void {
   
    gsap.timeline({
      scrollTrigger:{
        start:`+=-${window.innerHeight-(0.10 * window.innerHeight)}`,
        end: "top",
        scrub:true,
        trigger:'.footer-container',
      }
    }).addLabel("curve").to(".footer-curve",{
      height:'0%',
      top:0,
      stagger:0.1
    },"curve").to(".footer-content",{
      height:'100%',
      stagger:0.1
    },"curve").to(".button-container",{
      right:"20%",
      stagger:0.1
    },"curve")
   
   
    // gsap.set('.footer-curve',{
    //   borderRadius:'50%',
    // })
    // gsap.to('.footer-curve',{
    //   height:'0%',
    //   top:0,
    //   scrollTrigger:{
    //     start:'+=-50%',
    //     end: "top",
    //     scrub:true,
    //     trigger:'.footer-container'
    //   }
    // })
  }
  


}
