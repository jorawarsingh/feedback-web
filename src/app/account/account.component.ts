import {Component, OnInit} from '@angular/core';
import {AccountService} from './account.service';
import Account from './account';
@Component({
    selector   : 'fb-account',
    templateUrl: 'account.html'
})
export class AccountComponent implements OnInit {
    _account$;
    account: Account;

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
        this._account$ = this.accountService.getLoggedInUser().subscribe((account: Account) => {
            if (account || this.accountService.getStoredAccount())
                this.account = account || this.accountService.getStoredAccount();
        }, (err) => {
            console.log(err);
        })
    }

}