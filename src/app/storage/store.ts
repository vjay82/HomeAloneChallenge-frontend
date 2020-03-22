import { PersistenceService, StorageType } from "angular-persistence";
import { Challenge } from "../classes/challenge";
import { Injectable } from "@angular/core";
import { UserData } from "../classes/user-data";

@Injectable()
export class Store {
  private userData: UserData;
  private activeChallenge: Challenge;
  private demoMode: boolean = false;

  constructor(private persistenceService: PersistenceService) {
    this.userData = this.persistenceService.get("USER_DATA", StorageType.LOCAL);
    this.activeChallenge = this.persistenceService.get(
      "CHALLENGE",
      StorageType.LOCAL
    );
    this.demoMode = this.persistenceService.get("DEMO_MODE", StorageType.LOCAL);
    if (typeof this.demoMode !== "boolean") {
      this.demoMode = false;
    }
  }

  isDemoMode(): boolean {
    return this.demoMode;
  }

  setDemoMode(demoMode: boolean) {
    this.demoMode = demoMode;
    if (
      !this.persistenceService.set("DEMO_MODE", demoMode, {
        type: StorageType.LOCAL
      })
    ) {
      console.log("Cant set DEMO_VERSION!");
    }
  }

  setChallenge(challenge: Challenge) {
    this.activeChallenge = challenge;
    if (
      !this.persistenceService.set("CHALLENGE", challenge, {
        type: StorageType.LOCAL
      })
    ) {
      console.log("Cant set active challenge!");
    }
  }

  getActiveChallenge(): Challenge {
    return this.activeChallenge;
  }

  getUserData(): UserData {
    return this.userData;
  }

  setUserData(userData: UserData) {
    this.userData = userData;
    if (
      !this.persistenceService.set("USER_DATA", userData, {
        type: StorageType.LOCAL
      })
    ) {
      // TODO: error handling!

      console.log("Cant set local storage");
    }
  }
}
