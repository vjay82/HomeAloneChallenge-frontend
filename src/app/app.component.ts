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
      // switch to challenge if store contains activeChallenge

      let demo = params["demo"];
      if (demo == undefined) {
        console.log("Demo mode is:", store.isDemoMode());
      } else {
        let bDemo: boolean = demo == "true";
        if (store.isDemoMode() == bDemo) {
          console.log("Demo mode is:", store.isDemoMode());
        } else {
          store.setDemoMode(bDemo);
          console.log("Set demo mode to:", bDemo);
        }
      }
    });
  }
}
