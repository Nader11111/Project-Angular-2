import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";
import { ProductService } from "../product.service";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent  implements OnInit{
valId : string;
product: products;
 

  


  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private activatedRoute : ActivatedRoute 
  ) {}


  addToCart() {
    this.product.quantite--;
    this.productService.updateProduct(this.product.id,this.product).subscribe();
    this.cartService.addToCart(this.product);
    window.alert("Your product has been added to the cart!");
  }

  // addToCart(product) {
  //   this.cartService.addToCart(product).subscribe();
  //   window.alert("Your product has been added to the cart!");
  // }
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     this.products = products[+params.get("productId")];
  //   });
  // }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe(res=>this.valId=res.get('id'), erreur=>console.log("erreur"), ()=>console.log("finish"));
  //   ;
  // }
 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res=> this.valId=res.get('id')),error=>console.log("error"),()=>console.log('finish');
    this.productService.getProductById(this.valId).subscribe(
      next=> {
        this.product=next
      }
    )
  }
  



//  ngOnInit() {
//   this.activatedRoute.params.subscribe(
//     (params) => {
//       this.ProductService.getProductById(params.id).subscribe(
//         (products) => {
//           this.products = products;
//         }
//       );
//     }
//   );
// }

}