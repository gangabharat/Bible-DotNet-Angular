import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { BibleBookIndex, Verse } from "../bible";
import { faShare } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-bible-verse-detail",
  templateUrl: "./bible-verse-detail.component.html",
  styleUrls: ["./bible-verse-detail.component.css"],
})
export class BibleVerseDetailComponent implements OnInit {
  bibleBookIndex: BibleBookIndex;
  chapter: string;
  verseNumber : string;
  verse: Verse;

  faShare = faShare;

  constructor(private bsModalService : BsModalService) {}

  ngOnInit(): void {}

  onClose(){
    this.bsModalService._hideModal(1);
  }
}
