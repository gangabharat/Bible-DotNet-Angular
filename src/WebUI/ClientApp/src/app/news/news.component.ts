import { Component, OnInit } from '@angular/core';
import { NewsHttpService } from './news-http.service';
import { News } from './news.model';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsData : News[] = [];
  constructor(private newsHttpService : NewsHttpService, private newsService : NewsService) { }

  ngOnInit(): void {

    // this.newsHttpService.getNews().subscribe(
    //   (res) =>{
    //       this.newsData = res;          
    //       //this.newsService.load(res);
    //   }
    // );


  }

}
