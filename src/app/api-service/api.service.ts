import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Challenge } from '../classes/challenge';
import { Tipp } from '../classes/tipp';
import { Store } from '../storage/store';
import { UserData } from '../classes/user-data';
import { error } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = "http://localhost/api/v1"

  constructor(private httpClient: HttpClient, private storage: Store) { 

  }

  checkUserId(): void {
    console.log(this.storage.getUserId())
    if (this.storage.getUserId() == undefined) {
      // Do API request toget UID
      this.createUniqueId().subscribe((data: UserData) => {
        this.storage.setUserId(data.userId);
      });
      
    }
  }

  getDailyTip() {
    return this.httpClient.get<Tipp>(`${this.apiURL}/tip/daily`);
  }

  createUniqueId() {
    return this.httpClient.get<UserData>(`${this.apiURL}/user-id`)
  }

  fetchAllChallenges() {    
    return this.httpClient.get<Challenge[]>(`${this.apiURL}/users/${this.storage.getUserId()}/challenges`);
  }

  createNewChallenge(challenge: Challenge) {
    return this.httpClient.post(`${this.apiURL}/users/${this.storage.getUserId()}/challenges`, challenge);
  }

  getChallenge(challengeId: String) {
    return this.httpClient.get<Challenge>(`${this.apiURL}/users/${this.storage.getUserId()}/challenges/${challengeId}`)
  }

  getRandomChallenge() {
    return this.httpClient.get<Challenge>(`${this.apiURL}/users/${this.storage.getUserId()}/challenges/`)
  } 


}
