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
  this.authService.getUserId(this.authService.getAuthenticatedUser()).subscribe(
    res => {
      this.userId = res.id;
      console.log(this.userId);
      this.refreshList();
      console.log("HEllo");
    }
  )

    console.log(this.productdetails);
  }
  refreshList() {
    this.productService.getProductDetailById(this.userId).subscribe(
      res => {
        this.productdetails = res;
        console.log(this.productdetails);
      }
    );
  }

  getMarket(id) {
    let marketName;
    this.authService.getMarketName(id).subscribe(
      res => {
        marketName = res.name;
        console.log(marketName);
      }
    )
    return marketName;

  }
  onDelete(id) {
    this.productService.deleteProduct(id).subscribe(
      res => {
        this.refreshList();
      }
    )
  }

}
