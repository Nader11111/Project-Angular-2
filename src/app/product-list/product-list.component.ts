import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : products[];
  constructor(private ps: ProductService ) {
   }
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit() {
this.ps.getProductsJson().subscribe(
  (products)=> {
    this.products= products;

  },
  (error) => {
    alert('Problème d\'accès à l api les données affichées sont fake');
    console.log(error);
  }
)
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/