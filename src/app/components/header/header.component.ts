import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.isLoggedIn()
      .subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
      });
    console.log(this.isLoggedIn);
  }
  
  public logIn() {
    this.loginService.login();
  }

  public logOut() {
    this.loginService.logout();
  }
}
