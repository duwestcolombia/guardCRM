import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumComponent } from './shared/breadcrum/breadcrum.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PagesComponent } from './pages/pages.component';

//Modulos
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreadcrumComponent,
    SidebarComponent,
    PagesComponent

  ],
  imports: [
    BrowserModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
