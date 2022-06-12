import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  products!: Product[];
  categories!: Category[];

  constructor(private http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/categories').subscribe(categories => {
      this.categories = categories;
    })

    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.http.get<Product[]>(`http://localhost:3000/products?categoryId=${params["id"]}`).subscribe(products => {
          this.products = products;
        })
      }
    })
  }
}
