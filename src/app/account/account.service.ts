import {Injectable} from '@angular/core';
import {CustomeHttpClient} from '../shared/custome.http';
import {Observable} from 'rxjs/Observable';
import {FunctionsHelpers} from '../shared/function-helper';
import {BehaviorSubject} from 'rxjs';
import Account from './account';
@Injectable()
export class AccountService {
    _account$: BehaviorSubject<Account> = new BehaviorSubject(undefined);
    constructor(private http: CustomeHttpClient, private helper: FunctionsHelpers) {
    }

    getAccount(): Observable<any> {
        return this.http.get('accounts')
            .map(this.helper.extractData)
            .catch(this.helper.handleError);
    }
    setUser(account: Account){
        this._account$.next(account)
    }
    getLoggedInUser(){
        return this._account$;
    }
    storeAccount(account: Account){
        localStorage.setItem('fbAccount', JSON.stringify(account));
    }
    getStoredAccount(){
      return JSON.parse(localStorage.getItem('fbAccount'));
    }
    clearStoredAccount(){
        localStorage.clear();
    }
}