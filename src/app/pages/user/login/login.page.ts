import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService}                          from '../../../api/user.service';
import {Router}                               from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  // const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //
  // // Passwords should be at least 8 characters long and should contain one number, one character and one special character.
  // const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
  // export const regexValidators = {
  //   email: PURE_EMAIL_REGEXP,
  //   password: PASSWORD_REGEXP
  // };
  constructor( private formBuilder: FormBuilder,
               private userService: UserService,
               private router: Router) {
    this.loginForm = this.formBuilder.group({
    
      email: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.required
        ])
      ],
      login: []
    });
    
  }

  ngOnInit() {
    this.userService.getAuthenticatedUser().then((data: any) => {
      // if (data) {
      //   this.router.navigate(['/register']);
      // }
    });
  }
  
  onSignIn() {
    this.userService.authenticate(this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
    ).then((user) => {
      if (!user) {
        this.loginForm.controls['login'].setErrors({'incorrect': true});
      }
      else {
        this.router.navigate(['/home'])
      }
    })
  }
  onForgotPassword() {
    //Todo
  }

}
