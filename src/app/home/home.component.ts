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
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

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

    this.initBigText()

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
    this.store.pageTransitionChange.subscribe((value) => {
      if(value === "mid"){
        this.init()
      }
    })
  }

  init = () => {
    gsap.fromTo('.big-row',{
      y:1000
    },{
      y:0,
      duration:0.8
    })
    gsap.fromTo('.big-text-loop-container',{
      y:1000
    },{
      y:0,
      delay:0.1,
      duration:0.8
    })  
    gsap.fromTo('.app-projects',{
      y:1000
    },{
      y:0,
      delay:0.2,
      duration:0.8
    })
    gsap.to(".text-reveal",{
      duration:0.1,
      top:0
    })
    
  }

  initBigText = () => {
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
  }

  handleMoreWork = () => {
    this.store.startPageTransition('work',"More Work")
  }
}
