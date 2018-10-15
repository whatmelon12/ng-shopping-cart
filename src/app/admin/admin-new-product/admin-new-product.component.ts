import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';

import { ProductService } from './../../core/service/product.service';
import { CategoryService } from './../../core/service/category.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-new-product',
  templateUrl: './admin-new-product.component.html',
  styleUrls: ['./admin-new-product.component.css']
})
export class AdminNewProductComponent extends BaseFormComponent implements OnInit {

  categories$: Observable<any> = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              categoryServices: CategoryService,
              private productService: ProductService) { 
    super();
    this.categories$ = categoryServices.getAll(); 
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['New Product', Validators.required],
      price: [0.00, Validators.required],
      category: ['', Validators.required],
      imageUrl: ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Madame_Jeanette_and_other_chillies.jpg/290px-Madame_Jeanette_and_other_chillies.jpg', Validators.required]
    });
  }

  submit() {
    if(this.form.valid){
      let data = this.form.value;
      this.productService.create(data).then(() => {
        alert('Successfully created new product.');
        this.router.navigateByUrl('/admin/products');
      });
    }
  }

}
