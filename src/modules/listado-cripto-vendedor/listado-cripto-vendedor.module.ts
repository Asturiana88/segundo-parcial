import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoCriptoVendedorRoutingModule } from './listado-cripto-vendedor-routing.module';
import { ListadoCriptoVendedorComponent } from './listado-cripto-vendedor.component';
import { ComisionPipe } from 'src/pipes/comision.pipe';


@NgModule({
  declarations: [
    ListadoCriptoVendedorComponent,
    ComisionPipe
  ],
  imports: [
    CommonModule,
    ListadoCriptoVendedorRoutingModule
  ]
})
export class ListadoCriptoVendedorModule { }
