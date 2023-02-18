import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {
  

  constructor(public store: StoreService,private router: Router,private NgZone: NgZone) {
    store.pageTransitionChange.subscribe((value) => {
      console.log('value changed',value)
      if(value === "start"){
        this.animate()
      }
    });
  }

  ngOnInit(): void {
  }

  animate = () => {
    this.store.pageTransitionTimeline.set(".page-loader-wrapper",{
      pointerEvents:"all"
    }).set('.page-loader-round-container',{
      top:'120vh',
      borderRadius:0
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
      onComplete:() => {
        this.NgZone.run(() => this.router.navigate([`/${this.store.pageTransitionTargetPage}`]))
      }
    }).to('.page-loader-round-content > div',{
      opacity:1,
      marginTop:-100,
      onComplete:() => {
        this.store.pageTransitionChange.next("mid")
      }
    }).to('.page-loader-round-bottom',{
        height:'10vh',
    }).to('.page-loader-round-container',{
        top:'-120vh',
    }).set(".page-loader-wrapper",{
        pointerEvents:"none"
    })
  }

}

export const PageLoaderReset = function (gsap:any) {
  gsap.set('.page-loader-wrapper',{
  background:'#141517'
  })
}