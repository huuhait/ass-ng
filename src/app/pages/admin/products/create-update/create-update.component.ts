import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/types';

@Component({
  selector: 'app-products-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.less']
})
export class CreateUpdateComponent implements OnInit {
  isCreate = false;
  productForm = new FormGroup({
    name: new FormControl(''),
    categoryId: new FormControl(0),
    price: new FormControl(0),
    sale_price: new FormControl(0),
    description: new FormControl(''),
    image_url: new FormControl(''),
    status: new FormControl(0),
  })

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.isCreate = (data as any).type === 'create';
    })

    if (!this.isCreate) {
      this.fetchProduct();
    }
  }

  onStatusChange(event: MatSlideToggleChange) {
    this.productForm.setValue({ ...this.productForm.value, status: event.checked ? 1 : 0 })
  }

  fetchProduct() {
    this.http.get<Product>('http://localhost:3000/products/' + this.route.snapshot.params["id"]).subscribe(product => {
      delete (product as any)["id"]
      this.productForm.setValue({ ...product })
    })
  }

  onSubmit() {
    if (this.isCreate) {
      this.http.post<Product>('http://localhost:3000/products', this.productForm.value).subscribe(() => {
        alert("Product created successfully")
        this.router.navigateByUrl("/admin/products")
      })
    } else {
      this.http.put<Product>('http://localhost:3000/products/' + this.route.snapshot.params["id"], this.productForm.value).subscribe(() => {
        alert("Product updated successfully")
        this.router.navigateByUrl("/admin/products")
      })
    }
  }
}
