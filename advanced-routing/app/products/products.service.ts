import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

 products = [
   {'name': 'Raincoat', 'description': 'foul weather outerwear' , image: '/images/raincoat.jpg' },
   {'name': 'Socks', 'description': 'for keeping feet warm' , image: '/images/socks.jpg' },
   {'name': 'Gloves', 'description': 'to protect hands' , image: '/images/gloves.jpg' },
   {'name': 'Shoes', 'description': 'all purpose footwear' , image: '/images/shoes.jpg' },
   {'name': 'Hat', 'description': 'headwear' , image: '/images/hat.jpg' },
 ]

  constructor() { }

  getProductsData = function () {
    return this.products;
  };



}
