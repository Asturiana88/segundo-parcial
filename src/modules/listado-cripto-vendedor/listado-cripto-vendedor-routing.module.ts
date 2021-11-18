import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoCriptoVendedorComponent } from './listado-cripto-vendedor.component';

const routes: Routes = [{path:'', component: ListadoCriptoVendedorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoCriptoVendedorRoutingModule { }
