import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Cripto } from 'src/clases/cripto';
import { Usuario } from '../clases/usuario';
import { AuthService } from './autenticacion.service';

export const USURARIOS_PATH = 'users'
export const CRIPTO_PATH = 'criptos'

@Injectable({
  providedIn: 'root'
})
export class StoreManagementService {

  constructor(private bd: AngularFirestore, private authService: AuthService) {}

  GetUsuarios(tipo:string){
    const collection = this.bd.collection<Usuario>(USURARIOS_PATH, ref => ref.where('tipo', '==', tipo))
    return collection.valueChanges()
  }

  GetCriptos(){
    const collection = this.bd.collection<Cripto>(CRIPTO_PATH)
    return collection.valueChanges()
  }

  CrearCripto(data:Cripto){
    const collection = this.bd.collection<Cripto>(CRIPTO_PATH)
    return collection.add(data)
  }

  

}
