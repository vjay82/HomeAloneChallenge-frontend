import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

@Component({
  selector: "app-feedback-page",
  templateUrl: "./feedback-page.component.html",
  styleUrls: ["./feedback-page.component.scss"]
})
export class FeedbackPageComponent implements OnInit {
  constructor(public location: Location) {}

  ngOnInit(): void {}

  onClickSendFeedBack() {
    alert(
      "Feedback absenden geht noch nicht aber Du kannst es uns ja auch gerne im Slackchannel #coding-homealonechallenge hinterlassen :)"
    );
  }
}
