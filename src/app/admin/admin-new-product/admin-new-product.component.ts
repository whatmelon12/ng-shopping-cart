import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.css']
})
export class AdminNewProductComponent extends BaseFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { super() }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['New Product', Validators.required],
      price: [0.00, Validators.required],
      category: ['', Validators.required],
      imageUrl: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Madame_Jeanette_and_other_chillies.jpg/290px-Madame_Jeanette_and_other_chillies.jpg', Validators.required]
    });
  }

  getForm() {
    return this.form.value;
  }

}
