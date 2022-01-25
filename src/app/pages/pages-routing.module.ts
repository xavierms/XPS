import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCasosComponent } from './list-casos/list-casos.component';
import { RegistroCasosComponent } from '../auth/pages/registro-casos/registro-casos.component';
import { RegisterpageComponent } from './examples/registerpage/registerpage.component';
import { ProfilepageComponent } from './examples/profilepage/profilepage.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
