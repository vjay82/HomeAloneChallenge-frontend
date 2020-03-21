import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-completed-modal',
  templateUrl: './challenge-completed-page.component.html',
  styleUrls: ['./challenge-completed-page.component.scss']
})
export class ChallengeCompletedPageComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }

}
