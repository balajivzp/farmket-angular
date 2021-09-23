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
  productdetails: any[];
  userId: number;
  isFarmer = false;
  price: number;
  totalPrice: number;
  wallet:any;

  constructor(public authService: AuthService, private productService: ProductService) { }

  ngOnInit(): void {
  this.isFarmer = this.authService.getAuthenticatedUserRole() === 'FARMER';
  this.authService.getUserId(this.authService.getAuthenticatedUser()).subscribe(
    res => {
      this.userId = res.id;
      console.log(this.userId);
      this.refreshList();
      
      
    }
  )

    console.log(this.productdetails);
  }
  refreshList() {
    if(this.isFarmer) {
    this.productService.getProductDetailById(this.userId).subscribe(
      res => {
        this.productdetails = res;
        console.log(this.productdetails);
      }
    );
  }
  else {
    this.productService.getProductDetailByMarketId(this.userId).subscribe(
      res => {
        this.productdetails = res;
        this.productdetails = this.productdetails.filter(e => e.isApproved === false);
        console.log(this.productdetails);
      }
    );
  }
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
  onApprove(productSheet: any) {
   this.totalPrice = productSheet.quantity * this.price;
   this.getUserWallet(productSheet.farmerId, this.totalPrice);
    productSheet.isApproved = true;
    this.productService.updateProduct(productSheet.prodId, productSheet.farmerId, productSheet.marketId, productSheet.productName, productSheet.quantity, productSheet.date, productSheet.isApproved)
    .subscribe(res => {
      console.log("Succesfully updated");
    });
   
    

  }
  getUserWallet(id, totalPrice) {
    this.productService.getBalance(id).subscribe(
      res => {
        this.wallet = res;
        console.log(this.wallet);
        if(this.wallet) {
          this.wallet.balance = this.wallet.balance +totalPrice;
          this.productService.updateBalance(this.wallet.id, this.wallet.farmerId, this.wallet.balance).subscribe(
            res => {
              console.log(res);
            }
          )
        }
        else {
         
          this.productService.saveBalance(id, this.totalPrice).subscribe(
            res => {
              console.log(res);
            }
          )
        }
      }

    )
  }
  onDelete(id) {
    console.log(id);
    // this.productService.deleteProduct(id).subscribe(
    //   res => {
    //     this.refreshList();
    //   }
    // )
  }

}
