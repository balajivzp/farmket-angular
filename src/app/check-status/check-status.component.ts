import { Component, OnInit } from '@angular/core';
import { ProductSheet } from '../model/ProductSheet'
import { ProductService} from '../service/product.service';
import { AuthService} from '../service/auth.service'

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.css']
})
export class CheckStatusComponent implements OnInit {
  productdetails: ProductSheet[];
  userId: number;

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit(): void {
    this.userId = this.authService.getCurrUserId();
    this.productdetails = this.productService.getProductDetailById(this.userId);
    console.log(this.productdetails);
  }

  getMarket(id) {
    return this.authService.getMarketName(id);
    // let marketName;
    // this.authService.getMarketName(id).subscribe(
    //   res => {
    //     marketName = res;
    //   }
    // )
    // return marketName;
    //
  }

}
