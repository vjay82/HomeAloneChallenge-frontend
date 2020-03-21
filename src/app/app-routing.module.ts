import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GreetingPageComponent } from "./greeting-page/greeting-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ChallengePageComponent } from "./challenge-page/challenge-page.component";
import { ProposalPageComponent } from "./proposal-page/proposal-page.component";

const routes: Routes = [
  { path: "", component: GreetingPageComponent },
  { path: "main", component: MainPageComponent },
  { path: "challenge", component: ChallengePageComponent },
  { path: "proposal", component: ProposalPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
