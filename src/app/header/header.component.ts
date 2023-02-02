import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList = [
    {
      id:"w1",
      content: "Work",
      navigateTo: "work"
    },
    {
      id:"A2",
      content: "About",
      navigateTo: "about"
    },
    {
      id:"C3",
      content: "Contact",
      navigateTo: "contact"
    }
  ]

  constructor(private route:Router,public store: StoreService) { }

  ngOnInit(): void {
    gsap.registerEffect([Observer,ScrollTrigger])
    Observer.create({
      target:'.header-left',
      onHover:() => {
        gsap.to('.content-container > .content',{
          left:-65,
          duration:0.5
        })
      },
      onHoverEnd:() => {
        gsap.to('.content-container > .content',{
          left:0,
          duration:0.5
        })
      }
    })
  }

  handleNameClick = () => {
    this.route.navigate([''])
  }

  handleMenuClick = (item:typeof this.menuList[0]) => {
    console.log(item)
    this.store.startPageTransition(item.navigateTo,item.content)
  } 
}
