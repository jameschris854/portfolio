import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-data-sync',
  templateUrl: './data-sync.component.html',
  styleUrls: ['./data-sync.component.scss']
})
export class DataSyncComponent implements OnInit {

  constructor(public store:StoreService) { }

  ngOnInit(): void {
    this.store.startPageTransition('home',"jameschris")
  }

}
