import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient

) {}
  urlProducts : string ="http://localhost:3000/product";
  product : products[]=[]



    addToCart(product) {
        this.product.push(product);
      }
    getAllproducts(){
      return this.product;
    }
    getItems() : Observable<products[]>{
      return this.http.get<products[]>(this.urlProducts);
  
  
    }
  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
  getReductionPrices() {
    return this.http.get('/assets/reduction.json');
  }
  

}