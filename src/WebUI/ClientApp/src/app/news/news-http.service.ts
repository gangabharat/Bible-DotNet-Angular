import { Injectable } from '@angular/core';
import { HttpClientService } from '../shared/http-client.service';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsHttpService {

  url : string = "https://haveibeenpwned.com/api/v2/breaches";
  constructor(private _http: HttpClientService) { }

  getNews(){
    return this._http.get<News[]>({url:this.url});
  }
}
