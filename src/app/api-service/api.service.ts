import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Challenge } from "../classes/challenge";
import { Tipp } from "../classes/tipp";
import { Store } from "../storage/store";
import { UserData } from "../classes/user-data";
import { error } from "protractor";
import { Observable } from "rxjs";
import { resolve } from "dns";
import { rejects } from "assert";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "/assets/demo-backend/api/v1";

  constructor(private httpClient: HttpClient, private storage: Store) {}

  checkUserId(): Promise<UserData> {
    return new Promise((resolve, reject) => {
      console.log(this.storage.getUserId());
      if (this.storage.getUserId() == undefined) {
        // Do API request toget UID
        this.createUniqueId().subscribe(
          (data: UserData) => {
            this.storage.setUserId(data);
            resolve(data);
          },
          error => {
            reject("Canot access userId! " + error.message);
          }
        );
      } else {
        resolve(this.storage.getUserId());
      }
    });
  }

  getDailyTip() {
    return this.httpClient.get<Tipp>(`${this.apiURL}/dailytips`);
  }

  createUniqueId() {
    return this.httpClient.post<UserData>(`${this.apiURL}/users`, null);
  }

  fetchAllChallenges() {
    return this.httpClient.get<Challenge[]>(
      `${this.apiURL}/users/${this.storage.getUserId()}/challenges`
    );
  }

  createNewChallenge(challenge: Challenge) {
    return this.httpClient.post(
      `${this.apiURL}/users/${this.storage.getUserId()}/challenges`,
      challenge
    );
  }

  getChallenge(challengeId: String) {
    return this.httpClient.get<Challenge>(
      `${
        this.apiURL
      }/users/${this.storage.getUserId()}/challenges/${challengeId}`
    );
  }

  getRandomChallenge() {
    return this.httpClient.get<Challenge>(
      `${this.apiURL}/users/${this.storage.getUserId()}/challenges/`
    );
  }
}

/*
this.api.checkUserId().then(data => {
 // Do futher requests
}).catch(err => {
  console.error(err)
})
*/
