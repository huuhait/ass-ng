import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {
  product = {
    id: 1,
    name: "Product 1",
    price: 100,
    sale_price: 97,
    description: "Product description",
    image_url: "http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/product-16.jpg",
    category_id: 1,
    status: 1,
  }

  ngOnInit(): void {
  }

}
