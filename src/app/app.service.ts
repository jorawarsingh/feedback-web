import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class AppService {

    private _displayLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);

    setDisplayLoggedOut(value: boolean) {
        this._displayLogin.next(value);
    }

    public getDisplayLoggedOut(): BehaviorSubject<boolean> {
        return this._displayLogin;
    }
}