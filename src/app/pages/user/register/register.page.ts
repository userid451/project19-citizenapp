import { Component, OnInit } from '@angular/core';
import {UserService}         from '../../../api/user.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private userStorage: UserService) { }
  
  user: any = {};
  ngOnInit() {
  }
  
  public register() {
   if (this.user.hasOwnProperty('name') && this.user.hasOwnProperty('phoneNumber') && this.user.hasOwnProperty('email')) {
     this.user['id'] = uuid.v4();
     this.userStorage.saveUser(this.user);
   }
  }
}
