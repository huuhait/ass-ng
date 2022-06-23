import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/types';

@Component({
  selector: 'app-categories-create-update',
  templateUrl: './categories-create-update.component.html',
  styleUrls: ['./categories-create-update.component.less']
})
export class CategoriesCreateUpdateComponent implements OnInit {
  isCreate = false;
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    role: new FormControl(0),
  })

  get name_error() {
    return this.categoryForm.get('name')?.hasError('required') ? 'Name is required' : undefined;
  }

  get button_disabled() {
    return this.categoryForm.invalid
  }

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.isCreate = (data as any).type === 'create';
    })

    if (!this.isCreate) {
      this.fetchUser();
    }
  }

  fetchUser() {
    this.http.get<Category>('http://localhost:3000/categories/' + this.route.snapshot.params["id"]).subscribe(category => {
      delete (category as any)["id"]
      this.categoryForm.setValue({ ...category })
    })
  }

  onSubmit() {
    if (this.isCreate) {
      this.http.post<Category>('http://localhost:3000/categories', this.categoryForm.value).subscribe(() => {
        alert("Category created successfully")
        this.router.navigateByUrl("/admin/categories")
      })
    } else {
      this.http.put<Category>('http://localhost:3000/categories/' + this.route.snapshot.params["id"], this.categoryForm.value).subscribe(() => {
        alert("Category updated successfully")
        this.router.navigateByUrl("/admin/categories")
      })
    }
  }
}
