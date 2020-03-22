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
    let query = window.location.search;
    let index = query.indexOf("demo=");
    if (index == -1) {
      console.log("Demo mode is:", store.isDemoMode());
    } else {
      let bDemo: boolean = query.indexOf("demo=true") != -1;
      if (store.isDemoMode() == bDemo) {
        console.log("Demo mode is:", store.isDemoMode());
      } else {
        store.setDemoMode(bDemo);
        console.log("Set demo mode to:", bDemo);
      }
    }
  }
}
