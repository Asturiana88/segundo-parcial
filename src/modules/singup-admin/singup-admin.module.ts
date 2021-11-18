import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingupAdminRoutingModule } from './singup-admin-routing.module';
import { SingupAdminComponent } from './singup-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SingupAdminComponent
  ],
  imports: [
    CommonModule,
    SingupAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SingupAdminModule { }
