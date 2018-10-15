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

  product: any = null;

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
      productService.getOne(id).subscribe(product => this.product = product[0]);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });

    if(this.product){
      this.form.patchValue(this.product);
    }
  }

}
