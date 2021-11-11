import { Component, EventEmitter, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { NewsHttpService } from "./news-http.service";
import { News } from "./news.model";
import { NewsService } from "./news.service";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
})
export class NewsComponent implements OnInit {
  newsData: News[] = [];
  news$ = new Observable<News[]>();
  constructor(
    private newsHttpService: NewsHttpService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.newsHttpService.getNews().subscribe((res) => {
      this.newsService.load(res);
      this.loadMore();
    });

    this.news$ = this.newsService.puppies$;
  }

  loadMore() {
   this.newsService.loadMore();
  }

  onScrollingFinished() {
    this.newsService.loadMore();
  }
}
