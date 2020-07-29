import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './list/products-list.component';
import { ProductsDetailComponent } from './details/products-detail.component';

const productsRoutes: Routes = [
    {
        path: 'products',
        component: ProductsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ProductsListComponent },
            { path: 'detail/:id', component: ProductsDetailComponent }
        ]
     }
];

@NgModule({
    imports: [ RouterModule.forChild(productsRoutes) ],
    exports: [ RouterModule]
})

export class ProductsRoutingModule {}
