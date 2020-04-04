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
  user: any = { name: "" };
  pages = [
    {
      title: "statistics",
      url: "../statistics/",
    },
    {
      title: "reports",
      url: "../report/",
    },
    {
      title: "information",
      url: "../faq/",
    },
    {
      title: "self-screening",
      url: "../self-screening/",
    },
  ];
  selectedPath = "";
  constructor(private userService: UserService, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit(): void {
    this.userService.getAuthenticatedUser().then((user: string) => {
      if (user) {
        this.user = JSON.parse(user);
        console.log(this.user);
      }
    });
  }
}
