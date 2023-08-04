import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviesService {

  constructor(private _http: HttpClient) { }

  //trendingnewapi
  newapiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //technewsapi
  technewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //entertainment
  entertainmentnewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //business
  businessnewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //health
  healthnewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //science
  sciencenewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  //sports
  sportsnewsapi = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1c5e2237fcd342bf86e1cc62c9d23654";

  topHeading(): Observable<any>{
    return this._http.get(this.newapiurl)
  }

  techNews(): Observable<any>{
    return this._http.get(this.technewsapi)
  }

  entertainmentNews(): Observable<any>{
    return this._http.get(this.entertainmentnewsapi)
  }

  businessNews(): Observable<any>{
    return this._http.get(this.businessnewsapi)
  }

  healthNews(): Observable<any>{
    return this._http.get(this.healthnewsapi)
  }

  scienceNews(): Observable<any>{
    return this._http.get(this.sciencenewsapi)
  }

  sportsNews(): Observable<any>{
    return this._http.get(this.sportsnewsapi)
  }
}
