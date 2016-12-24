import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {AccountService} from '../account/account.service';
import Account from '../account/account';
import {Router} from '@angular/router';
@Component({
    selector:'fb-header',
    templateUrl:'header.html'
})
export class HeaderComponent implements OnInit{
    account: Account;
    constructor(private router: Router,
                private accountService:AccountService){}
    ngOnInit(): void {
        this.accountService.getLoggedInUser().subscribe((account:Account) =>{
            if(account || this.accountService.getStoredAccount())
            this.account = account || this.accountService.getStoredAccount();
        },(err) => {
            console.error(err);
        });
    }
    logout(){
        this.account = undefined;
        this.accountService.clearStoredAccount();
        this.router.navigate([''])
    }
}