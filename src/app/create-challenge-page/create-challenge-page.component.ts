import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-create-challenge-page',
  templateUrl: './create-challenge-page.component.html',
  styleUrls: ['./create-challenge-page.component.scss']
})
export class CreateChallengePageComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
