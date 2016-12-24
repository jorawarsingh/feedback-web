import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';

@NgModule({
    exports:[
        RouterModule
    ],
    imports:[
        RouterModule.forChild([
            { component: LoginComponent , path: ''},
        ])
    ]
})
export class LoginRouting{}