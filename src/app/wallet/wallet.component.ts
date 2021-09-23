import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  wallet: any
  userId: number;
  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserId(this.authService.getAuthenticatedUser()).subscribe(
      res => {
        this.userId = res.id;
        console.log(this.userId);
        this.getWallet();
      }
    )
  }
  getWallet() {
    this.productService.getBalance(this.userId).subscribe(
      res => {
        this.wallet = res;
        console.log(this.wallet);
      }
    )
  }

}
