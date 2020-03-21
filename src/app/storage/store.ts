import { PersistenceService, StorageType } from "angular-persistence";
import { Challenge } from "../classes/challenge";
import { Injectable } from "@angular/core";
import { UserData } from "../classes/user-data";

@Injectable()
export class Store {
  private userId: UserData;
  private activeChallenge: Challenge;
  private demoVersion: boolean = false;

  constructor(private persistenceService: PersistenceService) {
    this.userId = this.persistenceService.get(
      "USER_ID",
      StorageType.IMMUTABLE_MEMORY
    );
    this.activeChallenge = this.persistenceService.get(
      "CHALLENGE",
      StorageType.MEMORY
    );
    this.demoVersion =
      "true" == this.persistenceService.get("DEMO_VERSION", StorageType.MEMORY);
  }

  isDemoVersion(): boolean {
    return this.demoVersion;
  }

  setDemoVersion(demoVersion: boolean) {
    this.demoVersion = demoVersion;
    if (
      !this.persistenceService.set("DEMO_VERSION", demoVersion, {
        type: StorageType.MEMORY
      })
    ) {
      console.log("Cant set DEMO_VERSION!");
    }
  }

  setChallenge(challenge: Challenge) {
    this.activeChallenge = challenge;
    if (
      !this.persistenceService.set("CHALLENGE", challenge, {
        type: StorageType.MEMORY
      })
    ) {
      console.log("Cant set active challenge!");
    }
  }

  getActiveChallenge(): Challenge {
    return this.activeChallenge;
  }

  getUserId(): UserData {
    return this.userId;
  }

  setUserId(userId: UserData) {
    this.userId = userId;
    if (
      !this.persistenceService.set("USER_ID", userId, {
        type: StorageType.IMMUTABLE_MEMORY
      })
    ) {
      // TODO: error handling!

      console.log("Cant set local storage");
    }
  }
}
