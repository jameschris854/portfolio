import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { PageUtils } from 'src/utils/pageUtils/page-utils';

@Component({
  selector: 'app-data-sync',
  templateUrl: './data-sync.component.html',
  styleUrls: ['./data-sync.component.scss']
})
export class DataSyncComponent implements OnInit {

  constructor(public store:StoreService,private route:Router) { }

  ngOnInit(): void {
    this.route.navigate(['home'])
    PageUtils.config({backgroundColor:'#999D9E'})
  }

}
