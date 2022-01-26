import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroCasosComponent } from '../pages/registro-casos/registro-casos.component';

const routes: Routes = [
    {
     path:'',
     children: [
       {
         path: 'login',
         component:LoginComponent
       },
       {
         path: 'registro',
         component:RegistroCasosComponent
       },
       {
         path: '**',
         redirectTo: 'login'
       }
     ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
