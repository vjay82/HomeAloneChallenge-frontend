import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-service/api.service";
import { Tipp } from "../classes/tipp";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  public tipp$: Promise<Tipp>;

  constructor(private api: ApiService) {
    this.tipp$ = this.api.getDailyTip();
  }

  ngOnInit(): void {}
}
