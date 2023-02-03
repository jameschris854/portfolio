import { Router } from '@angular/router';
// @ts-nocheck
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

  constructor(public store: StoreService, private router :Router) {
  }

  ngOnInit(): void {
      gsap.set('.app-container',{autoAlpha: 0,marginTop:250,top:250})
      gsap.set('.app-container-wrapper',{overflowY:'hidden'})
      gsap.to('.app-container',{autoAlpha: 1,duration:0.7,marginTop:0,top:0,delay:0.6})
      gsap.to('.app-container-wrapper',{duration: 0.5,overflowY:'auto',delay:1.6}).eventCallback("onComplete",() => {
        GsapUtils.splitText('.big-text-loop-container')
        const bigTextloopTl = GsapUtils.horizontalLoop(gsap.utils.toArray('.big-text-loop-container > span'),{paused:true,repeat:-1})
        bigTextloopTl.play(-0.5)
      })
  }

}
