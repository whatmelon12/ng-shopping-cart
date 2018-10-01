import { AuthService } from './../../core/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  form: AbstractControl;

  constructor(private fb: FormBuilder,
              private router: Router,
              private auth: AuthService) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  hasErrors(control: string){
    let formControl: AbstractControl = this.form.get(control);
    if (!formControl.valid && formControl.touched) return true;
    return false;
  }

  hasError(control: string, validator: string) {
    let formControl: AbstractControl = this.form.get(control);
    if (!formControl.valid && formControl.touched && formControl.errors[validator]) return true;
    return false;
  }

  submit(){
    if(this.form.valid){
      let credentials = this.form.value;
      this.auth.login(credentials.email, credentials.password)
        .then(() => this.router.navigateByUrl('/'))
        .catch((error) => console.log(error));
    }
  }

}
