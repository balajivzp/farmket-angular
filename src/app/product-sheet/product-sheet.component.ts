import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductSheet } from '../model/ProductSheet';
import { ProductService} from '../service/product.service';
import { AuthService} from '../service/auth.service'


@Component({
  selector: 'app-product-sheet',
  templateUrl: './product-sheet.component.html',
  styleUrls: ['./product-sheet.component.css']
})
export class ProductSheetComponent implements OnInit {
  username: string;
  userId: number;
  marketDetails : any[];


  productSheet: ProductSheet;

  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
    this.marketDetails = this.productService.getMarketDetails();
    // this.productService.getMarketDetails().subscribe(
    //   res => {
    //     this.marketDetails = res;
    //   }
    // )
    // this.authService.getUserId(this.username).subscribe(
    //   response => {
    //     this.userId = response;
    //   }
    // )
    this.userId = this.authService.getCurrUserId();
  }

  onSubmit(form: NgForm) {
    this.productSheet = form.value;
    this.productSheet.date = new Date().toString();
    this.productSheet.farmerId = this.userId;
    this.productSheet.isApproved = false;
    console.log(this.productSheet);
    this.productService.saveProduct(this.productSheet);

    // this.productService.saveProduct(this.productSheet).subscribe(
    //   res => {
    //
    //   }
    // );
  }

}
