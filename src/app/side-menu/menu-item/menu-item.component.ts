import { Component, Input, OnInit } from '@angular/core';
import { StoreService } from 'src/app/store.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  isButtonFocused: boolean = false;
  @Input() content!: string
  @Input() uid!: string

  constructor(public store : StoreService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.init();
    }, 3000);
  }

  init = () => {
    if(!this.uid) return;
    const wrapper = document.querySelector(`.button-wrapper.${this.uid}`)?.getClientRects()[0]
    try {
      gsap.registerEffect(Observer)
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
          gsap.to(`.button > .dot.${this.uid}`,{
            scale:1,
            duration:0.2
          })
        },
        onHoverEnd:() => {
          this.isButtonFocused = false;
          gsap.to(`.button.${this.uid}`,{
            x: 0,
            y: 0,
            duration:1.5,
            ease: `elastic.out(1, 0.3)`
          })

          gsap.to(`.button > .dot.${this.uid}`,{
            scale:0,
            duration:0.2
          })
        }
      })
    } catch (error) {  } finally{
      console.log(`final.${this.uid}`);
    }
  }

  handleClick = () => {
    this.store.startPageTransition(`${this.uid}`,this.content)
  }
}
