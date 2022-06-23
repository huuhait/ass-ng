import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/types';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Category[]>('http://localhost:3000/categories').subscribe(categories => {
      this.categories = categories;
    })
  }

  onCategoryStatusChange(category: Category, e: {checked: boolean}) {
    this.http.put<Category>('http://localhost:3000/categories/' + category.id, { ...category, role: e.checked ? 1 : 0 }).subscribe(() => {
      alert("User updated successfully")
    })
  }

  onCategoryDelete(category: Category) {
    this.http.delete<Category>('http://localhost:3000/categories/' + category.id).subscribe(() => {
      alert("Product deleted successfully")

      this.categories = this.categories.filter(p => p.id !== category.id);
    })
  }
}
