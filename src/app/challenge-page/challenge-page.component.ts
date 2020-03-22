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
  timerOutput: String = "00 h : 00 min : 00 sec"; // emtry string
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

    this.startTime = Math.ceil(new Date().getTime() / 1000);

    if (this.store.getActiveChallengeTimer() == null) {
      this.store.setActiveChallengeTimer(this.startTime)
    } else {
      this.startTime = this.store.getActiveChallengeTimer();
    }  

    this.timerInterval = setInterval(() => {
      this.timerOutput = this.getTimeFromSeconds(this.getDeltaSeconds(this.startTime));
   }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  getDeltaSeconds(secs: number) {
    return Math.ceil(new Date().getTime() / 1000) - secs;

  }

  getTimeFromSeconds(seconds: number) {
    
    var hours   = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var seconds = seconds - (hours * 3600) - (minutes * 60);

    var sHours = (hours < 10) ? "0"+hours.toString() : hours.toString();
    var sMinutes = (minutes < 10) ? "0"+minutes.toString() : minutes.toString();
    var sSeconds = (seconds < 10) ? "0"+seconds.toString() : seconds.toString();

    return sHours+' h : '+sMinutes+' min : '+sSeconds + " sec";

  }

  public cancel() {
    this.store.setActiveChallenge(null);
    this.store.setActiveChallengeTimer(null);
    this.router.navigate([`/challenge/canceled`]);
  }
}
