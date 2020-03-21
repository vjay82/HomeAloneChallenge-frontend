import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Location} from "@angular/common";

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
