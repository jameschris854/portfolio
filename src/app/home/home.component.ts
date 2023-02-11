import { Router } from '@angular/router';
// @ts-nocheck
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GsapUtils } from 'src/utils/gsapUtils/gsap-utils';
import { StoreService } from '../store.service';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(public store: StoreService, private router :Router) {
  }

  ngOnInit(): void {
    ScrollTrigger.refresh(true)
  }

  ngAfterViewInit() {
    gsap.set('.app-container',{autoAlpha: 0,marginTop:250,top:250})
      gsap.set('.app-container-wrapper',{overflowY:'hidden'})
      gsap.to('.app-container',{autoAlpha: 1,duration:0.7,marginTop:0,top:0,delay:0.6})
      gsap.to('.app-container-wrapper',{duration: 0.5,overflowY:'auto',delay:1.6}).eventCallback("onComplete",() => {
        GsapUtils.splitText('.big-text-loop-container',"char")
        const bigTextloopTl = GsapUtils.horizontalLoop(gsap.utils.toArray('.big-text-loop-container > span'),{paused:true,repeat:-1})
        bigTextloopTl.play(-0.5)
        let resetTimer : any
        const reset = (direction:string,fn:() => void) => {
          fn()
          resetTimer = setTimeout((fn) => {
            bigTextloopTl.timeScale(1.0)[direction]()
          },250)
        }
        gsap.to(".big-text-loop-container",{
          scrollTrigger:{
            start:'top top',
            end:'+=100%',
            scrub:true,
            onUpdate:(e) => {
              clearTimeout(resetTimer)
              if(e.direction > 0){
                bigTextloopTl.timeScale(3.0)
                reset("play",() => bigTextloopTl.play())
              }else{
                bigTextloopTl.timeScale(3.0)
                reset("reverse",() => bigTextloopTl.reverse())
              }
            },
          }
        })
      })
  }

}
