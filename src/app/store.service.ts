import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class StoreService {

  // PageTransition
  pageTransition : "start"|"mid"|"idle" = "idle"
  pageTransitionChange :  Subject<"start"|"mid"|"idle"> = new Subject<"start"|"mid"|"idle">();
  pageTransitionContent = ""
  pageTransitionTargetPage = ""
  pageTransitionTimeline = gsap.timeline({defaults:{
    ease:"slow(0.7, 0.7, false)",
    duration:0.4
  }})

  //Menu
  isMenuVisible: boolean = false
  menuSubject: Subject<boolean> = new Subject<boolean>();

  constructor() { 
    this.pageTransitionChange.subscribe((value) => {
      this.pageTransition = "start"
    });
    this.pageTransitionTimeline.addLabel("loadPage",1.8)
    this.pageTransitionTimeline.eventCallback("onComplete",(e) => {
      this.pageTransitionChange.next("idle")
    })
    this.menuSubject.subscribe((val) => {
      this.isMenuVisible = val
    })
  }

  startPageTransition = (toPage:string,content:string) => {
    this.pageTransitionContent = content
    this.pageTransitionTargetPage = toPage
    this.pageTransitionChange.next("start")
  }

  showMenu = () => {
    this.menuSubject.next(true)
  }

  hideMenu = () => {
    this.menuSubject.next(false)
  }
}
