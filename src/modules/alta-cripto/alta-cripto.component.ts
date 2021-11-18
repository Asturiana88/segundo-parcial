import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/clases/usuario';
import { StoreManagementService } from 'src/services/store-management.service';

@Component({
  selector: 'app-alta-cripto',
  templateUrl: './alta-cripto.component.html',
  styleUrls: ['./alta-cripto.component.scss']
})
export class AltaCriptoComponent implements OnInit {

  readonly form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    costo: new FormControl('', [Validators.required]),
    comision: new FormControl('', [Validators.required]),
    año: new FormControl('', [Validators.required]),
  })

  vendedores = this.storeService.GetUsuarios('vendedor')
  headers = ['nombre', 'email']
  vendedor?:Usuario;

  criptos = this.storeService.GetCriptos()
  headersCripto = ['nombre', 'costo', 'comision', 'año']

  singUpError?: any;

  constructor(private storeService: StoreManagementService) { }

  ngOnInit(): void {
  }

  inputs = [
    {name: 'email', placeholder: 'Email', type: 'email', validators: [Validators.required, Validators.email]},
    {name: 'nombre', placeholder: 'Nombre', type: 'text', validators: [Validators.required]},
    {name: 'radioTest', placeholder: 'Radios', type: 'radio', validators: [Validators.required], options: ['opcion1', 'opcion2']},
    {name: 'checkbox1', placeholder: 'Hola', type: 'checkbox'},
  ]

  handleCheckSubmit(e:any){
    console.log(e)
  }

  seleccionarvendedor(profe:Usuario){
    this.vendedor = profe
  }

  saveData(){
    this.storeService.CrearCripto(this.form.value)
    this.form.reset()
    this.singUpError = ''
  }

  validarGuardar(){
    if(this.form.status == "VALID"){
      this.saveData()
    } else {
      if(this.form.controls?.nombre?.errors?.required){
        this.singUpError = 'Nombre requerido';
      } else if(this.form.controls?.costo?.errors?.required){
        this.singUpError = 'Costo es requerido';
      } else if(this.form.controls?.comision?.errors?.required){
        this.singUpError = 'Comision es requerido';
      } else if(this.form.controls?.año?.errors?.required){
        this.singUpError = 'Año es requerido';
      }
    }
  }
}
