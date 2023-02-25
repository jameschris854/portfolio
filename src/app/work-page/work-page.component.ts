import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { gsap } from "gsap";
import { WorkPage } from './work-page.constants';
import { WorkPageService } from './work-page.service';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PageLoaderReset } from '../page-loader/page-loader.component';
import { PageUtils } from 'src/utils/pageUtils/page-utils';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  filters = WorkPage.Filters;
  layoutConstant = WorkPage.Layout;

  get getLayoutClass(){
    return this.workPageService.layout === 'grid' ? "" : 'list'
  }
  get getViewGridButtonStyle(){
    return this.workPageService.layout === 'list' ? {display:'flex'} : {display:'none'}
  }

  constructor(store: StoreService, public workPageService: WorkPageService) {
    PageUtils.config({backgroundColor:'#999D9E'})
    PageLoaderReset(gsap)
    workPageService.layout = "grid"
    this.workPageService.projectList = WorkPage.ProjectsConstant;

    store.pageTransitionChange.subscribe((value) => {
      if(value === "mid"){
        this.init()
      }
    });
   }

  ngOnInit(): void {
   
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
      this.workPageService.projectList = WorkPage.ProjectsConstant
    }else if(sort === "FrontEnd"){
      this.workPageService.projectList = WorkPage.ProjectsConstant.filter(e => e.technology !== "backend")
    } else if(sort === "Backend"){
      this.workPageService.projectList = WorkPage.ProjectsConstant.filter(e => e.technology !== "Frontend")
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

    gsap.fromTo('app-projects',{
      marginTop:300,
      opacity:0
    },{
      marginTop:0,
      opacity:1
    })

    ScrollTrigger.refresh(true)
  }

  trackFilters = (index:number,filter:typeof this.filters[0]) => {
    return filter.uid
  }

  trackLayout = (index:number,layout:typeof this.layoutConstant[0]) => {
    return layout.uid
  }

}
