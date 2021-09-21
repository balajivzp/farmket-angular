import { Injectable } from '@angular/core';
import { ProductSheet } from '../model/ProductSheet'
import { API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient ) { }



  saveProduct(farmerId, marketId,productName,quantity,date,isApproved) {
    return this.http.post<any>(
      `${API_URL}/productsheet/saveProductSheet`,
      {
        farmerId,
        marketId,
        productName,
        quantity,
        date,
        isApproved
      }
    )
  }
  getMarketDetails() {
    return this.http.get<any>(
      `${API_URL}/users/getMarketList`
    )
  }

  getProductDetailById(id: number) {
    return this.http.get<any>(
      `${API_URL}/productsheet/getProductDetail/${id}`
    );
  }

  deleteProduct(id) {
    return this.http.delete(
      `${API_URL}/deleteProduct/${id}`
    )
  }
}
