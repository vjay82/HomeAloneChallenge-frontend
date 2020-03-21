import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-challenge-completed-modal',
  templateUrl: './challenge-completed-modal.component.html',
  styleUrls: ['./challenge-completed-modal.component.scss']
})
export class ChallengeCompletedModalComponent implements OnInit {
  constructor(
    public modal: NgbActiveModal,
  ) { }

  ngOnInit(): void {
    // @ts-ignore
    twttr.widgets.load();
  }

}
