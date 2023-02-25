import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { gsap } from "gsap";
import {Observer} from "gsap/Observer"

@Component({
  selector: 'app-floating-menu-button',
  templateUrl: './floating-menu-button.component.html',
  styleUrls: ['./floating-menu-button.component.scss']
})
export class FloatingMenuButtonComponent implements OnInit {


  isMenuButtonVisible : boolean = false;
  animationInProgress : boolean = false;

  constructor(public store:StoreService) { }

  ngOnInit(): void {
    gsap.set('.menu-button',{
      autoAlpha:0,
      top:100,
      scale:0,
    })

    setTimeout(() => {
      this.init()
    }, 1000);


    
  }

  init = () => {

    this.store.globalScrollSubject.subscribe((ScrollStatus) => {
      const { offset } = ScrollStatus
      const relativeTop = offset.y
        if(this.animationInProgress) return
        if(Math.abs(Number(relativeTop)) > 200){
          if(!this.isMenuButtonVisible){
            this.animationInProgress = true
            gsap.set('.floating-menu-container',{pointerEvents:'auto'})
            gsap.to('.menu-button',{
              autoAlpha:1,
              duration:0.2,
              top:0,
              scale:1,
            }).then(() => {
              this.isMenuButtonVisible = true
              this.animationInProgress = false
            })
          }
        }else{
          if(this.isMenuButtonVisible){
            gsap.set('.floating-menu-container',{pointerEvents:'none'})
            this.animationInProgress = true
            gsap.to('.menu-button',{
              autoAlpha:0,
              duration:0.2,
              top: 100,
              scale:0,
            }).then(() => {
              this.isMenuButtonVisible = false
            this.animationInProgress = false
            })
          }
        }
    })
  }
  
  handleMenuClick = () => {
    if(this.store.isMenuVisible){
      this.store.hideMenu()
    }else{
      this.store.showMenu()
    }
  }
}
