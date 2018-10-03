import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private user = null;

  constructor(private auth: AuthService,
              private route: Router) { 
    auth.user$.subscribe((user) => this.user = user);
  }

  canActivate() {
    return true;
    // if(this.user) {
    //   return true;
    // }
    // else {
    //   this.route.navigateByUrl('/user/login');
    //   return false;
    // }
  }
}
