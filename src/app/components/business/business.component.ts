import { Component, OnInit } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor (private _services: NewsapiserviesService) { }

  businessDisplay :any = [];

  ngOnInit(): void {
    this._services.businessNews().subscribe((result)=>{
      console.log(result)
      this.businessDisplay = result.articles;
    });
  }
}
