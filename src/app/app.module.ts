import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule}from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChickenComponent } from './chicken/chicken.component';
import { MuttonComponent } from './mutton/mutton.component';
import { EggComponent } from './egg/egg.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    HomeComponent,
    AboutComponent,
    ChickenComponent,
    MuttonComponent,
    EggComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"about",component:AboutComponent},
      {path:"chicken",component:ChickenComponent},
      {path:"mutton",component:MuttonComponent},
      {path:"egg",component:EggComponent},
      {path:"contact",component:ContactComponent},
    ])
      

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
