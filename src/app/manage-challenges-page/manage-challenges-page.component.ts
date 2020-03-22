import { Component, OnInit } from "@angular/core";
import { Challenge } from "../classes/challenge";
import { Router } from "@angular/router";
import { ApiService } from "../api-service/api.service";
import { Store } from "../storage/store";
import {Location} from "@angular/common";

@Component({
  selector: "app-manage-challenges",
  templateUrl: "./manage-challenges-page.component.html",
  styleUrls: ["./manage-challenges-page.component.scss"]
})
export class ManageChallengesPageComponent implements OnInit {

  challenges$: Promise<Challenge[]>;

  constructor(
    private router: Router,
    private api: ApiService,
    private store: Store,
    public location: Location,
  ) {
    this.challenges$ = this.api.getAllChallengesOfUser();
  }

  public selectChallenge(challenge: Challenge) {
    this.store.setChallengeInEditor(challenge);
    this.router.navigate([`/challenge/create`]);
  }

  public createChallenge() {
    this.store.setChallengeInEditor(null);
    this.router.navigate([`/challenge/create`]);
  }

  ngOnInit(): void {}
}
