import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Product} from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Array<Product>
  demo: Array<Product>

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getData()
    // this._dataService.addTOCart('596bca85734d1d0ff25fd246', 4);
  }
  getData() {
    this._dataService.getData().subscribe(resData => this.products = resData); // get all the products in the cart
  }
  // Method to increase the product quantity in the cart
  increaseQuantity(product: Product, id) {
    const newCartquantity = product.cartQuantity + 1 ;
    const newProduct: Product = product;
    newProduct.cartQuantity = newCartquantity;
    this._dataService.addTOCart(newProduct, id).subscribe(resData => this.demo = resData);

  }
  // Method to decrease the product quantity in the cart
  decreaseQuantity(product: Product, id) {
    const newCartquantity = product.cartQuantity - 1 ;
    const newProduct: Product = product;
    newProduct.cartQuantity = newCartquantity;
    this._dataService.addTOCart(newProduct, id).subscribe(resData => this.demo = resData);

  }
}
