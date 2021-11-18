import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCompradorComponent } from './listado-comprador.component';

const routes: Routes = [{path: '', component: ListadoCompradorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoCompradorRoutingModule { }
