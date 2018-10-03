import { AuthService } from './../../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = null;

  constructor(private auth: AuthService) { 
    auth.user$.subscribe((user) => this.user = user);
  }

  ngOnInit() {
  }

  signOut() {
    this.auth.logout();
  }
}
