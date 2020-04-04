import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./landing/landing.module").then((m) => m.LandingPageModule),
  },
  {
    path: "user",
    loadChildren: () =>
      import("./pages/user/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/user/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/user/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "onboarding",
    loadChildren: () =>
      import("./onboarding/onboarding.module").then(
        (m) => m.OnboardingPageModule
      ),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "statistics",
    loadChildren: () =>
      import("./statistics/statistics.module").then(
        (m) => m.StatisticsPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
