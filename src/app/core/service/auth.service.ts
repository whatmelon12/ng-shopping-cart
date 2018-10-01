import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: User = null;

  constructor(private afAuth: AngularFireAuth) { 
    afAuth.user.subscribe((user: User) => user ? this.authState = user : this.authState = null)
  }

  login(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  isLoggedIn() {
    return this.authState;
  }
}
