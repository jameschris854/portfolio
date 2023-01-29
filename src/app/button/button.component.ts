import { Component, Input, OnInit} from '@angular/core';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonColor!: string;
  isButtonFocused: boolean = false;

  constructor(public store: StoreService) { 
  }
  
  ngOnInit(): void {
    const wrapper = document.querySelector('.button-wrapper')?.getClientRects()[0]
    try {
      gsap.registerEffect(Observer)
      Observer.create({
        target:".button-wrapper",
        type:"pointer",
        onMove:(e: { event: any; }) => {
          if(this.isButtonFocused) {
            if(wrapper){              
              let event : any = e.event
              const button = document.querySelector('.button')?.getClientRects()[0]
              const limit = (val:number,limit:number) => (val < limit && val > -limit) ? val < 0 ? -val : val : val < 0 ? -limit : limit;

              gsap.to(".button",{
                x:Number(event.offsetX) - Number(button?.width)/2,
                y:Number(event.offsetY) - Number(button?.height)/2,
                stagger:0.1
              })
              gsap.to(".button-text",{
                x:limit(Number(event.offsetX) - Number(button?.width)/2,15),
                y:limit(Number(event.offsetY) - Number(button?.height)/2,15),
                stagger:0.1
              })
            }
          }
        }
      })

      Observer.create({
        target:".button",
        type:"pointer",
        onHover:() => {
          this.isButtonFocused = true;
          gsap.fromTo('.button-wave',{
            yPercent:75
          },{
            yPercent:0
          })
          console.log('honverd')
        },
        onHoverEnd:() => {
          this.isButtonFocused = false;
          gsap.to('.button',{
            x: 0,
            y: 0,
            duration:1.5,
            ease: "elastic.out(1, 0.3)"
          })
          gsap.to('.button > div',{
            x: 0,
            y: 0,
            duration:1.5,
            ease: "elastic.out(1, 0.3)"
          })
          gsap.to('.button-wave',{
            yPercent:-75
          })
          console.log('honverend')
        }
      })
    } catch (error) {  } finally{
      console.log('final');
    }
  }

  handleClick = () => {
    console.log('clicked')
    this.store.startPageTransition('#id',"cob cpn")
  }
}
