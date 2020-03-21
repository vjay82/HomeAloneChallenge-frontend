import { Component, OnInit } from "@angular/core";
import { ApiService } from '../api-service/api.service';

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDailyTip().then(data => {
      // Do futher requests
      console.log(data);
      
    }).catch(err => {
      console.error(err)
    })

  }
}
