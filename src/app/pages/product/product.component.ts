import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  product = {
    id: 1,
    name: "Nguyễn Nhật Ánh",
    price: 100,
    sale_price: 97,
    description: "Product description",
    image_url: "https://product.hstatic.net/200000122283/product/ra_bo_suoi_-_bm_adb6e4fc8bcf417da77823d80b49e7ff_master.jpg",
    category_id: 1,
    status: 1,
  }

  quantity = 1

  ngOnInit(): void {
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
}
