import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class StoreService {

  // PageTransition
  pageTransition : boolean = false
  pageTransitionChange :  Subject<boolean> = new Subject<boolean>();
  pageTransitionContent = ""
  pageTransitionTimeline = gsap.timeline({defaults:{
    ease:"slow(0.7, 0.7, false)",
    duration:0.4
  }})

  //Menu
  isMenuVisible: boolean = false
  menuSubject: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router) { 
    this.pageTransitionChange.subscribe((value) => {
      this.pageTransition = value
    });
    this.pageTransitionTimeline.addLabel("loadPage",1.8)

    this.menuSubject.subscribe((val) => {
      this.isMenuVisible = val
    })
  }

  startPageTransition = (toPage:string,content:string) => {
    this.pageTransitionContent = content
    this.router.navigate([`/${toPage}`])
    this.pageTransitionChange.next(true)
  }

  stopPageTransition = () => {
    this.pageTransitionChange.next(false)
  }

  showMenu = () => {
    this.menuSubject.next(true)
  }

  hideMenu = () => {
    this.menuSubject.next(false)
  }
}
