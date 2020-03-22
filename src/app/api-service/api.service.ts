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
  apiURLProduction: string =
    "https://home-alone-challenge.herokuapp.com/api/v1";
  apiURLDemo: string = "assets/demo-backend/api/v1";
  isDemo: boolean = false;

  constructor(private httpClient: HttpClient, private store: Store) {
    this.isDemo = store.isDemoMode();
  }

  private getApiURL() {
    return this.isDemo ? this.apiURLDemo : this.apiURLProduction;
  }

  getOrCreateUserId(): Promise<String> {
    return this.getOrCreateUserData().then(userData => {
      return userData.userId;
    });
  }

  getOrCreateUserData(): Promise<UserData> {
    return new Promise((resolve, reject) => {
      // if demo mode, just return a default value
      //if (this.isDemo) {
      //  resolve("demo");
      //}

      if (this.store.getUserData() == undefined) {
        // Do API request toget UID
        this.createNewUser().then(
          (newUserData: UserData) => {
            resolve(newUserData);
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
    return new Promise((resolve, reject) => {
      this.httpClient
        .get<Tipp>(`${this.getApiURL()}/random_dailytip`)
        .subscribe(
          (data: Tipp) => {
            resolve(data);
          },
          error => {
            reject("Error! " + error.message);
          }
        );
    });
  }

  private createNewUser() {
    return new Promise((resolve, reject) => {
      if (this.isDemo) {
        this.httpClient.get(`${this.getApiURL()}/users/create`).subscribe(
          (newUserData: UserData) => {
            this.store.setUserData(newUserData);
            resolve(newUserData);
          },
          error => {
            reject("Error! " + error.message);
          }
        );
      } else {
        this.httpClient.post(`${this.getApiURL()}/users`, "").subscribe(
          (newUserData: UserData) => {
            this.store.setUserData(newUserData);
            resolve(newUserData);
          },
          error => {
            reject("Error! " + error.message);
          }
        );
      }
    });
  }

  fetchAllChallenges() {
    return this.getOrCreateUserData().then(userId => {
      return new Promise((resolve, reject) => {
        this.httpClient
          .get<Challenge[]>(`${this.getApiURL()}/users/${userId}/challenges`)
          .subscribe(
            (data: Challenge[]) => {
              resolve(data);
            },
            error => {
              reject("Error! " + error.message);
            }
          );
      });
    });
  }

  createNewChallenge(challenge: Challenge) {
    // fixme
    return this.httpClient.post(
      `${this.getApiURL()}/users/${this.store.getUserData()}/challenges`,
      challenge
    );
  }

  getChallenge(challengeId: String) {
    // fixme
    return this.httpClient.get<Challenge>(
      `${this.getApiURL()}/users/${this.store.getUserData()}/challenges/${challengeId}`
    );
  }

  getDailyChallenge(): Promise<Challenge> {
    return this.getRandomChallenge("");
  }

  getRandomChallenge(category: String): Promise<Challenge> {
    return this.getOrCreateUserId().then(userId => {
      return new Promise((resolve, reject) => {
        this.httpClient
          .get<Challenge>(
            this.isDemo
              ? `${this.getApiURL()}/users/${userId}/random_challenge`
              : `${this.getApiURL()}/users/${userId}/random_challenge/`
          )
          .subscribe(
            (data: Challenge) => {
              resolve(data);
            },
            error => {
              reject("Error! " + error.message);
            }
          );
      });
    });
  }
}
