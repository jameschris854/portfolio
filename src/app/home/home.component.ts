import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  

  constructor(public store: StoreService) {
  }

  ngOnInit(): void {
      this.store.pageTransitionTimeline.set('.app-container',{autoAlpha: 0,marginTop:250},0)
      this.store.pageTransitionTimeline.set('.app-container-wrapper',{overflowY:'hidden'},0)
      this.store.pageTransitionTimeline.to('.app-container',{autoAlpha: 1,duration:0.5,marginTop:0},"loadPage")
      this.store.pageTransitionTimeline.to('.app-container-wrapper',{duration: 0.5,overflowY:'auto'},"loadPage")
  }

  animateMount = () => {
    
  }
}
