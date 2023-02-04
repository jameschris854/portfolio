import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  constructor(store: StoreService) {
    store.pageTransitionChange.subscribe((value) => {
      if(value === "mid"){
        this.init()
      }
    });
   }

  ngOnInit(): void {
  }

  init(){
    console.log('init')
    gsap.fromTo('.work-phrase',{
      y:1000
    },{
      y:0,
      duration:0.8
    })
    gsap.fromTo('app-projects',{
      y:1000
    },{
      y:0,
      delay:0.1,
      duration:0.8
    })
  }

}
