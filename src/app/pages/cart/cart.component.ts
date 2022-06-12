import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  carts: { product: Product, quantity: number }[]
  formCart = new FormGroup({
    address: new FormControl("", [Validators.required])
  })

  constructor(public cartService: CartService, private httpClient: HttpClient) {
    this.carts = []
  }

  get total() {
    return this.carts.reduce((acc, cart) => acc + cart.product.sale_price * cart.quantity, 0)
  }

  get address_error() {
    const errors = this.formCart.get("address")?.errors

    if (!errors) {
      return
    }

    if (errors["required"]) {
      return "Bạn chưa nhập địa chỉ"
    }

    return
  }

  ngOnInit(): void {
    this.cartService.carts.forEach(cart => {
      this.httpClient.get<Product>(`http://localhost:3000/products/${cart.product_id}`).subscribe(product => {
        this.carts.push({ product, quantity: cart.quantity })
      })
    })
  }

  onQuantityInput(event: Event, product_id: number) {
    let quantity = Number((event.target as any).value)

    if (!quantity) {
      quantity = 1
    }

    this.cartService.addToCart(product_id, quantity)
  }

  updateQuantity(product_id: number, quantity: number) {
    const cart = this.carts.find(cart => cart.product.id === product_id)

    if (cart) {
      cart.quantity = quantity
    }

    this.cartService.addToCart(product_id, quantity)
  }

  createCart() {
    this.cartService.createCart(this.formCart.get("address")?.value)
  }

  removeFromCart(product_id: number) {
    this.cartService.removeFromCart(product_id)

    this.carts = this.carts.filter(cart => cart.product.id !== product_id)
  }
}
