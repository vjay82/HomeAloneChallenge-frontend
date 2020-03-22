import { PersistenceService, StorageType } from "angular-persistence";
import { Challenge } from "../classes/challenge";
import { Injectable } from "@angular/core";
import { UserData } from "../classes/user-data";

@Injectable()
export class Store {
  private userData: UserData;
  private activeChallenge: Challenge;
  private challengeInEditor: Challenge;
  private activeChallengeTimer: number;
  private demoMode: boolean = false;

  constructor(private persistenceService: PersistenceService) {
    this.userData = this.persistenceService.get("USER_DATA", StorageType.LOCAL);
    this.activeChallenge = this.persistenceService.get(
      "ACTIVE_CHALLENGE",
      StorageType.LOCAL
    );
    this.challengeInEditor = this.persistenceService.get(
      "EDIT_CHALLENGE",
      StorageType.MEMORY
    );

    if (this.activeChallenge != null) {
      // Only request active challenge timer if theres an active challenge
      this.activeChallengeTimer = this.persistenceService.get(
        "ACTIVE_CHALLENGE_TIMER",
        StorageType.LOCAL
      );
    } else {
      this.activeChallengeTimer = null;
    }

    this.demoMode = this.persistenceService.get("DEMO_MODE", StorageType.LOCAL);
    if (typeof this.demoMode !== "boolean") {
      this.demoMode = false;
    }
  }

  getActiveChallengeTimer(): number {
    return this.activeChallengeTimer;
  }

  setActiveChallengeTimer(timer: number) {
    this.activeChallengeTimer = timer;
    if (
      !this.persistenceService.set(
        "ACTIVE_CHALLENGE_TIMER",
        this.activeChallengeTimer,
        {
          type: StorageType.LOCAL
        }
      )
    ) {
      console.log("Cant set active challenge timer!");
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

  setChallenge(activeChallenge: Challenge) {
    // TODO: remove me, bug in ng serve, wants this function
    this.setActiveChallenge(activeChallenge);
  }

  setActiveChallenge(activeChallenge: Challenge) {
    this.activeChallenge = activeChallenge;
    if (
      !this.persistenceService.set("ACTIVE_CHALLENGE", activeChallenge, {
        type: StorageType.LOCAL
      })
    ) {
      console.log("Cant set active challenge!");
    }
  }

  setChallengeInEditor(challenge: Challenge) {
    this.challengeInEditor = challenge;
    if (
      !this.persistenceService.set("EDIT_CHALLENGE", challenge, {
        type: StorageType.LOCAL
      })
    ) {
      console.log("Cant set active challenge!");
    }
  }

  getChallengeInEditor(): Challenge {
    return this.challengeInEditor;
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
