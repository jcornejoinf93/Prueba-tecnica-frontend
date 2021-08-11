import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';

// components
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersFormComponent } from './components/users-form/users-form.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [UsersTableComponent, UsersFormComponent, HomeComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
