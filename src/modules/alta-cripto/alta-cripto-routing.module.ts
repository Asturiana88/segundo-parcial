import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaCriptoComponent } from './alta-cripto.component';

const routes: Routes = [{path:'', component:AltaCriptoComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaCriptoRoutingModule { }
