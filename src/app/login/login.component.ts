import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from './login.service';
import {AccountService} from '../account/account.service';
@Component({
    selector   : 'fb-login',
    templateUrl: 'login.html'
})
export class LoginComponent implements OnInit{
    constructor(private router: Router,
                private _loginService: LoginService,
                private _accountService: AccountService) {
    }
    ngOnInit(): void {
        if(this._accountService.getStoredAccount()){
            this.router.navigate(['account'])
        }
    }
    userCredential: any;
    email: string;

    password: string;

    login() {
        this.userCredential = {
            email   : this.email,
            password: this.password
        };
        this._loginService.doLogin(this.userCredential).subscribe(account => {
            this._accountService.setUser(account);
            this._accountService.storeAccount(account);
            this.router.navigate(['account'])
        }, (err) => {
            console.log(err);
        });
    }
}