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
    gsap.set('.footer-curve',{
      borderRadius:'50%',
    })
    gsap.to('.footer-curve',{
      height:'0%',
      top:0,
      scrollTrigger:{
        start:'+=-50%',
        end: "top",
        scrub:true,
        trigger:'.footer-container'
      }
    })
  }
  


}
