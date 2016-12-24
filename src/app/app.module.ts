import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule, Title} from '@angular/platform-browser';
import {AccountModule} from './account/account.module';
import {AppRoutingModule} from './app.routing';
import {CustomeHttpClient} from './shared/custome.http';
import {FunctionsHelpers} from './shared/function-helper';
import {AppService} from './app.service';
import {DialogModule} from 'primeng/primeng';
import {HeaderComponent} from './header/header.component';
import {LoginModule} from './login/login.module';
import {AccountRegisterComponent} from './RegisterAccount/account-register.component';
import {AccountRegisterRouting} from './RegisterAccount/account-register.routing.module';
@NgModule({
    bootstrap   : [AppComponent],
    declarations: [AppComponent, HeaderComponent, AccountRegisterComponent],
    imports     : [BrowserModule, HttpModule, FormsModule,
        AccountModule, AppRoutingModule, DialogModule,
        LoginModule, AccountRegisterRouting],
    providers   : [
        Title, CustomeHttpClient, FunctionsHelpers, AppService
    ],
})
export class AppModule {
    public id: string = "haha";
}
