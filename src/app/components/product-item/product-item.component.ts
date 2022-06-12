import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/types';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.less']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product

  ngOnInit(): void {
  }

}
