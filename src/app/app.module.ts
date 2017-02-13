import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Logger} from "./utils/logger/logger.service";
import {EvenBetterLogger} from "./utils/logger/evenbetterlogger.service";
import {UserService} from "./modules/user/service/user.service";
import {HeroDetailComponent} from './modules/hero/component/hero-detail.component';
import {HeroesComponent} from "./modules/hero/component/heroes.component";
import {AppRoutingModule} from "./app-routing.module";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService,{provide:Logger,useClass:EvenBetterLogger}],
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    AppComponent
  ],

  bootstrap: [
    AppComponent]
})
export class AppModule { }
