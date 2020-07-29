import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './list/products-list.component';
import { ProductsDetailComponent } from './details/products-detail.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsComponent,
    ProductsDetailComponent
  ],
  imports: [
    BrowserModule
    , ProductsRoutingModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }