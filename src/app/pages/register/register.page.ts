import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // When account is created it goes to the home page
  register() {
    this.router.navigate(['home']);
  }

  // Goes back to home page
  login() {
    this.router.navigate(['login']);
  }

}
