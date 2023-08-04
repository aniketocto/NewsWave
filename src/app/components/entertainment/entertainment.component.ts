import { Component } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {

constructor (private _services: NewsapiserviesService) { }

  entertainmentDisplay :any = [];

  ngOnInit(): void {
    this._services.entertainmentNews().subscribe((result)=>{
      console.log(result)
      this.entertainmentDisplay = result.articles;
    });
  }

}
