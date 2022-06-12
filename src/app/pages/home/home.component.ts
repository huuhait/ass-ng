import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/products').subscribe(products => {
      this.products = products;

      console.log(products)
    })
  }

}
