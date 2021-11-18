import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaCriptoRoutingModule } from './alta-cripto-routing.module';
import { AltaCriptoComponent } from './alta-cripto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablaModule } from 'src/components/tabla/tabla.module';
import { FormularioModule } from 'src/components/formulario/formulario.module';


@NgModule({
  declarations: [
    AltaCriptoComponent,
  ],
  imports: [
    CommonModule,
    AltaCriptoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioModule,
    TablaModule
  ]
})
export class AltaCriptoModule { }
