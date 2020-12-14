import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  items : products[];
  checkoutForm;
  constructor(
    private cartService: CartService,
        private formBuilder: FormBuilder,

    
) { 
  this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
}
  ngOnInit() {
        this.items = this.cartService.getAllproducts();
        

  }
    Delete(i:number ){
     
      this.items.splice(i,1);
    
  }
}