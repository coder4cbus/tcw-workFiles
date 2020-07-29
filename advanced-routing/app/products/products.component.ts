import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Object[] = null;

  constructor(private ProductsService: ProductsService ) { }

  ngOnInit() {
    this.products = this.ProductsService.getProductsData();
  }

}
