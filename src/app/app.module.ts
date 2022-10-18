import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './supplier/login/login.component';
import { RegistrationComponent } from './supplier/registration/registration.component';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';  
import { AuthService } from './services/auth.service';
import { Login2Component } from './supplier/login2/login2.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailverifyComponent } from './supplier/emailverify/emailverify.component';
import { DashboardComponent } from './supplier/dashboard/dashboard.component';

const appRoute: Routes = [
  {path:'', component: LoginComponent },
  { path:'registration', component: RegistrationComponent },
  {path: 'login2', component: Login2Component },
  { path: 'emailverify', component: EmailverifyComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    Login2Component,
    EmailverifyComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
