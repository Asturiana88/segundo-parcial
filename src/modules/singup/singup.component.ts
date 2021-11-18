import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/clases/usuario';
import { AuthService } from 'src/services/autenticacion.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', [Validators.required]),
    foto: new FormControl('', [Validators.required]),
    tipo: new FormControl('vendedor', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  singUpError?: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  

  registrarse(){
    if(this.form.status == "VALID"){
      const admin = this.form.value.tipo == 'admin'
      this.authService.SignUp({...this.form.value, admin})
      .catch((error: any) => {
        this.singUpError = error;
      })
    } else {
      if(this.form.controls?.email?.errors?.email){
        this.singUpError = 'Email no valido';
      } else if(this.form.controls?.email?.errors?.required){
        this.singUpError = 'Email requerido';
      } else if(this.form.controls?.nombre?.errors?.required){
        this.singUpError = 'Nombre requerido';
      } else if(this.form.controls?.password?.errors?.required){
        this.singUpError = 'Password requerida';
      } else if(this.form.controls?.foto?.errors?.required){
        this.singUpError = 'Foto requerido';
      }
    }
  }

}