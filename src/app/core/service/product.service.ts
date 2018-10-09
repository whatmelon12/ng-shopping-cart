import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Guid } from "guid-typescript";
import * as _ from 'lodash';

import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product: Product) {
    return this.db.list('/products').push(Object.assign(product, {id: Guid.create().toString()}));
  }

  getAll() {
    return this.db.list<Product>('/products').valueChanges();
  }

  getOne(id: string) {
    return this.db.list('/products', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
  }
}