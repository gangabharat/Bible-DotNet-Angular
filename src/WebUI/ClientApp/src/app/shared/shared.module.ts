import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ScrollTrackerDirective } from './directive/scroll-tracker.directive';


@NgModule({
  declarations: [ScrollTrackerDirective],
  imports: [
    // FormsModule,
    // BrowserModule       
  ]
})
export class SharedModule { }
