import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AccountRegisterComponent} from './account-register.component';

@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forChild([
            { component: AccountRegisterComponent , path: 'new'},
        ])
    ]
})
export class AccountRegisterRouting{}