import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerEffect(Observer)

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myProjects = [
    {
      name: "Chat App",
      image: "../../../assets/Projects/chatapp.png",
      technology: 'Full Stack',
      year: '2023',
      uid:'Pr1',
      git: "https://github.com/jameschris854/Chat-Proto"
    },
    {
      name: "Wally",
      image: "../../../assets/Projects/wally.png",
      technology: 'Frontend',
      year: '2022',
      uid:'Pr2',
      git: "https://github.com/jameschris854/WallpaperApp"
    },
    {
      name: "Netflix Clone",
      image: "../../../assets/Projects/netflixclonephone.gif",
      technology: 'Frontend',
      year: '2022',
      uid:'Pr3'
    },
    {
      name: "Discord-Bot",
      image: "../../../assets/Projects/hangman.png",
      technology: 'backend',
      year: '2021',
      uid:'Pr4'
    },
    {
      name: "Tesla Clone",
      image: "../../../assets/Projects/teslaclone.jpg",
      technology: 'Frontend',
      year: '2021',
      uid:'Pr5'
    },
    {
      name: "WeatherFc",
      image: "../../../assets/Projects/weatherfc.jpg",
      technology: 'Frontend',
      year: '2021',
      uid:'Pr6'
    },
    {
      name: "Crwn Clothing",
      image: "../../../assets/Projects/crwnclothing.jpg",
      technology: 'Frontend',
      year: '2021',
      uid:'Pr7'
    },
    {
      name: "Instagram Clone",
      image: "../../../assets/Projects/instacloness.jpg",
      technology: 'Fullstack',
      year: '2021',
      uid:'Pr8'
    },
    {
      name: "Dream Garden",
      image: "../../../assets/Projects/dreamgarden.jpg",
      technology: 'Frontend',
      year: '2021',
      uid:'Pr9'
    }
  ]

  constructor() { 
  }

  ngOnInit(): void {
  }

}
