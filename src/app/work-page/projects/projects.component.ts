import { Component, Input, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerEffect(Observer)

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  @Input() myProjects : any
  @Input() layout! : 'grid' | 'list'

  constructor() { 
  }

  ngOnInit(): void {
  }

}
