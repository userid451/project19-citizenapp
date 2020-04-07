import { Component, OnInit } from "@angular/core";
import { UserService } from "../api/user.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  user: any;
  elementType: "url" | "canvas" | "img";
  qrValue: string;
  lat: number;
  lon: number;
  latlonerror: string;
  constructor(
    private userService: UserService,
    private geolocation: Geolocation
  ) {}
  hello() {
    console.log("I am working");
  }
  getlocation() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lon = resp.coords.longitude;
        this.latlonerror = "No Error";
      })
      .catch((error) => {
        console.log("Error getting location", error);
        this.latlonerror = "Getlocation Exception";
      });
  }

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
