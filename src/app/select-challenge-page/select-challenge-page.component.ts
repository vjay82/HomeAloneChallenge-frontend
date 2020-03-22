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

  challenge: Challenge = {
    id: 'abcdefg',
    title: 'Title for sport challenge',
    description: 'Wet your hands, scrub everywhere (under those fingernails, too) with soap for at least 20 seconds, then rinse and dry well with a clean towel.',
    category: 'sport',
    additionalLink: '',
    rewardPoints: 10,
    duration: 666,
  };

  constructor(private api: ApiService, public location: Location) {
    //this.dailyChallenge$ = this.api.getDailyChallenge();
  }

  ngOnInit(): void {}
}
