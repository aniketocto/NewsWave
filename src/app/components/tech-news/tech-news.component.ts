import { Component, OnInit } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor (private _services: NewsapiserviesService) { }

  techNewsDisplay: any = [];

  ngOnInit(): void {
    this._services.techNews().subscribe((result)=>{
      this.techNewsDisplay = result.articles
    });
  }

  

}
