import { Component, Input, OnInit } from "@angular/core";
import { UserService } from "../../api/user.service";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() headerTitle: string;
  @Input() showUser: boolean;
  user: any = { name: "" };
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.showUser = this.showUser
    this.userService.getAuthenticatedUser().then((user: string) => {
      if (user) {
        this.user = JSON.parse(user);
        console.log(this.user);
      }
    });
  }
}
