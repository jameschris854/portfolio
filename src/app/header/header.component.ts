import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../store.service';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(ScrollTrigger, Observer);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() theme: "dark" | "light" = "light"

  menuList = [
    {
      id:"w1",
      content: "Work",
      navigateTo: "work",
      route: this.route,
      get active () {
        return this.route.url.includes(this.navigateTo)
      }
    },
    {
      id:"A2",
      content: "About",
      navigateTo: "about",
      route: this.route,
      get active () {
        return this.route.url.includes(this.navigateTo)
      }
    },
    {
      id:"C3",
      content: "Contact",
      navigateTo: "contact",
      route: this.route,
      get active () {
        return this.route.url.includes(this.navigateTo)
      }
    }
  ]

  constructor(private route:Router,public store: StoreService) { }

  ngOnInit(): void {
    Observer.create({
      target:'.header-left',
      onHover:() => {
        gsap.to('.content-container > .content',{
          left:-65,
          duration:0.3
        })
        gsap.to('.symbol',{
          rotate:720
        })
      },
      onHoverEnd:() => {
        gsap.to('.content-container > .content',{
          left:5,
          duration:0.3
        })
        gsap.to('.symbol',{
          rotate:0
        })
      }
    })
  }

  handleNameClick = () => {
    this.store.startPageTransition('home','Home')
  }

  handleMenuClick = (item:typeof this.menuList[0]) => {
    console.log(item)
    this.store.startPageTransition(item.navigateTo,item.content)
  } 

  headerColor = () => {
    if(this.theme === 'light'){
      return "#ffffff"
    }else{
      return "#141517"
    }
  }
}
