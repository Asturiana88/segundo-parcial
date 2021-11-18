import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoCompradorRoutingModule } from './listado-comprador-routing.module';
import { ListadoCompradorComponent } from './listado-comprador.component';
import { CreateInputPipe } from 'src/pipes/create-input.pipe';


@NgModule({
  declarations: [
    ListadoCompradorComponent,
    CreateInputPipe
  ],
  imports: [
    CommonModule,
    ListadoCompradorRoutingModule,
  ]
})
export class ListadoCompradorModule { }
