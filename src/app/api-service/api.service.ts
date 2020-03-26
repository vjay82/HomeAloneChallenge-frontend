import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Challenge } from "../classes/challenge";
import { Tipp } from "../classes/tipp";
import { Store } from "../storage/store";
import { UserData } from "../classes/user-data";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURLProduction: string =
    "https://home-alone-challenge.herokuapp.com/api/v1";
  apiURLDemo: string = "assets/demo-backend/api/v1";
  isDemo: boolean = false;
  cachedTipp: Tipp;
  cachedDailyChallenge: Challenge;
  cacheDay: number;

  constructor(private httpClient: HttpClient, private store: Store) {
    this.isDemo = store.isDemoMode();
  }

  private checkCache() {
    let date = new Date();
    let day = date.getDate();

    // new values at 1:30h => reset at 2 o'clock
    if (this.cacheDay != day && date.getHours() >= 2) {
      console.log("Resetting caches.");
      this.cacheDay = day;
      this.cachedDailyChallenge = null;
      this.cachedDailyChallenge = null;
    }
  }

  getOrCreateUserId(): Promise<string> {
    return this.getOrCreateUserData().then(userData => {
      return userData.userId;
    });
  }

  getDailyTip(): Promise<Tipp> {
    this.checkCache();
    return new Promise((resolve, reject) => {
      if (this.cachedTipp) {
        resolve(this.cachedTipp);
      }

      this.httpClient.get<Tipp>(`${this.getApiURL()}/daily_tip`).subscribe(
        (data: Tipp) => {
          this.cachedTipp = data;
          resolve(data);
        },
        error => {
          reject("Error! " + error.message);
        }
      );
    });
  }

  getAllChallengesOfUser(): Promise<Challenge[]> {
    return this.getOrCreateUserId().then(userId => {
      return new Promise((resolve, reject) => {
        this.httpClient
          .get<Challenge[]>(
            this.isDemo
              ? `${this.getApiURL()}/users/${userId}/allChallenges.json`
              : `${this.getApiURL()}/users/${userId}/challenges`
          )
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

  createNewChallenge(challenge: Challenge): Promise<Challenge | string> {
    return this.getOrCreateUserId().then(userId => {
      return new Promise((resolve, reject) => {
        this.httpClient
          .post<Challenge>(
            `${this.getApiURL()}/users/${userId}/challenges`,
            challenge
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

  editChallenge(challenge: Challenge): Promise<Challenge | string> {
    return this.getOrCreateUserId().then(userId => {
      return new Promise((resolve, reject) => {
        this.httpClient
          .patch<Challenge>(
            `${this.getApiURL()}/users/${userId}/challenges/${challenge.id}`,
            challenge
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

  deleteChallenge(challengeId: string): Promise<Challenge | string> {
    return this.getOrCreateUserId().then(userId => {
      return new Promise((resolve, reject) => {
        this.httpClient
          .delete<Challenge>(
            `${this.getApiURL()}/users/${userId}/challenges/${challengeId}`
          )
          .subscribe(
            (data: Challenge) => {
              resolve(data);
            },
            error => {
              resolve(null);
              //reject("Error! " + error.message);
            }
          );
      });
    });
  }

  getChallengeById(challengeId: string): Promise<Challenge> {
    return this.getOrCreateUserId().then(userId => {
      return this.getChallengeFromUrl(
        `${this.getApiURL()}/users/${userId}/challenges/${challengeId}`
      );
    });
  }

  getDailyChallenge(): Promise<Challenge> {
    this.checkCache();
    if (this.cachedDailyChallenge) {
      return new Promise((resolve, reject) => {
        resolve(this.cachedDailyChallenge);
      });
    }

    return this.getChallengeFromUrl(`${this.getApiURL()}/daily_challenge`).then(
      challenge => {
        this.cachedDailyChallenge = challenge;
        return challenge;
      }
    );
  }

  getRandomChallenge(category: string): Promise<Challenge> {
    return this.getChallengeFromUrl(
      `${this.getApiURL()}/random_challenge?category=${category}`
    );
  }

  private getApiURL() {
    return this.isDemo ? this.apiURLDemo : this.apiURLProduction;
  }

  private getOrCreateUserData(): Promise<UserData> {
    if (this.isDemo) {
      return new Promise((resolve, reject) => {
        const userData = new UserData();
        userData.userId = "demoUser";
        resolve(userData);
      });
    } else {
      return new Promise((resolve, reject) => {
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

  private getChallengeFromUrl(url: string): Promise<Challenge> {
    return new Promise((resolve, reject) => {
      this.httpClient.get<Challenge>(url).subscribe(
        (data: Challenge) => {
          resolve(data);
        },
        error => {
          reject("Error! " + error.message);
        }
      );
    });
  }
}
