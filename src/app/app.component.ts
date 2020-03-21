import { Component } from '@angular/core';
import {ApiService} from "./api-service/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeAloneChallengeFrontend';

  constructor(
    private apiService: ApiService,
  ) {
    this.apiService.getDailyChallenge();
  }

}
