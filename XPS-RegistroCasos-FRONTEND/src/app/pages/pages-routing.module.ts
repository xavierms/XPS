import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { ListCasosComponent } from './list-casos/list-casos.component';
import { RegistroCasosComponent } from './registro-casos/registro-casos.component';


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
  },
  {
    path: 'Register-casos',
    component: RegistroCasosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
