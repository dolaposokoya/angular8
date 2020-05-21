import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import {HttpClientModule} from '@angular/common/http'
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth.guard';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { RequestbloodComponent } from './requestblood/requestblood.component';
import { OtpComponent } from './otp/otp.component';
import { BloodmythComponent } from './bloodmyth/bloodmyth.component';
import { DonatebloodComponent } from './donateblood/donateblood.component';
import { BlooddonorComponent } from './blooddonor/blooddonor.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'create-user', component: CreateuserComponent},
 {path: 'login-user', component: LoginComponent},
  {path: 'blooddonordetails', component: BlooddonorComponent, canActivate: [AuthGuard]},
  {path: 'viewdetails/:user_id', component: ViewdetailsComponent, canActivate: [AuthGuard]},
  {path: 'request-blood', component: RequestbloodComponent, canActivate: [AuthGuard]},
  {path: 'forgetpassword', component: ForgetpasswordComponent},
  {path: 'otpgeneratorbynumber', component: OtpComponent},
  {path: 'blooddonationtips', component: BloodmythComponent},
  {path: 'donate-blood', component: DonatebloodComponent, canActivate: [AuthGuard]},
  {path: 'ERROR404', component: NotfoundComponent},
  {path: '**', redirectTo: '/ERROR404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
