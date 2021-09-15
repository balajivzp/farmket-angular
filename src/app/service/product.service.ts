import { Injectable } from '@angular/core';
import { ProductSheet } from '../model/ProductSheet'
import { API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  saveProduct(productSheet: ProductSheet) {
    console.log(productSheet);
    return "Saved success ";
  }
  getMarketDetails() {
      let  details =  [{id: 2, name: "A1 Vegetables" },
      {id: 3, name: "K.G Market"}
    ];
      return details;
        // return this.http.get<any>(
        //   `${API_URL}/getMarkets`
        // );
  }
}
