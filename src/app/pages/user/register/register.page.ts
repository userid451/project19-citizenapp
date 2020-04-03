import { Component, OnInit } from '@angular/core';
import {UserService}         from '../../../api/user.service';
import * as uuid             from 'uuid';
import {Router}              from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userStorage: UserService, private router:Router) { }
  
  user: any = {};
  ngOnInit() {
  }
  
  public register() {
   if (this.user.hasOwnProperty('name') && this.user.hasOwnProperty('phoneNumber')
       && this.user.hasOwnProperty('email') && this.user.hasOwnProperty('password')) {
     this.user['id'] = uuid.v4();
     this.userStorage.saveUser(this.user).then(() => {
       this.userStorage.authenticate( this.user.email, this.user.password).then((user: any) => {
         if (user) {
           this.router.navigate(['/home']);
         }
         // Todo else handle error
       });
     });
   }
  }
}
