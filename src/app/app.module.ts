import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, MatButtonModule, MatSelectModule, MatOptionModule, MatProgressSpinnerModule, MatSortModule, MatDialogModule, MatCardModule,MatGridListModule,MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { HeaderpageComponent } from './headerpage/headerpage.component';
import { ErrorsHandler } from './service/errors-handler';
import { RequestbloodComponent } from './requestblood/requestblood.component';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { OtpComponent } from './otp/otp.component';
import { BloodmythComponent } from './bloodmyth/bloodmyth.component';
import { DonatebloodComponent } from './donateblood/donateblood.component';
import { BlooddonorComponent } from './blooddonor/blooddonor.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    FirstComponent,
    LoginComponent,
    ViewdetailsComponent,
    HeaderpageComponent,
    RequestbloodComponent,
    ForgetpasswordComponent,
    OtpComponent,
    BloodmythComponent,
    DonatebloodComponent,
    BlooddonorComponent,
    NotfoundComponent

  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({
      timeOut: 3300,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
