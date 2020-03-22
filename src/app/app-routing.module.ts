import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GreetingPageComponent } from "./greeting-page/greeting-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { FeedbackPageComponent } from "./feedback-page/feedback-page.component";
import { ChallengePageComponent } from "./challenge-page/challenge-page.component";
import { ChallengeCompletedPageComponent } from "./challenge-completed-page/challenge-completed-page.component";
import { HelpPageComponent } from "./help-page/help-page.component";
import { CreateChallengePageComponent } from "./create-challenge-page/create-challenge-page.component";
import { ChallengeCanceledPageComponent } from "./challenge-canceled-page/challenge-canceled-page.component";
import { SelectChallengePageComponent } from "./select-challenge-page/select-challenge-page.component";
import { ManageChallengesPageComponent } from "./manage-challenges-page/manage-challenges-page.component";
import { RevardTreePageComponent } from "./revard-tree-page/revard-tree-page.component";

const routes: Routes = [
  { path: "", component: GreetingPageComponent },
  { path: "main", component: MainPageComponent },
  { path: "challenge", component: ChallengePageComponent },
  { path: "challenge/completed", component: ChallengeCompletedPageComponent },
  { path: "challenge/canceled", component: ChallengeCanceledPageComponent },
  { path: "challenge/create", component: CreateChallengePageComponent },
  { path: "challenge/manage", component: ManageChallengesPageComponent },
  { path: "selectChallenge", component: SelectChallengePageComponent },
  { path: "feedback", component: FeedbackPageComponent },
  { path: "help", component: HelpPageComponent },
  { path: "revard", component: RevardTreePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
