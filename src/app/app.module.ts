import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsapiserviesService } from './service/newsapiservies.service';
import { TrendingNewsComponent } from './components/trending-news/trending-news.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { BusinessComponent } from './components/business/business.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingNewsComponent,
    TechNewsComponent,
    EntertainmentComponent,
    BusinessComponent,
    HealthComponent,
    ScienceComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
