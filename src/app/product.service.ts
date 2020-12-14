import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { products } from './products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private products: products []

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  urlProducts : string ="http://localhost:3000/product";
  product : products[]
    
  constructor(private http : HttpClient
    ) { }
  
// addToCart(product : products) : Observable<products> {
//   return this.http.post<Products>(this.urlProducts, product, this.httpOptions);
// }

  getProductsJson() : Observable<products[]>{
    return this.http.get<products[]>(this.urlProducts);


  }
 getProductById(id:string): Observable<products>{
   return this.http.get<products>(this.urlProducts+ '/'+id );

 }

 updateProduct(id:string,product:products):Observable<products>{
  return this.http.put<products>(this.urlProducts+'/'+id,product,this.httpOptions);
}

 
}
