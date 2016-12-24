import {Http,Headers} from '@angular/http';
import {Injectable} from '@angular/core';


@Injectable()
export class CustomeHttpClient {

    private _baseUrl: string = 'http://localhost:8084/feedback-api/';

    constructor(private http: Http) { }

    appendAuthorizationHeaders(target: string, headers: Headers) :void {

    }

    get(target: string) {
        let headers = new Headers();
        this.appendAuthorizationHeaders(target,headers);
        return this.http.get(this._baseUrl + target,{
            headers: headers
        });
    }

    put(target: string, body: any) {
        let headers = new Headers();
        this.appendAuthorizationHeaders(target,headers);
        return this.http.put(this._baseUrl + target,body,{
            headers: headers
        });
    }

    post(target: string, body: any) {
        let headers = new Headers();
        this.appendAuthorizationHeaders(target,headers);
        return this.http.post(this._baseUrl+target,body,{
            headers: headers
        });
    }
    delete(target: string) {
        let headers = new Headers();
        this.appendAuthorizationHeaders(target,headers);
        return this.http.delete(this._baseUrl+target,{
            headers: headers
        });
    }

}