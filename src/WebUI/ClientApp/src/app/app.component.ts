import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { HttpClientService } from "./shared/http-client.service";
import { NotificationService } from "./shared/notification.service";
import { PushNotificationsService } from "./shared/push-notification.service";
import { interval, Observable, of, forkJoin, from } from "rxjs";
import { map, tap } from "rxjs/operators";
import { ManageHttpRequestService } from "./shared/manage-http-request.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "app";

  public loadData: string[] = [];
  public isLoading: boolean = false;

  constructor(
    private httpClient: HttpClientService,
    private pushNotification: PushNotificationsService,
    private ts: ToastrService,
    private notificationService: NotificationService,
    private httpRequesthandler : ManageHttpRequestService
  ) {}

  ngOnInit() {
    // this.loadUsers().then(res =>{
    //   //console.log(res);
    // })
    this.httpRequesthandler.httpLoader.subscribe(
      (res : boolean )=>{
        this.isLoading = res;
      }
    );
    this.httpClient.get({url:"https://jsonplaceholder.typicode.com/photos"}).subscribe();
  }

  // loadUsers(): Promise<any[]> {
  //   return fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json());
  // }
}
