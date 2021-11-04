import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { NewsHttpService } from "../news-http.service";
import { News } from "../news.model";
import { NewsService } from "../news.service";
import {
  faEye,
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { map } from "rxjs/operators";

@Component({
  //encapsulation : ViewEncapsulation.None,
  selector: "app-news-widget",
  templateUrl: "./news-widget.component.html",
  styleUrls: ["./news-widget.component.css"],
})
export class NewsWidgetComponent implements OnInit {
  //public newsList$ = new Observable<News[]>();
  newsList: News[] = [];

  faEye = faEye;
  faCheck = faCheck;
  faExclamationTriangle = faExclamationTriangle;

  constructor(
    private newsHttpService: NewsHttpService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {

    this.newsService.puppies$.subscribe(
      res =>{
        this.newsList = res;
      }
    );

    // let s = 'ser';
    // s.substr(0,10);
    //  this.newsHttpService.getNews()
    //  .pipe(map(
    //    newval => {
    //      return newval.map(newsone =>{
    //        if(newsone.Description.length > 500){
    //          newsone.Description = newsone.Description.substr(0,500) + '...';
    //        }
    //       return newsone;
    //      } )
    //    }
    //  ))
    //  .subscribe(
    //   (res) =>{
    //       this.newsList = res;
    //       //this.newsService.load(res);
    //   },
    //   (error) =>{
    //   }
    // );
  }
}