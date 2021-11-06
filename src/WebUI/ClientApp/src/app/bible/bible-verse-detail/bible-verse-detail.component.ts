import { Component, OnInit } from "@angular/core";
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
  constructor() {}

  ngOnInit(): void {}
}
