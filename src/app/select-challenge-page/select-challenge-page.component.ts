import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { ApiService } from "../api-service/api.service";
import { Challenge } from "../classes/challenge";
import { Category } from "../classes/category";
import { Store } from "../storage/store";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-select-challenge-page",
  templateUrl: "./select-challenge-page.component.html",
  styleUrls: ["./select-challenge-page.component.scss"]
})
export class SelectChallengePageComponent implements OnInit {
  public dailyChallenge$: Promise<Challenge>;
  public categories: string[];

  constructor(
    private router: Router,
    private api: ApiService,
    public location: Location,
    private store: Store
  ) {
    this.dailyChallenge$ = this.api.getDailyChallenge();
    this.categories = Object.keys(Category);
  }

  public selectCategory(category: string) {
    this.api.getRandomChallenge(category).then(challenge => {
      this.store.setActiveChallenge(challenge);
      this.router.navigate([`/challenge`]);
    });
  }

  ngOnInit(): void {}
}
