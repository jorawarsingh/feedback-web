import {NgModule} from '@angular/core';
import {AccountComponent} from './account.component';
import {AccountRouting} from './acccount.routing.module';
import {AccountService} from './account.service';
import {AccountRegisterComponent} from '../RegisterAccount/account-register.component';
@NgModule({
    bootstrap: [AccountComponent],
    declarations:[AccountComponent],
    imports:[AccountRouting],
    providers:[AccountService]
})
export class AccountModule{

}