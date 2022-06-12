import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  loading = false
  product!: Product

  quantity = 1

  constructor(public http: HttpClient, public route: ActivatedRoute, public cartService: CartService) { }

  ngOnInit(): void {
    this.loading = true
    this.route.params.subscribe(params => {
      this.http.get<Product>(`http://localhost:3000/products/${params["id"]}`).subscribe((product: Product) => {
        this.product = product
        this.loading = false
      })
    })
  }

  onQuantityInput(event: Event) {
    this.quantity = Number((event.target as any).value)

    if (!this.quantity) {
      this.quantity = 1
    }
  }

  addQuantity(): void {
    this.quantity++
  }

  subtractQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  onSubmit() {
    this.cartService.addToCart(this.product.id, this.quantity)
  }
}
