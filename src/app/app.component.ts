import { Component } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';

  constructor(public store: StoreService){
    window.onbeforeunload = function(){ 	window.scrollTo(0,0); }
  }

  ngOnInit() {
    this.store.initSmoothScrolling()
  }
}
