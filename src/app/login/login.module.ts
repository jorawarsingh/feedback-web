import {LoginRouting} from './login.routing.module';
import {LoginComponent} from './login.component';
import {NgModule} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LoginService} from './login.service';
@NgModule({
    imports:[LoginRouting, FormsModule, CommonModule],
    declarations:[LoginComponent],
    bootstrap:[LoginComponent],
    providers:[LoginService]
})
export class LoginModule{

}