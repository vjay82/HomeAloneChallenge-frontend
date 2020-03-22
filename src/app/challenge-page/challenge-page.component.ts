import { AfterViewInit, Component, OnInit, TemplateRef } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { Challenge } from "../classes/challenge";
import { ActivatedRoute } from "@angular/router";
import { Store } from "../storage/store";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "app-challenge-page",
  templateUrl: "./challenge-page.component.html",
  styleUrls: ["./challenge-page.component.scss"]
})
export class ChallengePageComponent {
  challenge: Challenge;

  constructor(
    public location: Location,
    private store: Store,
    private router: Router
  ) {
    this.challenge = store.getActiveChallenge();

    if (this.challenge == null) {
      this.router.navigate([`/main`]);
    }
  }

  public cancel() {
    this.store.setActiveChallenge(null);
    this.router.navigate([`/challenge/canceled`]);
  }
}
