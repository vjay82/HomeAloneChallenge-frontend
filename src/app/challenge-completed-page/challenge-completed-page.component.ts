import { Component, OnInit } from '@angular/core';
import {Store} from "../storage/store";

@Component({
  selector: 'app-challenge-completed-modal',
  templateUrl: './challenge-completed-page.component.html',
  styleUrls: ['./challenge-completed-page.component.scss']
})
export class ChallengeCompletedPageComponent implements OnInit {
  title: string;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.title = this.store.getActiveChallenge().title;

    this.store.setActiveChallenge(null);
    this.store.setActiveChallengeTimer(null);
  }

}
