import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { gsap } from "gsap";
import {Observer} from "gsap/Observer"
import { WorkPage } from './work-page.constants';
import { WorkPageService } from './work-page.service';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger,Observer);

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  myProjects = WorkPage.ProjectsConstant;
  filters = WorkPage.Filters;
  layoutConstant = WorkPage.Layout;

  get getLayoutClass(){
    return this.workPageService.layout === 'grid' ? "" : 'list'
  }
  get getViewGridButtonStyle(){
    return this.workPageService.layout === 'list' ? {display:'flex'} : {display:'none'}
  }

  constructor(store: StoreService, public workPageService: WorkPageService) {

    store.pageTransitionChange.subscribe((value) => {
      if(value === "mid"){
        this.init()
      }
    });
    setTimeout(() => {
      this.ViewButtoninit()
    }, 1000);
   }

  ngOnInit(): void {
    this.workPageService.hoveredProjectSubject.subscribe((data) => {
      const el = this.myProjects.find(e => e.uid === data?.uid)
      if(el){
        let index = this.myProjects.indexOf(el)
        gsap.to('.view-button-image-container',{
          y:index * -500,
          duration:0.5
        })
      }
    })
  }

  ViewButtoninit = () => {
    Observer.create({target:window,
      onMove: (e:any) => {
        if(document.querySelector('.view-button-container')?.getBoundingClientRect()){
          gsap.to('.view-button-container',{
            x:e.event.clientX - document.querySelector('.view-button-container')!.getBoundingClientRect().width/2,
            y:e.event.clientY - document.querySelector('.view-button-container')!.getBoundingClientRect().height/2,
            stagger:0.1
          })
        }
      }}
    )
  }

  init(){
    gsap.fromTo('.work-phrase',{
      y:1000
    },{
      y:0,
      duration:0.8
    })

    gsap.fromTo('.project-controls',{
      y:1000
    },{
      y:0,
      delay:0.1,
      duration:0.9
    })
    
    gsap.fromTo('app-projects',{
      y:1000
    },{
      y:0,
      delay:0.2,
      duration:0.8
    })
  }


  handleSort = (sort:string) => {
    if(sort === "ALL"){
      this.myProjects = WorkPage.ProjectsConstant
    }else if(sort === "FrontEnd"){
      this.myProjects = WorkPage.ProjectsConstant.filter(e => e.technology !== "backend")
    } else if(sort === "Backend"){
      this.myProjects = WorkPage.ProjectsConstant.filter(e => e.technology !== "Frontend")
    }
    this.filters = this.filters.map((e) => ({...e,isActive: e.content === sort})) 
  }

  handleLayoutChange = (layout: "grid" | "list" | string) => {
    if(layout === "grid"){
      this.workPageService.layout = "grid"
    }else {
      this.workPageService.layout = "list"
    }
    this.layoutConstant = this.layoutConstant.map((e) => ({...e,isActive: e.layout === layout})) 
    ScrollTrigger.refresh(true)
  }

  trackFilters = (index:number,filter:typeof this.filters[0]) => {
    return filter.uid
  }

  trackLayout = (index:number,layout:typeof this.layoutConstant[0]) => {
    return layout.uid
  }

}
