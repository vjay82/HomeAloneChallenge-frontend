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

  ngOnInit(): void {}
}
