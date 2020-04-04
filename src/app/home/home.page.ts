import { Component, OnInit } from "@angular/core";
import { UserService } from "../api/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  user: any;
  elementType: "url" | "canvas" | "img";
  qrValue: string;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAuthenticatedUser().then((user: string) => {
      if (user) {
        this.user = JSON.parse(user);
        this.qrValue = this.user.id;
      } else {
        // go to log in page
      }
    });
  }
}
