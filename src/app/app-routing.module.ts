import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GreetingPageComponent } from "./greeting-page/greeting-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { FeedbackPageComponent } from "./feedback-page/feedback-page.component";
import { ChallengePageComponent } from "./challenge-page/challenge-page.component";
import { HelpPageComponent } from "./help-page/help-page.component";
import { CreateChallengePageComponent } from "./create-challenge-page/create-challenge-page.component";
import { ChallengeCompletedPageComponent } from "./challenge-completed-page/challenge-completed-page.component";
import { ChallengeCanceledPageComponent } from "./challenge-canceled-page/challenge-canceled-page.component";

const routes: Routes = [
  { path: "", component: GreetingPageComponent },
  { path: "main", component: MainPageComponent },
  { path: "challenge", component: ChallengePageComponent },
  { path: "challenge/completed", component: ChallengeCompletedPageComponent },
  { path: "challenge/canceled", component: ChallengeCanceledPageComponent },
  { path: "challenge/create", component: CreateChallengePageComponent },
  { path: "feedback", component: FeedbackPageComponent },
  { path: "help", component: HelpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
