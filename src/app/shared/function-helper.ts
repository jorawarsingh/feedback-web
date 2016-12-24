import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
@Injectable()
export class FunctionsHelpers {

    public extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    public handleError(error: any | Response) {
        let errMsg = (error.message) ? error.message :
            error.status ? error.json() : 'Server error';
        return Observable.throw(errMsg);
    }

}
