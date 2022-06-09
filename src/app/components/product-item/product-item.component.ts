import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
