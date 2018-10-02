import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';
import { AuthService } from './../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService) { super() }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  submit(){
    if(this.form.valid){
      let credentials = this.form.value;
      this.auth.login(credentials.email, credentials.password)
        .then((user) => this.router.navigateByUrl('/'))
        .catch((error) => console.log(error));
    }
  }

}
