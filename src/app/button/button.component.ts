import { Component, Input, OnInit, enableProdMode } from '@angular/core';
import gsap from 'gsap';
import { Observer } from 'gsap/all';
import { StoreService } from '../store.service';

gsap.registerEffect(Observer);

@Component({
  selector: `app-button`,
  templateUrl: `./button.component.html`,
  styleUrls: [`./button.component.scss`],
})
export class ButtonComponent{
  isButtonFocused: boolean = false;
  @Input() content!: string;
  @Input() uid!: string;
  @Input() backgroundColor: string = `#1c1d20`;
  @Input() waveColor: string = `#334bd3`;
  @Input() width : string = '300'
  @Input() height : string = '300'
  @Input() textSize : string = '15'
  @Input() borderRadius: string = "50%"
  @Input() textColor: string = "#ffffff"
  @Input() borderColor: string = "#ffffff1a"

  contentColor = this.textColor

  constructor(public store: StoreService) {}

  ngAfterViewInit (): void {
    console.log('init button')
    setTimeout(() => {
      this.init()
    },1000)
  }

  init = () => {
    
    const wrapper = document.querySelector(`.button-wrapper.${this.uid}`)?.getClientRects()[0];
    gsap.set(
      `.button-wave.${this.uid}`,
      {
        yPercent: 75,
      }
    );
    Observer.create({
      target: `.button-wrapper.${this.uid}`,
      type: `pointer`,
      onMove: (e: { event: any }) => {
        if (this.isButtonFocused) {
          if (wrapper) {
            let event: any = e.event;
            const button = document
              .querySelector(`.button.${this.uid}`)
              ?.getClientRects()[0];
            const limit = (val: number, limit: number) =>
              val < limit && val > -limit
                ? val < 0
                  ? -val
                  : val
                : val < 0
                ? -limit
                : limit;

            gsap.to(`.button.${this.uid}`, {
              x: Number(event.offsetX) - Number(button?.width) / 2,
              y: Number(event.offsetY) - Number(button?.height) / 2,
              stagger: 0.1,
            });
            gsap.to(`.button-text.${this.uid}`, {
              x: limit(Number(event.offsetX) - Number(button?.width) / 2, 15),
              y: limit(Number(event.offsetY) - Number(button?.height) / 2, 15),
              stagger: 0.1,
            });
          }
        }
      },
    });
    Observer.create({
      target: `.button.${this.uid}`,
      type: `pointer`,
      onHover: () => {
        this.isButtonFocused = true;
        this.contentColor = "#ffffff"
        gsap.fromTo(
          `.button-wave.${this.uid}`,
          {
            yPercent: 75,
          },
          {
            yPercent: 0,
          }
        );
      },
      onHoverEnd: () => {
        this.isButtonFocused = false;
        gsap.to(`.button.${this.uid}`, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: `elastic.out(1, 0.3)`,
        })
        gsap.to(`.button > div.${this.uid}`, {
          x: 0,
          y: 0,
          duration: 1.5,
          ease: `elastic.out(1, 0.3)`,
        })
        gsap.to(`.button-wave.${this.uid}`, {
          yPercent: -75,
          onUpdate:(e) => {
            this.contentColor=this.textSize
          }
        })
      },
    });
  }

}
