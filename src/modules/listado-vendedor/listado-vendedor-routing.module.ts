import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoVendedorComponent } from './listado-vendedor.component';

const routes: Routes = [{path: '', component: ListadoVendedorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoVendedorRoutingModule { }
