import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {

  public user : User;

  constructor(private loginService: LoginService, private router: Router) {
  	this.user = new User();
  }

  validateLogin() {
  	if(this.user.username && this.user.password) {
  		this.loginService.validateLogin(this.user).subscribe(result => {
        if(result['status'] === 'success') {
          localStorage.setItem('loggedInUser', this.user.username);
          this.router.navigate(['/home']);
        } else {
          alert('Wrong Username or Password');
        }
      }, error => {
        console.log('Error: ', error);
      });
  	} else {
  		alert('Enter Username and Password');
  	}
  }

}
