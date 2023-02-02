import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataSyncComponent } from './data-sync/data-sync.component';
import { HomeComponent } from './home/home.component';
import { WorkPageComponent } from './work-page/work-page.component';

const routes: Routes = [
  {path:"",component:DataSyncComponent},
  {path:"home",component:HomeComponent},
  {path:"work",component:WorkPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
