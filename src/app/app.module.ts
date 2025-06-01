import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';
import { PageLoaderComponent } from './page-loader/page-loader.component';
import { HeaderComponent } from './header/header.component';
import { DataSyncComponent } from './data-sync/data-sync.component';
import { MagneticTextComponent } from './magnetic-text/magnetic-text.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuItemComponent } from './side-menu/menu-item/menu-item.component';
import { FloatingMenuButtonComponent } from './floating-menu-button/floating-menu-button.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { ProjectsComponent } from './work-page/projects/projects.component';
import { ProjectItemComponent } from './work-page/project-item/project-item.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectItemListComponent } from './work-page/project-item-list/project-item-list.component';
import { ProjectHoverViewComponent } from './project-hover-view/project-hover-view.component';
import { HeroImageComponent } from './hero-image/hero-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    PageLoaderComponent,
    HeaderComponent,
    DataSyncComponent,
    MagneticTextComponent,
    SideMenuComponent,
    MenuItemComponent,
    FloatingMenuButtonComponent,
    WorkPageComponent,
    ProjectsComponent,
    ProjectItemComponent,
    FooterComponent,
    ProjectItemListComponent,
    ProjectHoverViewComponent,
    HeroImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
