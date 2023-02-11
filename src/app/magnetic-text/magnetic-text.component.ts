import { StoreService } from './../store.service';
import { Component, Input, OnInit } from '@angular/core';
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

@Component({
  selector: 'app-magnetic-text',
  templateUrl: './magnetic-text.component.html',
  styleUrls: ['./magnetic-text.component.scss']
})
export class MagneticTextComponent implements OnInit {

  @Input() isButtonFocused: boolean = false;
  @Input() content!: string
  @Input() uid!: string
  @Input() handleMenuClick!: any
  @Input() theme: "dark" | "light" = "light"

  constructor(public store : StoreService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 3000);
  }

  init = () => {

    if(this.isButtonFocused){
      this.setActive()
    }

    if(!this.uid) return;
    const wrapper = document.querySelector(`.button-wrapper.${this.uid}`)?.getClientRects()[0]
    try {
      Observer.create({
        target:`.button-wrapper.${this.uid}`,
        type:`pointer`,
        onMove:(e) => {
          if(this.isButtonFocused) {
            if(wrapper){
              let event : any = e.event
              const button = document.querySelector(`.button.${this.uid}`)?.getClientRects()[0]

              gsap.to(`.button.${this.uid}`,{
                x:Number(event.offsetX) - Number(button?.width)/3,
                y:Number(event.offsetY) - Number(button?.height)/3,
                stagger:0.1
              })

            }
          }
        }
      })

      Observer.create({
        target:`.button.${this.uid}`,
        type:`pointer.${this.uid}`,
        onHover:() => {
          this.isButtonFocused = true;
          this.setActive()
        },
        onHoverEnd:() => {
          this.isButtonFocused = false;
          gsap.to(`.button.${this.uid}`,{
            x: 0,
            y: 0,
            duration:1.5,
            ease: `elastic.out(1, 0.3)`
          })
          if(this.isButtonFocused){
            this.setActive()
          }else{
            this.setInActive()
          }
        }
      })
    } catch (error) {  } finally{
      console.log(`final.${this.uid}`);
    }
  }

  handleClick = () => {
    this.store.startPageTransition(`${this.uid}`,this.content)
  }

  getColor = () => {
    if(this.theme === 'light'){
      return "#ffffff"
    }else{
      return "#141517"
    }
  }

  setActive = () => {
    gsap.to(`.button > .dot.${this.uid}`,{
      scale:1,
      duration:0.2
    })
  }

  setInActive = () => {
    gsap.to(`.button > .dot.${this.uid}`,{
      scale:0,
      duration:0.2
    })
  }

}
