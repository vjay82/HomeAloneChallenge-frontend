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
  startTime: number;
  timerOutput: string;
  timerInterval;

  constructor(
    public location: Location,
    private store: Store,
    private router: Router
  ) {
    this.challenge = store.getActiveChallenge();

    if (this.challenge == null) {
      this.router.navigate([`/main`]);
    }
    if (this.challenge === null) {
      // No active challenge --> back to mainpage
      this.router.navigate([`/main`]);
    }
  }

  ngOnInit() {
    // Set timer and count up

    if (this.store.getActiveChallengeTimer() == null) {
      this.startTime = new Date().getTime();
      this.store.setActiveChallengeTimer(this.startTime);
    } else {
      this.startTime = this.store.getActiveChallengeTimer();
    }

    this.updateTime();

    this.timerInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  updateTime() {
    let sec = this.getDeltaSeconds();
    if (sec >= 0) {
      this.timerOutput = this.getTimeFromSeconds(sec);
    } else {
      this.handleCancel();
    }
  }

  getDeltaSeconds() {
    return (
      24 * 60 * 60 - Math.ceil((new Date().getTime() - this.startTime) / 1000)
    );
  }

  getTimeFromSeconds(seconds: number) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - hours * 3600) / 60);
    var seconds = seconds - hours * 3600 - minutes * 60;

    var sHours = hours < 10 ? "0" + hours.toString() : hours.toString();
    var sMinutes = minutes < 10 ? "0" + minutes.toString() : minutes.toString();
    var sSeconds = seconds < 10 ? "0" + seconds.toString() : seconds.toString();

    return sHours + " h : " + sMinutes + " m : " + sSeconds + " s";
  }

  public handleComplete() {
    this.store.setActiveChallengeTimer(null);
    this.router.navigate([`/challenge/completed`]);
  }

  public handleCancel() {
    this.store.setActiveChallenge(null);
    this.store.setActiveChallengeTimer(null);
    this.router.navigate([`/challenge/canceled`]);
  }
}
