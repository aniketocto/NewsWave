import { Component } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {

  constructor (private _services: NewsapiserviesService) { }

  sportsDisplay :any = [];

  ngOnInit(): void {
    this._services.sportsNews().subscribe((result)=>{
      console.log(result)
      this.sportsDisplay = result.articles;
    });
  }
}
