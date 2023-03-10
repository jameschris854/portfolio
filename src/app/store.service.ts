import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Scrollbar from 'smooth-scrollbar';
import { ScrollStatus } from 'smooth-scrollbar/interfaces';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

gsap.registerPlugin(ScrollTrigger);
Scrollbar.use(OverscrollPlugin);

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

  //smooth scrolling.
  globalScrollSubject: Subject<ScrollStatus> = new Subject<ScrollStatus>();

  constructor() { 
    this.pageTransitionChange.subscribe((value) => {
      if(value === "start"){
        this.pageTransition = "start"
      }else if(value === "mid"){
        window.scrollTo(0,0); 
        gsap.set('.page-loader-wrapper',{
          background:'unset'
        })
      }
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
    this.hideMenu()
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

  initSmoothScrolling = () => {
    const el : HTMLElement | null = document.querySelector('.smooth-scroll')
    if(el){
      const bodyScrollBar = Scrollbar.init(el, { 
      damping: 0.06 ,
      plugins:{
        overscroll:{
          effect:'bounce',
          damping: 0.05,
          glowColor: 'rgb(28, 29, 32)',
          maxOverscroll: 300,
        }
      }});
      const r : HTMLElement | null = document.querySelector(':root');
      bodyScrollBar.addListener((ScrollStatus) => { 
        console.log('onscroll',ScrollStatus) 
        this.globalScrollSubject.next(ScrollStatus)
        const { offset } = ScrollStatus
        if(r){
          r.style.setProperty('--fixed-top',offset.y + 'px')
          r.style.setProperty('--fixed-left',offset.x + 'px') 
        }
      });
      // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element: 
      bodyScrollBar.setPosition(0, 0);
      bodyScrollBar.track.xAxis.element.remove();
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (value) {
            bodyScrollBar.scrollTop = value;
          }
          return bodyScrollBar.scrollTop;
        },
      });
      bodyScrollBar.addListener(ScrollTrigger.update);
    }
  }
}
