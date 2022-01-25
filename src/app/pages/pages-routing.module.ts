import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCasosComponent } from './list-casos/list-casos.component';
import { RegistroCasosComponent } from './registro-casos/registro-casos.component';
import { RegisterpageComponent } from './examples/registerpage/registerpage.component';
import { ProfilepageComponent } from './examples/profilepage/profilepage.component';
import { LandingpageComponent } from './examples/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: 'List',
    component: ListCasosComponent
  },
  {
    path: 'Register',
    component: RegisterpageComponent
  },
  {
    path: 'profile',
    component: ProfilepageComponent
  },
  
  {
    path: 'landing',
    component: LandingpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
