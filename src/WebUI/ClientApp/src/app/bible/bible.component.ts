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

  max = 10;
  rate = 7;
  isReadonly = false;

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
    //this.cacheService.save({key : 'key',data:'test'});
    //this.cacheService.load('key');
    //this.bibleStoreService.

    // this.bibleStoreService.puppies$.subscribe(res =>{
    //   console.log(res);
    //   this.cacheService.save({key : 'key',data:res,expirationMins : 1});
    // })

    // this.audioService.playerStatus.subscribe(res=>{
    //   //console.log(res);
    //   this.playerStatus = res;
    // })
    //this.bibleService.
    this.bibleLanguages = this.bibleService.bibleLanguages;
    let lang = localStorage.getItem("bibleLanguage");
    if (lang) {
      this.bibleService.BibleLanguage = lang;
      this.selectedbibleLanguage = lang;
    }

    //this.bibleService.
    this.bibleService.getBible().subscribe((res: Bible) => {
      this.data = res;
      this.onChangeEvent(this.form);

      // interval(1000  * 1).subscribe(
      //   res=>{
      //     console.log(res);
      //     this.loadPercentage = res * 5;
      //   }
      // );

      //this.resData =this.data.Book[this.book]?.Chapter[this.chapter];
      //this.onChangeEvent({Form.Book:});
      // interval(1000 * 30 * 1).subscribe(
      //   res=>{
      //     //console.log("test");
      //     this.book = this.randomIntFromInterval(0,65);
      //     this.chapter = this.randomIntFromInterval(0,10);
      //     this.verses = this.randomIntFromInterval(0,10);
      //     if(this.data.Book[this.book]?.Chapter[this.chapter]?.Verse[this.verses]?.Verse){
      //       this.notificationService.success(`${this.books[this.book+1]} : ${this.chapter+1} : ${this.verses+1}`,this.data.Book[this.book].Chapter[this.chapter].Verse[this.verses].Verse);
      //       //this.pushNotificationsService.sendPushNotification("Praise the lord",this.data.Book[this.book].Chapter[this.chapter].Verse[this.verses].Verse);

      //     }
      //     else{
      //       console.log(`${this.books[this.book+1]} : ${this.chapter+1} : ${this.verses+1}`);

      //     }
      //   },err =>{
      //     console.log("handling error");
      //   }
      // );
    });

    // this.bibleStoreService.puppies$.subscribe(
    //   res => {
    //     console.log(res);

    //   }
    // );

    // setTimeout(() => {

    // }, 1000 * 5);
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
    //this.audio.play();
    //console.log(form.value);
    this.bibleStoreService.addPuppy(form.value);
    this.book = +form.value.Book + 1;
    this.chapter = form.value.Chapter;

    //this.audioService.setAudio(`http://sajeevavahini.com/audiobible/${this.book}/${this.chapter}.mp3`);
    //this.audioService.audio.toggleAttribute()
    //console.log(this.audioService);
    this.resData =
      this.data.Book[form.value.Book]?.Chapter[form.value.Chapter - 1];
    //console.log(this.resData);
  }
  onPlayer() {
    this.audioService.toggleAudio();
    //this.audioService.audio.toggleAttribute("toggles",true);
    //console.log( this.audioService.audio.paused);
    //this.audioService.pauseAudio();
    //this.audioService.audio.paused
    //console.log( this.audioService.playerStatus);
    // if(this.audioService.playerStatus.isStopped)
    // {
    //   this.audioService.toggleAudio();
    // }
  }

  onVerse(book: string, chapter: string, verseNumber: string, verse: Verse) {
    //console.log(form.value, verse);
    this.bsModalService.show(BibleVerseDetailComponent, {
      initialState: { book, chapter, verseNumber, verse },
      animated: true,
      class: "modal-lg",
    });
  }

  showNewListModal(template: TemplateRef<any>): void {
    this.newListModalRef = this.modalService.show(template);
    //this.newListModalRef.content.
    setTimeout(() => document.getElementById("title").focus(), 250);
  }


 
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }
 
  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
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
