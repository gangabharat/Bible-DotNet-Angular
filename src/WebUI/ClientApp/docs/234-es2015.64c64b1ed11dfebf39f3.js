(self.webpackChunkbible_webui=self.webpackChunkbible_webui||[]).push([[234],{7234:function(e,t,i){"use strict";i.r(t),i.d(t,{BibleModule:function(){return P}});var s=i(1116),a=i(7091),n=i(7368),o=i(7981);let r=(()=>{class e{constructor(e){this._http=e,this._bibleLanguage="english",this._bibleLanguagePath="assets/bible/english/bible.json",this.bibleLanguages=["afrikaans","bengali","english","gujarati","hindi","indonesian","kannada","malayalam","nepali","oriya","punjabi","sepedi","tamil","telugu","xhosa","zulu"]}set BibleLanguage(e){let t=this.bibleLanguages.find(t=>t==e.toLowerCase());t&&(this._bibleLanguagePath=`assets/bible/${t}/bible.json`,this._bibleLanguage=t)}get BibleLanguage(){return this._bibleLanguage}getBible(){return this._http.get({url:this._bibleLanguagePath,cacheMins:0})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o.Yh))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=i(3969);let u=(()=>{class e{constructor(e){this.cacheService=e,this.dataBibleVerse=new n.vpe,this.data=[],this.data=e.load("bible-recent")}save(e){this.cacheService.save({key:"bible-recent",data:this.data,expirationMins:1440}),this.dataBibleVerse.emit(this.data),console.log(this.data)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(l.Q))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function h(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",5),n.NdJ("click",function(){const t=n.CHM(e).index,i=n.oxw(2);return i.onVerse(i.form,t)}),n.TgZ(1,"b"),n._uU(2),n.qZA(),n._uU(3),n.qZA()}if(2&e){const e=t.$implicit,i=t.index;n.xp6(2),n.hij("",i+1," : "),n.xp6(1),n.hij("",e.Verse," ")}}function c(e,t){if(1&e&&(n.TgZ(0,"div",1),n.TgZ(1,"div",2),n.TgZ(2,"button",3),n._uU(3),n.qZA(),n.YNc(4,h,4,2,"button",4),n.qZA(),n.qZA()),2&e){const e=n.oxw();n.xp6(3),n.AsE(" ",e.books[e.bibleBook-1]," : ",e.bibleChapters," "),n.xp6(1),n.Q6J("ngForOf",e.resData.Verse)}}let p=(()=>{class e{constructor(e,t,i){this.bibleService=e,this.route=t,this.recent=i,this.bibleChapters=0,this.bibleBook=0,this.bibleVerse=[],this.books=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],this.route.params.subscribe(e=>{this.bibleBook=e.book,this.bibleChapters=e.chapter})}ngOnInit(){this.bibleService.getBible().subscribe(e=>{this.resData=e.Book[this.bibleBook-1].Chapter[this.bibleChapters-1]}),this.recent.save({Book:this.bibleBook-1,Chapter:this.bibleChapters-1,Verse:0})}addNew(){}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r),n.Y36(a.gz),n.Y36(u))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bible-book-chapter"]],decls:1,vars:1,consts:[["class","",4,"ngIf"],[1,""],[1,"list-group"],["type","button",1,"list-group-item","list-group-item-action","active"],["type","button","class","list-group-item list-group-item-action",3,"click",4,"ngFor","ngForOf"],["type","button",1,"list-group-item","list-group-item-action",3,"click"]],template:function(e,t){1&e&&n.YNc(0,c,5,3,"div",0),2&e&&n.Q6J("ngIf",t.resData)},directives:[s.O5,s.sg],styles:[""]}),e})(),b=(()=>{class e{constructor(e,t){this.bibleService=e,this.route=t,this.bibleBook=0,this.route.params.subscribe(e=>{this.bibleBook=e.book})}ngOnInit(){this.bibleService.getBible().subscribe(e=>{this.resData=e.Book[this.bibleBook]})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r),n.Y36(a.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bible-book"]],decls:4,vars:3,consts:[[1,""],[1,"alert","alert-primary",2,"font-family","Verdana, Geneva, Tahoma, sans-serif","font-size","large"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n._uU(2),n.ALo(3,"json"),n.qZA(),n.qZA()),2&e&&(n.xp6(2),n.hij(" ",n.lcZ(3,1,t.resData)," "))},pipes:[s.Ts],styles:[""]}),e})();var d=i(5291);let g=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bible-verse-detail"]],decls:6,vars:4,consts:[[1,"card-body"],[1,"card-text"],[1,"card-title"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"h2"),n._uU(3),n.qZA(),n.qZA(),n.TgZ(4,"h1",2),n._uU(5),n.qZA(),n.qZA()),2&e&&(n.xp6(3),n.Oqu(t.verse.Verse),n.xp6(2),n.lnq("",t.book," ",t.chapter," : ",t.verseNumber,""))},styles:[""]}),e})();var m=i(8512);let f=(()=>{class e{constructor(){this._puppiesSource=new m.X([]),this.puppies$=this._puppiesSource.asObservable()}getPuppies(){return this._puppiesSource.getValue()}_setPuppies(e){this._puppiesSource.next(e)}addPuppy(e){const t=[...this.getPuppies(),e];this._setPuppies(t)}removePuppy(e){const t=this.getPuppies().filter(t=>t.Book!==e.Book);this._setPuppies(t)}adoptPuppy(e){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=i(3492);let k=(()=>{class e{constructor(e){this.toastr=e}info(e,t,i){this.toastr.info(t,e,i)}success(e,t,i){this.toastr.success(t,e,i)}warning(e,t,i){this.toastr.warning(t,e,i)}error(e,t,i){this.toastr.error(t,e,i)}show(e,t,i){this.toastr.show(t,e,i)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(v._W))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var Z=i(9717);let y=(()=>{class e{constructor(){this.timeElapsed=new m.X("00:00"),this.timeRemaining=new m.X("-00:00"),this.percentElapsed=new m.X(0),this.percentLoaded=new m.X(0),this.playerStatus=new m.X("paused"),this.calculateTime=e=>{let t=this.audio.currentTime,i=this.audio.duration;this.setTimeElapsed(t),this.setPercentElapsed(i,t),this.setTimeRemaining(i,t)},this.calculatePercentLoaded=e=>{if(this.audio.duration>0)for(var t=0;t<this.audio.buffered.length;t++)if(this.audio.buffered.start(this.audio.buffered.length-1-t)<this.audio.currentTime){let e=this.audio.buffered.end(this.audio.buffered.length-1-t)/this.audio.duration*100;this.setPercentLoaded(e);break}},this.setPlayerStatus=e=>{switch(e.type){case"playing":this.playerStatus.next("playing");break;case"pause":this.playerStatus.next("paused");break;case"waiting":this.playerStatus.next("loading");break;case"ended":this.playerStatus.next("ended");break;default:this.playerStatus.next("paused")}},this.audio=new Audio,this.attachListeners()}attachListeners(){this.audio.addEventListener("timeupdate",this.calculateTime,!1),this.audio.addEventListener("playing",this.setPlayerStatus,!1),this.audio.addEventListener("pause",this.setPlayerStatus,!1),this.audio.addEventListener("progress",this.calculatePercentLoaded,!1),this.audio.addEventListener("waiting",this.setPlayerStatus,!1),this.audio.addEventListener("ended",this.setPlayerStatus,!1)}getAudio(){return this.audio}setAudio(e){this.audio.src=e,this.playAudio()}playAudio(){this.audio.play()}pauseAudio(){this.audio.pause()}seekAudio(e){this.audio.currentTime=e}setTimeElapsed(e){let t=Math.floor(e%60),i=t<10?"0"+t:t,s=Math.floor(e/60%60);this.timeElapsed.next((s<10?"0"+s:s)+":"+i)}setTimeRemaining(e,t){let i,s=e-t,a=Math.floor(s%60)||0,n=a<10?"0"+a:a,o=Math.floor(s/60%60)||0,r=o<10?"0"+o:o,l=Math.floor(s/60/60%60)||0;i=0===l?"-"+r+":"+n:"-"+l+":"+r+":"+n,this.timeRemaining.next(i)}setPercentElapsed(e,t){this.percentElapsed.next(Math.floor(100/e*t)||0)}setPercentLoaded(e){this.percentLoaded.next(parseInt(e,10)||0)}getPercentLoaded(){return this.percentLoaded.asObservable()}getPercentElapsed(){return this.percentElapsed.asObservable()}getTimeElapsed(){return this.timeElapsed.asObservable()}getTimeRemaining(){return this.timeRemaining.asObservable()}getPlayerStatus(){return this.playerStatus.asObservable()}toggleAudio(){this.audio.paused?this.audio.play():this.audio.pause()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=i(2835),T=i(1462);const L=["form"];function A(e,t){if(1&e&&(n.TgZ(0,"option",16),n._uU(1),n.qZA()),2&e){const e=t.$implicit;n.s9C("value",t.index),n.xp6(1),n.hij(" ",e," ")}}function w(e,t){if(1&e&&(n.TgZ(0,"option",17),n._uU(1),n.qZA()),2&e){const e=t.$implicit,i=n.oxw();n.Q6J("value",e)("selected",i.selectedbibleLanguage),n.xp6(1),n.hij(" ",e," ")}}function J(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"button",20),n.NdJ("click",function(){const t=n.CHM(e),i=t.index,s=t.$implicit,a=n.oxw(2);return a.onVerse(a.books[a.book-1],a.chapter,i+1,s)}),n.TgZ(1,"b"),n._uU(2),n.qZA(),n._uU(3),n.qZA()}if(2&e){const e=t.$implicit,i=t.index;n.xp6(2),n.hij("",i+1," : "),n.xp6(1),n.hij("",e.Verse," ")}}function C(e,t){if(1&e&&(n.TgZ(0,"div",18),n.YNc(1,J,4,2,"button",19),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.resData.Verse)}}const x=[{path:"",component:(()=>{class e{constructor(e,t,i,s,a,n,o,r){this.bibleService=e,this.bibleStoreService=t,this.notificationService=i,this.pushNotificationsService=s,this.audioService=a,this.modalService=n,this.cacheService=o,this.bsModalService=r,this.faBookOpen=d.SvR,this.book=0,this.chapter=0,this.verses=0,this.bibleLanguages=[],this.loadPercentage=0,this.books=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalm","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"],this.pushNotificationsService.requestPermission()}ngOnInit(){this.bibleLanguages=this.bibleService.bibleLanguages;let e=localStorage.getItem("bibleLanguage");e&&(this.bibleService.BibleLanguage=e),this.bibleService.getBible().subscribe(e=>{this.data=e,this.onChangeEvent(this.form)})}randomIntFromInterval(e,t){return Math.floor(Math.random()*(t-e+1)+e)}onSubmit(e){this.onChangeEvent(e)}onbibleLanguagesChangeEvent(e){localStorage.setItem("bibleLanguage",e),e&&(this.bibleService.BibleLanguage=e),this.bibleService.getBible().subscribe(e=>{this.data=e,this.onChangeEvent(this.form)})}onChangeEvent(e){var t;this.bibleStoreService.addPuppy(e.value),this.book=+e.value.Book+1,this.chapter=e.value.Chapter,this.resData=null===(t=this.data.Book[e.value.Book])||void 0===t?void 0:t.Chapter[e.value.Chapter-1]}onVerse(e,t,i,s){this.bsModalService.show(g,{initialState:{book:e,chapter:t,verseNumber:i,verse:s},animated:!0,class:"modal-lg"})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r),n.Y36(f),n.Y36(k),n.Y36(Z.Z),n.Y36(y),n.Y36(S.tT),n.Y36(l.Q),n.Y36(S.tT))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-bible"]],viewQuery:function(e,t){if(1&e&&n.Gf(L,5),2&e){let e;n.iGM(e=n.CRH())&&(t.form=e.first)}},decls:25,vars:5,consts:[[1,"list-group","mb-5"],[1,"list-group-item","list-group-item-action","active","sticky-top"],[3,"ngSubmit"],["form","ngForm"],[1,"row"],[1,"col"],["name","Book","ngModel","",1,"form-control",3,"ngModel","change"],["Book","ngModel"],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Chapter","name","Chapter","min","1","max","66","ngModel","",1,"form-control",3,"ngModel","change"],["Chapter","ngModel"],[1,"form-control",3,"change"],["bibleLanguagesId",""],["value","-1"],[3,"value","selected",4,"ngFor","ngForOf"],["class","",4,"ngIf"],[3,"value"],[3,"value","selected"],[1,""],["type","button","class","list-group-item list-group-item-action card-shadow",3,"click",4,"ngFor","ngForOf"],["type","button",1,"list-group-item","list-group-item-action","card-shadow",3,"click"]],template:function(e,t){if(1&e){const e=n.EpF();n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"form",2,3),n.NdJ("ngSubmit",function(){n.CHM(e);const i=n.MAs(3);return t.onSubmit(i)}),n.TgZ(4,"div",4),n.TgZ(5,"div",5),n.TgZ(6,"label"),n._uU(7,"Book"),n.qZA(),n.TgZ(8,"select",6,7),n.NdJ("change",function(){n.CHM(e);const i=n.MAs(3);return t.onChangeEvent(i)}),n.YNc(10,A,2,2,"option",8),n.qZA(),n.qZA(),n.TgZ(11,"div",5),n.TgZ(12,"label"),n._uU(13,"Chapter"),n.qZA(),n.TgZ(14,"input",9,10),n.NdJ("change",function(){n.CHM(e);const i=n.MAs(3);return t.onChangeEvent(i)}),n.qZA(),n.qZA(),n.TgZ(16,"div",5),n.TgZ(17,"label"),n._uU(18,"Language"),n.qZA(),n.TgZ(19,"select",11,12),n.NdJ("change",function(){n.CHM(e);const i=n.MAs(20);return t.onbibleLanguagesChangeEvent(i.value)}),n.TgZ(21,"option",13),n._uU(22,"--select--"),n.qZA(),n.YNc(23,w,2,3,"option",14),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.YNc(24,C,2,1,"div",15),n.qZA()}2&e&&(n.xp6(8),n.Q6J("ngModel",0),n.xp6(2),n.Q6J("ngForOf",t.books),n.xp6(4),n.Q6J("ngModel",1),n.xp6(9),n.Q6J("ngForOf",t.bibleLanguages),n.xp6(1),n.Q6J("ngIf",t.resData))},directives:[T._Y,T.JL,T.F,T.EJ,T.JJ,T.On,s.sg,T.qQ,T.Fd,T.wV,T.Fj,T.YN,T.Kr,s.O5],styles:[""]}),e})()},{path:":book",component:b},{path:":book/:chapter",component:p}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.Bz.forChild(x)],a.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.ez,T.u5,E]]}),e})()}}]);