import { Component } from '@angular/core';
import {ApiService} from "./api-service/api.service";
import { Challenge } from './classes/challenge';

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
    this.apiService.getRandomChallenge().subscribe((data: Challenge) => console.log(data));
  }


}
