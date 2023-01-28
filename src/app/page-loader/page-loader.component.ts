import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {


  constructor(public store: StoreService) { 
    store.pageTransitionChange.subscribe((value) => {
      console.log('value changed',value)
      this.animate()
    });
  }

  ngOnInit(): void {
  }

  animate = () => {
    this.store.pageTransitionTimeline.set(".page-loader-wrapper",{
      pointerEvents:"all"
    }).set('.page-loader-round',{
      top:window.innerHeight,
      borderRadius:0
    }).set('.page-loader-round-container',{
      top:'120vh'
    }).set('.page-loader-round-content > div',{
      opacity:0,
      marginTop:150
    }).set(['.page-loader-round-bottom','.page-loader-round-top'],{
      height:'0vh'
    })
    
    this.store.pageTransitionTimeline.to('.page-loader-round-top',{
      height:'10vh',
    }).to('.page-loader-round-container',{
      top:'-5vh',
    }).to('.page-loader-round-content > div',{
      opacity:1,
      marginTop:-100,
    }).to('.page-loader-round-bottom',{
        height:'10vh',
    }).to('.page-loader-round-container',{
        top:'-120vh',
    }).set(".page-loader-wrapper",{
        pointerEvents:"none"
    })
  }

}
