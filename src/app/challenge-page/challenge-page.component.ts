import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ChallengeCompletedModalComponent} from "./challenge-completed-modal/challenge-completed-modal.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent implements OnInit, AfterViewInit {

  constructor(
    private modalService: NgbModal,
    public location: Location,
  ) {
  }

  ngOnInit(): void {
  }

  challengeCompleted() {
    // open Modal
    this.modalService.open(ChallengeCompletedModalComponent, {centered: true});

    // share to facebook

  }

  ngAfterViewInit(): void {

  }
}
