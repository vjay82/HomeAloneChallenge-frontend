import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { ChallengePageComponent } from "./challenge-page/challenge-page.component";
import { ProposalPageComponent } from "./proposal-page/proposal-page.component";
import { ApiService } from "./api-service/api.service";
import { HttpClientModule } from '@angular/common/http';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { PersistenceModule } from 'angular-persistence';
import { ChallengeCompletedPageComponent } from './challenge-completed-page/challenge-completed-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChallengePageComponent,
    ProposalPageComponent,
    GreetingPageComponent,
    ChallengeCompletedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    PersistenceModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
