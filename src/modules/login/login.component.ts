import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  singUpError?: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  adminlogin(){
      this.authService.SignIn('admin@admin.com', 'test123')
      .catch((error: any) => {
        this.singUpError = error;
      })
  }
  compradorlogin(){
      this.authService.SignIn('comprador@comprador.com', 'test123')
      .catch((error: any) => {
        this.singUpError = error;
      })
  }
  vendedorlogin(){
      this.authService.SignIn('vendedor@vendedor.com', 'test123')
      .catch((error: any) => {
        this.singUpError = error;
      })
  }
  
  login(){
    if(this.form.status == "VALID"){
      this.authService.SignIn(this.form.value.email, this.form.value.password)
      .catch((error: any) => {
        this.singUpError = error;
      })
    } else {
      if(this.form.controls?.email?.errors?.email){
        this.singUpError = 'Email no valido';
      } else if(this.form.controls?.email?.errors?.required){
        this.singUpError = 'Email requerido';
      } else if(this.form.controls?.password?.errors?.required){
        this.singUpError = 'Password requerida';
      }
    }
  }
}
