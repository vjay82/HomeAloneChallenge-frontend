import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Challenge } from './challenge';
import { Tipp } from './tipp';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = "http://localhost/api"

  constructor(private httpClient: HttpClient) { 

  }

  getRandomChallenge() {
    return this.httpClient.get<Challenge>(`${this.apiURL}/random/challenge`);
  }

  getRandomTip() {
    return this.httpClient.get<Tipp>(`${this.apiURL}/random/tipp`);
  }


}
