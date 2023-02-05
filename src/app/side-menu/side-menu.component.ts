import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { gsap } from "gsap";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  items = [
    {
      id: "SM1",
      content:"Home"
    },
    {
      id: "SM2",
      content:"Work"
    },
    {
      id: "SM3",
      content:"About"
    },
    {
      id: "SM4",
      content:"Contact"
    }
  ]

  constructor(public store:StoreService) { }

  ngOnInit(): void {
    gsap.set('.side-menu-container',{
      xPercent:100,
    })

    this.store.menuSubject.subscribe((val) => {
      if(val){
        this.show()
      }else{
        this.hide()
      }
    })
  }

  show = () => {
    const items = gsap.utils.toArray('.side-menu-item-container')
    items.forEach((item:any,index) => {
      console.log(item)
      gsap.set(item,{
        x:100*index,
        autoAlpha:0
      })
    })

    gsap.to('.side-menu-dead-zone',{
      opacity:0.5,
      duration:0.5
    })
    gsap.to('.side-menu-container',{
      xPercent:0,
      duration:0.5,
      ease: "expo.out"
    })
      gsap.to(items,{
        x:0,
        duration:1.5,
        ease: "expo.out",
        autoAlpha:1
      })
  }

  hide = () => {
    gsap.to('.side-menu-container',{
      xPercent:100,
      duration:0.5,
      ease: "expo.out"
    })
    gsap.to('.side-menu-dead-zone',{
      opacity:0,
      duration:0.5
    })
  }
  
  handleMenuClick = () => {
    console.log(this.store.isMenuVisible)
    if(this.store.isMenuVisible){
      this.store.hideMenu()
    }else{
      this.store.showMenu()
    }
  }


}
