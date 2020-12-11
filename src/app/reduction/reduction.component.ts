import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-reduction',
  templateUrl: './reduction.component.html',
  styleUrls: ['./reduction.component.css']
})
export class ReductionComponent implements OnInit {
  reductionCosts;

  constructor(
      private cartService: CartService

    
  ) { }

  ngOnInit() {
        this.reductionCosts = this.cartService.getReductionPrices();

  }

}