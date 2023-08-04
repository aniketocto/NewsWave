import { Component } from '@angular/core';
import { NewsapiserviesService } from 'src/app/service/newsapiservies.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  constructor (private _services: NewsapiserviesService) { }

  healthDisplay :any = [];

  ngOnInit(): void {
    this._services.healthNews().subscribe((result)=>{
      console.log(result)
      this.healthDisplay = result.articles;
    });
  }
}
