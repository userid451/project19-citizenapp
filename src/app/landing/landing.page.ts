import { Component, OnInit } from '@angular/core';
import {UserService}         from '../api/user.service';
import {Router}              from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAuthenticatedUser().then((data: any) => {
      if (data) {
        this.router.navigate(['/home']);
      }
      else {
        this.router.navigate(['/user'])
      }
    });
  }
}
