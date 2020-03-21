import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Challenge } from '../classes/challenge';
import { Tipp } from '../classes/tipp';
import { Store } from '../storage/store';
import { UserData } from '../classes/user-data';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = "http://localhost/api/v1"

  constructor(private httpClient: HttpClient, private storage: Store) { 

  }

  checkAndGetUserId() {
    let userId = this.storage.getUserId();
    if (userId == undefined) {
      // Do API request toget UID

    } else {
      return userId;
    }
  }

  getDailyTip() {
    return this.httpClient.get<Tipp>(`${this.apiURL}/tip/daily`);
  }

  createUniqueId() {
    return this.httpClient.get<UserData>(`${this.apiURL}/user-id`)
  }

  fetchAllChallenges(userId: String) {    
    return this.httpClient.get<Challenge[]>(`${this.apiURL}/users/${userId}/challenges`);
  }

  createNewChallenge(userId: String, challenge: Challenge) {
    return this.httpClient.post(`${this.apiURL}/users/${userId}/challenges`, challenge);
  }

  getChallenge(userId: String, challengeId: String) {
    return this.httpClient.get<Challenge>(`${this.apiURL}/users/${userId}/challenges/${challengeId}`)
  }

  getRandomChallenge(userId: String) {
    return this.httpClient.get<Challenge>(`${this.apiURL}/users/${userId}/challenges/`)
  }

  


}
