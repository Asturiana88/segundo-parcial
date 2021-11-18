import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    console.log(this.auth.getUser.tipo)
    if (this.auth.getUser.tipo == "vendedor") {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }}
