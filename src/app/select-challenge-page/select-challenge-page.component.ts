import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ApiService } from "../api-service/api.service";
import { Challenge } from "../classes/challenge";

@Component({
  selector: "app-select-challenge-page",
  templateUrl: "./select-challenge-page.component.html",
  styleUrls: ["./select-challenge-page.component.scss"]
})
export class SelectChallengePageComponent implements OnInit {
  public dailyChallenge$: Promise<Challenge>;

  constructor(private api: ApiService, public location: Location) {
    //this.dailyChallenge$ = this.api.getDailyChallenge();
  }

  ngOnInit(): void {}
}
