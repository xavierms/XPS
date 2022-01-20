import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCasosComponent } from './list-casos/list-casos.component';

const routes: Routes = [
  {
    path: 'List',
    component: ListCasosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
