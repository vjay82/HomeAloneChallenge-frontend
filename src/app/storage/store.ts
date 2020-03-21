import { PersistenceService, StorageType } from 'angular-persistence';
import { Challenge } from '../classes/challenge';
import { Injectable } from '@angular/core';
import { UserData } from '../classes/user-data';


@Injectable()
export class Store {
    private userId: UserData;
    private activeChallenge: Challenge;

    constructor(private persistenceService: PersistenceService) {
        this.userId = this.persistenceService.get('USER_ID', StorageType.IMMUTABLE_MEMORY);
        this.activeChallenge = this.persistenceService.get('CHALLENGE', StorageType.MEMORY);
    }

    setChallenge(challenge: Challenge) {
        if (!this.persistenceService.set('CHALLENGE', challenge, {type: StorageType.MEMORY})) {
            console.log("Cant set active challenge!");
        }
    }

    getActiveChallenge(): Challenge {
        return this.activeChallenge;
    }

    getUserId(): UserData {
        return this.userId;
    }

    setUserId(userId:UserData) {
        if (!this.persistenceService.set('USER_ID', userId, {type: StorageType.IMMUTABLE_MEMORY})) {
            // TODO: error handling!

            console.log("Cant set local storage");
        }        
    }
}
