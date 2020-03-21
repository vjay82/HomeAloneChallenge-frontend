import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChallengeCompletedPageComponent} from "../challenge-completed-page/challenge-completed-page.component";
import {Location} from "@angular/common";
import {Challenge} from "../api-service/challenge";

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit, AfterViewInit {

  challenge = {
    category: 'Physisch',

  };

  constructor(
    private modalService: NgbModal,
    public location: Location,
  ) {
  }

  ngOnInit(): void {
  }

  challengeCompleted() {
    // open Modal
    // this.modalService.open(ChallengeCompletedPageComponent, {centered: true});

    // share to facebook

  }

  ngAfterViewInit(): void {

  }
}
