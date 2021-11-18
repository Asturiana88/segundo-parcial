import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminService } from 'src/can_activate/admin.service';
import { VendedorService } from 'src/can_activate/vendedor.service';

const routes: Routes = [
  {path: 'login', loadChildren:() => import('../modules/login/login.module').then(m => m.LoginModule) },
  {path: 'singup', loadChildren:() => import('../modules/singup/singup.module').then(m => m.SingupModule) },
  // {path: 'register-admin', loadChildren:() => import('../modules/singup-admin/singup-admin.module').then(m => m.SingupAdminModule), },
  {path: 'crear-cripto', loadChildren:() => import('../modules/alta-cripto/alta-cripto.module').then(m => m.AltaCriptoModule), canActivate:[AdminService] },
  {path: 'listar-vendedores', loadChildren:() => import('../modules/listado-vendedor/listado-vendedor.module').then(m => m.ListadoVendedorModule), canActivate:[AdminService] },
  {path: 'listar-comprador', loadChildren:() => import('../modules/listado-comprador/listado-comprador.module').then(m => m.ListadoCompradorModule), canActivate:[AdminService] },
  {path: 'listar-cripto', loadChildren:() => import('../modules/listado-cripto-vendedor/listado-cripto-vendedor.module').then(m => m.ListadoCriptoVendedorModule), canActivate:[VendedorService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
