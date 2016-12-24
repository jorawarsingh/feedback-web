import {Injectable} from '@angular/core';
import {CustomeHttpClient} from '../shared/custome.http';
import {FunctionsHelpers} from '../shared/function-helper';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class LoginService {
    constructor(private http: CustomeHttpClient, private helper: FunctionsHelpers) {
    }

    doLogin(userCredential):Observable<any> {
        return this.http.post('login', userCredential)
            .map(this.helper.extractData)
            .catch(this.helper.handleError)
    }
}