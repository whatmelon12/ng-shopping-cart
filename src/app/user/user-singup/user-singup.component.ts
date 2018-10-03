import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';
import { AuthService } from './../../core/service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-singup',
  templateUrl: './user-singup.component.html',
  styleUrls: ['./user-singup.component.css']
})
export class UserSingupComponent extends BaseFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService) { super() }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      //birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  submit() {
    if(this.form.valid){
      let account = this.form.value;
      this.auth.createAccount(account.email, account.password)
        .then(() => this.router.navigateByUrl('/'))
        .catch((error) => alert(error));
    }
  }

}
