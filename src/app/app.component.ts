import { Component } from "@angular/core";

import { Challenge } from "./classes/challenge";
import { ActivatedRoute } from "@angular/router";

import { Store } from "./storage/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "HomeAloneChallengeFrontend";

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.activatedRoute.queryParams.subscribe(params => {
      let demo = params["demo"];
      if (demo !== "undefined") {
        let bDemo: boolean = demo == "true";
        store.setDemoVersion(bDemo);
        console.log("Set demo mode to: " + bDemo);
      }
    });
  }
}
