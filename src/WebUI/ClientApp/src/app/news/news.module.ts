import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsWidgetComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FontAwesomeModule
  ]
})
export class NewsModule { }
