import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { BaseFormComponent } from './../../shared/components/base-form/base-form.component';
import { Product } from 'src/app/core/model/product.model';

import { ProductService } from 'src/app/core/service/product.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent extends BaseFormComponent implements OnInit {

  product: Product;

  constructor(private fb: FormBuilder,
              private router: Router,
              private productService: ProductService,
              route: ActivatedRoute) { 
    super(); 

    let id = route.snapshot.paramMap.get('id');
    if(!id) {
      router.navigateByUrl('/admin/products');
    }
    else{
      productService.getOne(id).subscribe(product => console.log(product[0]));
    }
  }

  ngOnInit() {
    // this.form = this.fb.group({
    //   title: [this.product.title, Validators.required],
    //   price: [this.product.price, Validators.required],
    //   category: [this.product.category, Validators.required],
    //   imageUrl: [this.product.imageUrl, Validators.required]
    // });
  }

}
