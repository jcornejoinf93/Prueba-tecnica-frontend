import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listar-usuarios', component: UsersTableComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'listar-usuarios' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
