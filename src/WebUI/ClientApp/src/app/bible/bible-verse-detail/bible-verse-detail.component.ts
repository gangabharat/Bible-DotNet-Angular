import { Component, OnInit } from "@angular/core";
import { BsModalService } from "ngx-bootstrap/modal";
import { Verse } from "../bible";

@Component({
  selector: "app-bible-verse-detail",
  templateUrl: "./bible-verse-detail.component.html",
  styleUrls: ["./bible-verse-detail.component.css"],
})
export class BibleVerseDetailComponent implements OnInit {
  book: string;
  chapter: string;
  verseNumber : string;
  verse: Verse;
  constructor(private bsModalService : BsModalService) {}

  ngOnInit(): void {}

  onClose(){
    this.bsModalService._hideModal(1);
  }
}
