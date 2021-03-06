import {
  Component,
  OnInit,
  Input,
  SimpleChange,
  OnDestroy,
  ViewChild,
  TemplateRef,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { BibleStoreService } from "../service/bible-store.service";
import { BibleService } from "../service/bible.service";
import { Bible, Book, Chapter, Verse } from "./bible";
import { interval } from "rxjs";
import { NotificationService } from "../service/notification.service";
import { PushNotificationsService } from "../shared/push-notification.service";
import { AudioService } from "../shared/audio.service";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { CacheService } from "../shared/cache.service";
import { BibleVerseDetailComponent } from "./bible-verse-detail/bible-verse-detail.component";

@Component({
  selector: "app-bible",
  templateUrl: "./bible.component.html",
  styleUrls: ["./bible.component.css"],
})
export class BibleComponent implements OnInit {
  faBookOpen = faCoffee;
  @ViewChild("form") form: NgForm;

  data: Bible;
  resData: any;
  //resData : Book;
  bibleChapters: number;
  book: number = 0;
  chapter: number = 0;
  verses: number = 0;
  audioBible: string;
  bibleLanguages: string[] = [];
  selectedbibleLanguage: string;

  audio: any;
  playerStatus: string;

  fileToPlay: string;

  newListModalRef: BsModalRef;
  listOptionsModalRef: BsModalRef;
  deleteListModalRef: BsModalRef;
  itemDetailsModalRef: BsModalRef;

  loadPercentage: number = 0;

  constructor(
    private bibleService: BibleService,
    private bibleStoreService: BibleStoreService,
    private notificationService: NotificationService,
    private pushNotificationsService: PushNotificationsService,
    private audioService: AudioService,
    private modalService: BsModalService,
    private cacheService: CacheService,
    private bsModalService: BsModalService
  ) {
    this.pushNotificationsService.requestPermission();
  }

  ngOnInit(): void {

    this.bibleLanguages = this.bibleService.bibleLanguages;
    let lang = localStorage.getItem("bibleLanguage");
    if (lang) {
      this.bibleService.BibleLanguage = lang;
      //this.selectedbibleLanguage = lang;
    }    
    this.bibleService.getBible().subscribe((res: Bible) => {
      this.data = res;
      this.onChangeEvent(this.form);    
    });
  }

  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  onSubmit(form: NgForm) {
    this.onChangeEvent(form);
  }
  onbibleLanguagesChangeEvent(value: string) {
    localStorage.setItem("bibleLanguage", value);

    //let lang = localStorage.getItem("bibleLanguage");
    if (value) {
      this.bibleService.BibleLanguage = value;
    }
    this.bibleService.getBible().subscribe((res: Bible) => {
      this.data = res;
      this.onChangeEvent(this.form);
    });
  }
  onChangeEvent(form: NgForm) {
    this.bibleStoreService.addPuppy(form.value);
    this.book = +form.value.Book + 1;
    this.chapter = form.value.Chapter;

    this.resData =
      this.data.Book[form.value.Book]?.Chapter[form.value.Chapter - 1];
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
