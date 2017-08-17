import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // getCart(id: String, quantity: number) {
  //   const newQuantity = quantity + 1;
  //   this._dataService.addTOCart(id, newQuantity);
  // }

}
