import { AbstractControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent {

  public form: AbstractControl;

  constructor() { }

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

}
