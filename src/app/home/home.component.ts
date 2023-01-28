import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GsapUtils } from 'src/utils/gsapUtils/gsap-utils';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  

  constructor(public store: StoreService) {
  }

  ngOnInit(): void {
      GsapUtils.splitText('.big-text-loop-container')
      const bigTextloopTl = GsapUtils.horizontalLoop(gsap.utils.toArray('.big-text-loop-container > span'),{paused:true,repeat:-1})
      this.store.pageTransitionTimeline.set('.app-container',{autoAlpha: 0,marginTop:250,top:250},0)
      this.store.pageTransitionTimeline.set('.app-container-wrapper',{overflowY:'hidden'},0)
      this.store.pageTransitionTimeline.to('.app-container',{autoAlpha: 1,duration:0.5,marginTop:0,top:0},"loadPage")
      this.store.pageTransitionTimeline.to('.app-container-wrapper',{duration: 0.5,overflowY:'auto'},"loadPage")
      this.store.pageTransitionTimeline.eventCallback("onComplete",() => {
        bigTextloopTl.play(-0.5)
      })
  }

  animateMount = () => {
  }
}
