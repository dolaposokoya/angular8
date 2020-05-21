import { Component, OnInit, Input } from '@angular/core';
import { UserService } from './service/user.service';
import { DonatebloodService } from './service/donateblood.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bloodbank';

  isLoggedIn$: Observable<boolean>;  

  navbarOpen = false;
  submitted = false
  blood: FormGroup
  url: any = 'assets/blood.png';

  constructor(private userService: UserService, private donateService: DonatebloodService, private router: Router,) { 
    this.userService.checkLogin();
    // this.donateService.checkLogin();
  }

  
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
