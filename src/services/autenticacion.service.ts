import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from "@angular/router";
import { Usuario } from '../clases/usuario';
import { BehaviorSubject } from 'rxjs';
import { Cripto } from 'src/clases/cripto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: any; // Save logged in user data
  singUpError: string = '';
  singInError: string = '';
  singout = false
  isLoading = new BehaviorSubject<boolean>(true);

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        user.reload();
        this.GetUserData((user.toJSON() as Usuario).uid);
      } else {
        this.isLoading.next(false)
      }
    })
  }

  currentUserObeservable(){
    return this.afAuth.authState
  }

  // Sign in with email/password
  SignIn(email: any, password: any) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(async (result: any) => {
        this.singout = false
        await this.GetUserData(result.user.uid);
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
      }).catch((error: any) => {
        this.singInError = error
      })
  }

  // Sign up with email/password
  SignUp(usuario: Usuario) {
    return this.afAuth.createUserWithEmailAndPassword(usuario.email, usuario.password || '')
      .then(async (result: any) => {
        this.SetUserData(result.user.toJSON(), usuario);
        (await this.afAuth.currentUser)?.sendEmailVerification().then(res => console.log(res))
        this.router.navigate(['']);
      })
  }

  SetUserData(user: Usuario, userData: Usuario) {
    const userFormado = {...user, ...userData};
    this.isLoading.next(true)
    if (userData){
      this.afs.collection('users')
      .doc(user.uid).set(JSON.parse(JSON.stringify(userFormado))).then(
        (val: any) => {
          localStorage.setItem('user', JSON.stringify(userFormado));
          this.isLoading.next(false)
        }
      );
    }
   }


  async GetUserData(userUid:string){
      this.isLoading.next(true)
      return await this.afs.collection('users')
      .doc(userUid).valueChanges().subscribe(
        (val) => {
          if (!this.singout) {
            localStorage.setItem('user', JSON.stringify(val));
            this.isLoading.next(false)
          }
          this.isLoading.next(false)
        }
      );
  }

  SetCripto(cripto: Cripto[]) {
    this.afs.collection('users')
    .doc(this.getUser.uid).update({cripto})
    .then((res) => console.log(res));
  }

  Validar(uid:string) {
    this.afs.collection('users')
    .doc(uid).update({approved:true})
    .then((res) => console.log(res));
  }

  RemoverAcceso(uid:string) {
    this.afs.collection('users')
    .doc(uid).update({approved:false})
    .then((res) => console.log(res));
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.singout = true
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }

  get isLoggedIn(): boolean {
    const userData = localStorage.getItem('user')
    if (!userData) return false
    const user: Usuario = JSON.parse(userData);
    return !!user
  }

  get isValid(): boolean {
    const userData = localStorage.getItem('user')
    if (!userData) return false
    const user: Usuario = JSON.parse(userData);
    return user.emailVerified && user.approved
  }

  get isValidAdmin(): boolean {
    const userData = localStorage.getItem('user')
    if (!userData) return false
    const user: Usuario = JSON.parse(userData);
    return user.admin
  }

  get getUser(){
    const userData = localStorage.getItem('user')
    if(userData){
      const user = JSON.parse(userData || "");
      return user;
    }
  }
}