import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/types';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  carts: Cart[] = []

  constructor(private http: HttpClient, private authService: AuthService, private router: Router) {
    this.carts = JSON.parse(localStorage.getItem('carts') || '[]')
  }
  
  addToCart(product_id: number, quantity: number) {
    const cart = this.carts.find(cart => cart.product_id === product_id)

    if (cart) {
      cart.quantity = quantity
    } else {
      this.carts.push({ product_id, quantity })
    }
    localStorage.setItem('carts', JSON.stringify(this.carts))
  }

  removeFromCart(product_id: number) {
    this.carts = this.carts.filter(cart => cart.product_id !== product_id)
    localStorage.setItem('carts', JSON.stringify(this.carts))
  }

  createCart(address: string) {
    this.http.post<{ cart_id: number }>("http://localhost:3000/carts", {
      userId: this.authService?.accessToken?.user?.id,
      carts: [...this.carts].map(c => ({ productId: c.product_id, quantity: c.quantity })),
      address
    }).subscribe(data => {
      alert("Đặt hàng thành công")
      this.carts = []
      localStorage.setItem('carts', JSON.stringify(this.carts))

      this.router.navigateByUrl("/")
    })
  }
}
