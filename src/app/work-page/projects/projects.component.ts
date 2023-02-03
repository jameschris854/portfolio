import { Observer } from 'gsap/all';
import { Component, OnInit } from '@angular/core';
gsap.registerEffect(Observer)

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myProjects = [
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr1'
    },
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr2'
    },
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr3'
    },
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr4'
    },
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr5'
    },
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr6'
    },
    {
      name: "Discord-Bot",
      image: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=75",
      technology: 'backend',
      year: '2021',
      uid:'Pr7'
    }
  ]

  constructor() { 
    setTimeout(() => {
      this.init()
    }, 1000);
  }

  init = () => {
    console.log('init')
    Observer.create({target:window,
      onMove: (e:any) => {
        console.log(e.x)
        gsap.to('.view-button',{
          x:e.event.clientX - document.querySelector('.view-button')!.getBoundingClientRect().width/2,
          y:e.event.clientY - document.querySelector('.view-button')!.getBoundingClientRect().height/2,
          stagger:0.1
        })
      }}
    )
  }

  ngOnInit(): void {
  }

}
