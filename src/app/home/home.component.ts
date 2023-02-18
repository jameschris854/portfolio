import { WorkPageService } from './../work-page/work-page.service';
import { Router } from '@angular/router';
// @ts-nocheck
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GsapUtils } from 'src/utils/gsapUtils/gsap-utils';
import { StoreService } from '../store.service';
const TagCloud = require('TagCloud');

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkPage } from '../work-page/work-page.constants';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


  constructor(public store: StoreService, public WorkPageService :WorkPageService) {
    this.WorkPageService.layout = "list"
    this.WorkPageService.projectList = WorkPage.ProjectsConstant.filter((e,i) => i<=4)
  }

  ngOnInit(): void {
    ScrollTrigger.refresh(true)
  }

  ngAfterViewInit() {

    const container = '.sphere-container';

    const texts = [
      'React', 'Angular', 'JavaScript',
      'CSS3', 'HTML5', 'Node',
      'Express', 'MongoDb', 'DiscordBot',
      'REST', 'React-Native', 'Postman',
      'Jenkins', 'Integrations'
    ];
    const options = {
      radius: 200,
      itemClass: 'tag-cloud-text'
    };

    TagCloud(container, texts, options);

    gsap.set('.app-container',{autoAlpha: 0,marginTop:250,top:250})
      gsap.set('.app-container-wrapper',{overflowY:'hidden'})
      gsap.to('.app-container',{autoAlpha: 1,duration:0.7,marginTop:0,top:0,delay:0.6})
      gsap.to('.app-container-wrapper',{duration: 0.5,overflowY:'auto',delay:1.6}).eventCallback("onComplete",() => {
        gsap.to(".text-reveal",{
          duration:0.7,
          top:0
        })
        GsapUtils.splitText('.big-text-loop-container',"char")
        const bigTextloopTl = GsapUtils.horizontalLoop(gsap.utils.toArray('.big-text-loop-container > span'),{paused:true,repeat:-1})
        bigTextloopTl.play()
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
