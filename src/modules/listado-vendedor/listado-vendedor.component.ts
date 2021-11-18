import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/autenticacion.service';
import { StoreManagementService } from 'src/services/store-management.service';

@Component({
  selector: 'app-listado-vendedor',
  templateUrl: './listado-vendedor.component.html',
  styleUrls: ['./listado-vendedor.component.scss']
})
export class ListadoVendedorComponent implements OnInit {

  vendedores = this.storeService.GetUsuarios('vendedor')
  service = this.authSevice

  constructor(private storeService: StoreManagementService, private authSevice: AuthService) { }

  ngOnInit(): void {
  }

}
