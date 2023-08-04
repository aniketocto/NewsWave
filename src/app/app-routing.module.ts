import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingNewsComponent } from './components/trending-news/trending-news.component';
import { TechNewsComponent } from './components/tech-news/tech-news.component';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HealthComponent } from './components/health/health.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {path:'',component:TrendingNewsComponent},
  {path:'tech',component:TechNewsComponent},
  {path:'business',component:BusinessComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'sports',component:SportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
