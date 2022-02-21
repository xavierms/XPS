import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { AuthGuard } from "./auth/guard/auth.guard";
// import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
// import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
// import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";

const routes: Routes = [

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canLoad: [ AuthGuard ],
    // canActivate: [ AuthGuard ]
  },
  { path: "", 
    redirectTo: "home", 
    pathMatch: "full" 
  },
  { path: "home", 
    component: IndexComponent },
  // { path: "profile", component: ProfilepageComponent },
  // { path: "register", component: RegisterpageComponent },
  // { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true  //HashLocationStrategy #
    })
  ],
  exports: []
})
export class AppRoutingModule {}
