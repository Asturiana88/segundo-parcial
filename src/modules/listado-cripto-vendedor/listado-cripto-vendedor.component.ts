import { Component, OnInit } from '@angular/core';
import { Cripto } from 'src/clases/cripto';
import { AuthService } from 'src/services/autenticacion.service';
import { StoreManagementService } from 'src/services/store-management.service';

@Component({
  selector: 'app-listado-cripto-vendedor',
  templateUrl: './listado-cripto-vendedor.component.html',
  styleUrls: ['./listado-cripto-vendedor.component.scss']
})
export class ListadoCriptoVendedorComponent implements OnInit {

  criptos = this.storeService.GetCriptos()
  userCriptos = this.authService.getUser.cripto

  constructor(private storeService: StoreManagementService, private authService: AuthService) { }

  laTiene(cripto: Cripto){
    if(!this.userCriptos) return false;
    return !!this.userCriptos.find((i:any) => i.nombre == cripto.nombre)
  }

  handleCripto(cripto: Cripto){
    if(this.laTiene(cripto)){
      const data = this.userCriptos.filter( (i:any) => i.nombre != cripto.nombre)
      this.authService.SetCripto(data)
      this.userCriptos = data
    } else {
      const data = [...(this.userCriptos || []), cripto]
      this.authService.SetCripto(data)
      this.userCriptos = data
    }
  }

  ngOnInit(): void {
  }

}
