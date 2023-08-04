import { Component } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {

  constructor (private _services: NewsapiserviesService) { }

  scienceDisplay :any = [];

  ngOnInit(): void {
    this._services.scienceNews().subscribe((result)=>{
      console.log(result)
      this.scienceDisplay = result.articles;
    });
  }
}
