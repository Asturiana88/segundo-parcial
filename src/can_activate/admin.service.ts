import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isValidAdmin) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
