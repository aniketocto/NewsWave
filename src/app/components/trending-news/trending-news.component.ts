import { Component, OnInit } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-trending-news',
  templateUrl: './trending-news.component.html',
  styleUrls: ['./trending-news.component.css']
})
export class TrendingNewsComponent implements OnInit {

  constructor (private _services: NewsapiserviesService) { }

  topHeadingDisplay :any = [];

  ngOnInit(): void {
    this._services.topHeading().subscribe((result)=>{
      console.log(result)
      this.topHeadingDisplay = result.articles;
    });
  }

}
