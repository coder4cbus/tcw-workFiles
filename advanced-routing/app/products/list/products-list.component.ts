import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'products-List',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Object[] = null;

  constructor(private ProductsService: ProductsService, private router: Router ) { }

  ngOnInit() {
    this.products = this.ProductsService.getProductsData();
  }

  showDetail(id: number) {
    this.router.navigate(['/products/detail', id ]);  
  }
}
