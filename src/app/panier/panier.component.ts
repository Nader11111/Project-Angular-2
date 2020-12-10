import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  items;
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
        this.items = this.cartService.getItems();

  }

}