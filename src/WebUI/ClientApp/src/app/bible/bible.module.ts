import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BibleRoutingModule } from "./bible-routing.module";
import { BibleComponent } from "./bible.component";
import { FormsModule } from "@angular/forms";
import { BibleBookComponent } from "./bible-book/bible-book.component";
import { BibleBookChapterComponent } from "./bible-book-chapter/bible-book-chapter.component";
import { BibleRecentHistoryComponent } from "./bible-recent-history/bible-recent-history.component";
import { BibleVerseDetailComponent } from "./bible-verse-detail/bible-verse-detail.component";

@NgModule({
  declarations: [
    BibleComponent,
    BibleBookComponent,
    BibleBookChapterComponent,
    BibleRecentHistoryComponent,
    BibleVerseDetailComponent,
  ],
  imports: [CommonModule, FormsModule, BibleRoutingModule],
})
export class BibleModule {}
