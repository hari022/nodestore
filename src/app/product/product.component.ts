import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Product} from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product>
  demo: Array<Product>

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this._dataService.getData().subscribe(resData => this.products = resData); // get all the products
  }
  // Add product to the cart
  getCart(product: Product, id) {
    const newCartQuantity = product.cartQuantity + 1 ;
    const newProduct: Product = product;
    newProduct.cartQuantity = newCartQuantity;
    this._dataService.addTOCart(newProduct, id).subscribe(resData => this.demo = resData);
    this.getData();
  }

}
