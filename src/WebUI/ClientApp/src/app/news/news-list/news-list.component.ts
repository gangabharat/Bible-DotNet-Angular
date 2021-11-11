import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { News } from "../news.model";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.css"],
})
export class NewsListComponent implements OnInit {
  @Output() scrollingFinished = new EventEmitter<void>();
  @Input() newsList: News[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onScrollingFinished() {
    this.scrollingFinished.emit();
  }
}
