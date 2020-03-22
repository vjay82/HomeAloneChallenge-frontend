import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-challenge-page',
  templateUrl: './create-challenge-page.component.html',
  styleUrls: ['./create-challenge-page.component.scss']
})
export class CreateChallengePageComponent implements OnInit {

  constructor(public location: Location, private router: Router) { }

  ngOnInit(): void {
  }

  onClickCreateChallenge() {
    console.log("Creating challenge!")
    // TODO: make API call and submit challenge

    // TODO: save as current state in storage
    
    this.router.navigateByUrl("/main")
  }

}
