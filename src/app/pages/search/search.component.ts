import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  products!: Product[];
  categories!: Category[];
  name!: string;

  constructor(private http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:3000/categories').subscribe(categories => {
      this.categories = categories;
    })

    this.route.queryParams.subscribe(params => {
      this.name = params["name"];
      this.http.get<Product[]>(`http://localhost:3000/products?q=${params["name"]}`).subscribe(products => {
        this.products = products;
      })
    })
  }

}
