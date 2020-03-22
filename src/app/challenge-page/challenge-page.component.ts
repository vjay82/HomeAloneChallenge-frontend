import { AfterViewInit, Component, OnInit, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { Challenge } from "../classes/challenge";
import { ActivatedRoute } from "@angular/router";
import { Store } from "../storage/store";

@Component({
  selector: "app-challenge-page",
  templateUrl: "./challenge-page.component.html",
  styleUrls: ["./challenge-page.component.scss"]
})
export class ChallengePageComponent {
  challenge: Challenge;

  constructor(public location: Location, private store: Store) {
    this.challenge = store.getActiveChallenge();
  }
}
