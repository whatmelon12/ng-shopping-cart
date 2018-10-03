import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { Observable } from '../../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = this.afAuth.authState;

  constructor(private afAuth: AngularFireAuth) { }

  createAccount(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
