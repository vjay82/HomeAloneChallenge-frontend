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
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  //apiURL: string = "/assets/demo-backend/api/v1";

  apiURL: string = "https://home-alone-challenge.herokuapp.com/api/v1";
  apiURLDemo: string = "assets/demo-backend/api/v1";
  isDemo: boolean = false;

  constructor(private httpClient: HttpClient, private store: Store) {
    this.isDemo = store.isDemoVersion();
  }

  private getURL() {
    return this.isDemo ? this.apiURLDemo : this.apiURL;
  }

  getOrCreateUserData(): Promise<UserData> {
    return new Promise((resolve, reject) => {
      // if demo mode, just return a default value
      if (this.isDemo) {
        let userData = new UserData();
        userData.userId = "demo";
        resolve(userData);
      }

      if (this.store.getUserData() == undefined) {
        // Do API request toget UID
        this.createUniqueId().then(
          (data: UserData) => {
            this.store.setUserData(data);
            resolve(data);
          },
          error => {
            reject("Canot access userId! " + error.message);
          }
        );
      } else {
        resolve(this.store.getUserData());
      }
    });
  }

  getDailyTip(): Promise<Tipp> {
    //return this.httpClient.get<Tipp>(`${this.apiURL}/dailytips`);

    return new Promise((resolve, reject) => {
      this.httpClient.get<Tipp>(`${this.getURL()}/random_dailytip`).subscribe(
        (data: Tipp) => {
          resolve(data);
        },
        error => {
          reject("Error! " + error.message);
        }
      );
    });
  }

  createUniqueId() {
    //return this.httpClient.post<UserData>(`${this.apiURL}/users`, null);

    return new Promise((resolve, reject) => {
      this.httpClient.get<Tipp>(`${this.apiURL}/dailytips`).subscribe(
        (data: Tipp) => {
          resolve(data);
        },
        error => {
          reject("Error! " + error.message);
        }
      );
    });
  }

  fetchAllChallenges() {
    return this.httpClient.get<Challenge[]>(
      `${this.apiURL}/users/${this.store.getUserData()}/challenges`
    );
  }

  createNewChallenge(challenge: Challenge) {
    return this.httpClient.post(
      `${this.apiURL}/users/${this.store.getUserData()}/challenges`,
      challenge
    );
  }

  getChallenge(challengeId: String) {
    return this.httpClient.get<Challenge>(
      `${
        this.apiURL
      }/users/${this.store.getUserData()}/challenges/${challengeId}`
    );
  }

  getRandomChallenge() {
    return this.httpClient.get<Challenge>(
      `${this.apiURL}/users/${this.store.getUserData()}/challenges/`
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
