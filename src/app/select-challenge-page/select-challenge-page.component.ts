import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-select-challenge-page",
  templateUrl: "./select-challenge-page.component.html",
  styleUrls: ["./select-challenge-page.component.scss"]
})
export class SelectChallengePageComponent implements OnInit {
  constructor(public location: Location) {}

  ngOnInit(): void {}
}
