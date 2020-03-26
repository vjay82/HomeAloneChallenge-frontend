import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-service/api.service";

@Component({
  selector: "app-greeting-page",
  templateUrl: "./greeting-page.component.html",
  styleUrls: ["./greeting-page.component.scss"]
})
export class GreetingPageComponent implements OnInit {
  constructor(private api: ApiService) {
    api.getDailyTip(); // early wakeup of Heroku
    api.getDailyChallenge();
  }

  ngOnInit(): void {}
}
