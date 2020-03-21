import {AfterViewInit, Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Location} from "@angular/common";
import {Challenge} from "../classes/challenge";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-challenge-page',
  templateUrl: './challenge-page.component.html',
  styleUrls: ['./challenge-page.component.scss']
})
export class ChallengePageComponent {

  challenge: Challenge = {
    id: 'abcdefg',
    title: 'Title for sport challenge',
    description: 'Wet your hands, scrub everywhere (under those fingernails, too) with soap for at least 20 seconds, then rinse and dry well with a clean towel.',
    category: 'sport',
    additionalLink: '',
    rewardPoints: 10,
    duration: 666,
  };

  constructor(
    public location: Location,
  ) {
  }

}
