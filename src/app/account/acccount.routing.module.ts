import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AccountComponent} from './account.component';

@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forChild([
            { component: AccountComponent , path: 'account'},
        ])
    ]
})
export class AccountRouting{}