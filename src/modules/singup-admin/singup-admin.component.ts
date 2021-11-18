import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/autenticacion.service';

@Component({
  selector: 'app-singup-admin',
  templateUrl: './singup-admin.component.html',
  styleUrls: ['./singup-admin.component.scss']
})
export class SingupAdminComponent implements OnInit {

  readonly form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    foto: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  singUpError?: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  

  registrarse(){
    if(this.form.status == "VALID"){
      this.authService.SignUp({...this.form.value, admin:true})
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
      } else if(this.form.controls?.foto?.errors?.required){
        this.singUpError = 'Foto requerido';
      }
    }
  }
}
