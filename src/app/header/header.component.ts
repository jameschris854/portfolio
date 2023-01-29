import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    gsap.registerEffect(Observer)
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

}
