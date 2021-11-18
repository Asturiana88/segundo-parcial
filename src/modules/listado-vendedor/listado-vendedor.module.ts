import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoVendedorRoutingModule } from './listado-vendedor-routing.module';
import { ListadoVendedorComponent } from './listado-vendedor.component';


@NgModule({
  declarations: [
    ListadoVendedorComponent
  ],
  imports: [
    CommonModule,
    ListadoVendedorRoutingModule,
  ]
})
export class ListadoVendedorModule { }
