import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  pages = [
    {
      title: "statistics",
      url: "/statistics",
    },
    {
      title: "information",
      url: "/faq",
    },
    {
      title: "self-screening",
      url: "/self-screening",
    },
  ];
  selectedPath = "";
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }

  ngOnInit() {}
}
