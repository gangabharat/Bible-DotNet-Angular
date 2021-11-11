import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsWidgetComponent } from './news-widget/news-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollTrackerDirective } from '../shared/directive/scroll-tracker.directive';


@NgModule({
  declarations: [NewsComponent, NewsListComponent, NewsWidgetComponent, ScrollTrackerDirective],
  imports: [
    CommonModule,
    NewsRoutingModule,
    FontAwesomeModule
  ]
})
export class NewsModule { }
