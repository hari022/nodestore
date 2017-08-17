import { Injectable } from '@angular/core';
import {Http,  Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Product} from "./product";


@Injectable()
export class DataService {
  private _getUrl = '/api/products';
  private  _updateUrl = '/api/product/'

  constructor(private _http: Http) { }

  getData() {
    return this._http.get(this._getUrl).
    map((response: Response) => response.json());

  }
  // addTOCart(id: String, cartQuantity: number) {
  //   console.log(id, cartQuantity)
  //   console.log(this._updateUrl + id);
  //  const headers = new Headers({'Content-Type': 'application/json'});
  //   const options = new RequestOptions({headers: headers})
  //   return this._http.put(this._updateUrl + id, JSON.stringify(cartQuantity), options).
  //   map((response: Response) => response.json());
  // }
    addTOCart(product, id) {
          console.log(product.Name, id)
         const headers = new Headers({'Content-Type': 'application/json'});
          const options = new RequestOptions({headers: headers})
          return this._http.put(this._updateUrl + id, JSON.stringify(product), options).
          map((response: Response) => response.json());
        }

}
