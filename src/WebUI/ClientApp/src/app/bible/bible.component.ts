import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BibleStoreService } from "../service/bible-store.service";
import { BibleService } from "../service/bible.service";
import { Bible, Book, Chapter, Verse, BibleBookIndex } from "./bible";
import { NotificationService } from "../service/notification.service";
import { PushNotificationsService } from "../shared/push-notification.service";
import { AudioService } from "../shared/audio.service";
import { BsModalService } from "ngx-bootstrap/modal";
import { CacheService } from "../shared/cache.service";
import { BibleVerseDetailComponent } from "./bible-verse-detail/bible-verse-detail.component";
import { BibleBookIndexService } from "../service/bible-book-index.service";

@Component({
  selector: "app-bible",
  templateUrl: "./bible.component.html",
  styleUrls: ["./bible.component.css"],
})
export class BibleComponent implements OnInit {
  bibleBookIndex: BibleBookIndex[] = [];
  selectedBibleBookIndex: BibleBookIndex;

  bibleData: Bible;
  bibleChapter: Chapter;
  bibleChapters: Chapter[] = [];
  bibleChaptersCount: number = 0;

  book: number = 0;
  chapter: number = 0;
  verses: number = 0;

  bibleLanguages: string[] = [];

  selectedbibleBook: string = "0";
  selectedbibleChapter: string = "1";
  selectedbibleLanguage: string = "-1";

  constructor(
    private bibleService: BibleService,
    private bibleBookIndexService: BibleBookIndexService,
    private bibleStoreService: BibleStoreService,
    private notificationService: NotificationService,
    private pushNotificationsService: PushNotificationsService,
    private audioService: AudioService,
    private cacheService: CacheService,
    private bsModalService: BsModalService
  ) {
    this.pushNotificationsService.requestPermission();
  }

  ngOnInit(): void {
    this.bibleLanguages = this.bibleService.bibleLanguages;
    let hasSelectedBible = !!this.cacheService.load("selectedBible");

    if (!hasSelectedBible) {
      this.cacheService.save({
        key: "selectedBible",
        data: { Book: 0, Chapter: 1, Language: "english" },
      });
    }

    let selectedBible = this.cacheService.load("selectedBible");

    if (selectedBible) {
      this.bibleService.BibleLanguage = selectedBible.Language;
      this.selectedbibleLanguage = selectedBible.Language;
      this.selectedbibleBook = selectedBible.Book;
      this.selectedbibleChapter = selectedBible.Chapter;
    }

    this.book = +this.selectedbibleBook;
    this.chapter = +this.selectedbibleChapter;
    this.getSelectLanguageBible();
    this.loadBibleIndex();
  }

  loadBibleIndex() {
    this.bibleBookIndexService
      .getBibleBookIndex()
      .subscribe((bibleBookIndexRes: BibleBookIndex[]) => {
        this.bibleBookIndex = bibleBookIndexRes;
        this.loadBibleChapterIndex();
        
      });
  }

  loadBibleChapterIndex() {
    this.selectedBibleBookIndex = this.bibleBookIndex.find((x, index) => {
      return index == this.book;
    });

  }

  getSelectLanguageBible() {
    let selectedBible = this.cacheService.load("selectedBible");

    this.bibleService.BibleLanguage = selectedBible.Language;
    this.bibleService.getBible().subscribe((res: Bible) => {
      this.bibleData = res;
      this.loadSelectedBible();
    });
  }

  loadSelectedBible() {
    this.bibleChapter =
      this.bibleData.Book[this.book]?.Chapter[this.chapter - 1];
    this.bibleChapters = this.bibleData.Book[this.book].Chapter;
    this.getBibleChaptersCount();
  }

  getBibleChaptersCount() {
    return this.bibleData.Book[this.book].Chapter.length;
  }

  onBookChangeEvent(form: NgForm) {
    this.book = +form.value.Book;
    form.control.patchValue({ Chapter: 1 });
    this.chapter = +form.value.Chapter;
    this.cacheService.save({ key: "selectedBible", data: form.value });
    this.loadSelectedBible();
    this.loadBibleChapterIndex();
  }

  onChapterChangeEvent(form: NgForm) {
    this.cacheService.save({ key: "selectedBible", data: form.value });

    this.book = +form.value.Book;
    this.chapter = +form.value.Chapter;

    this.loadSelectedBible();
  }

  onLanguageChangeEvent(form: NgForm) {
    this.cacheService.save({ key: "selectedBible", data: form.value });

    this.book = +form.value.Book;
    this.chapter = +form.value.Chapter;
    this.getSelectLanguageBible();
  }

  onVerse(book: string, chapter: string, verseNumber: string, verse: Verse) {
    this.bsModalService.show(BibleVerseDetailComponent, {
      initialState: { book, chapter, verseNumber, verse },
      animated: true,
      class: "modal-lg",
    });
  }

  books = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Esther",
    "Job",
    "Psalm",
    "Proverbs",
    "Ecclesiastes",
    "Song of Solomon",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
  ];
}
