import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  products!: Product[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(products => {
      this.products = products;
    })
  }

  onProductStatusChange(product: Product, e: {checked: boolean}) {
    this.http.put<Product>('http://localhost:3000/products/' + product.id, { ...product, status: e.checked ? 1 : 0 }).subscribe(() => {
      alert("Product updated successfully")
    })
  }

  onProductDelete(product: Product) {
    this.http.delete<Product>('http://localhost:3000/products/' + product.id).subscribe(() => {
      alert("Product deleted successfully")

      this.products = this.products.filter(p => p.id !== product.id);
    })
  }
}
