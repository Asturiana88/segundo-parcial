import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/autenticacion.service';
import { StoreManagementService } from 'src/services/store-management.service';

@Component({
  selector: 'app-listado-comprador',
  templateUrl: './listado-comprador.component.html',
  styleUrls: ['./listado-comprador.component.scss']
})
export class ListadoCompradorComponent implements OnInit {

  compradores = this.storeService.GetUsuarios('comprador')
  service = this.authSevice

  constructor(private storeService: StoreManagementService, private authSevice: AuthService) { }

  ngOnInit(): void {
  }

}
