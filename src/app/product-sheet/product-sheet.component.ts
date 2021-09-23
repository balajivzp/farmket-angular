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
  message: string;


  productSheet: ProductSheet;

  constructor(private productService: ProductService, private authService: AuthService) { }

  ngOnInit(): void {
     this.productService.getMarketDetails().subscribe(
       res => {
         console.log(res)
         this.marketDetails = res;
       }
     )

    this.authService.getUserId(this.authService.getAuthenticatedUser()).subscribe(
      response => {
        this.userId = response.id;
      }
    )

  }

  onSubmit(form: NgForm) {
    this.productSheet = form.value;
    this.productSheet.date = new Date().toString();
    this.productSheet.farmerId = this.userId;
    this.productSheet.isApproved = false;
    console.log(this.productSheet);
    this.productService.saveProduct(this.productSheet.farmerId,this.productSheet.marketId,this.productSheet.productName,this.productSheet.quantity,this.productSheet.date,this.productSheet.isApproved).subscribe(
      res => {
        console.log(res);
        this.message = "Product sheet submitted Successfull";
      }
    );

    // this.productService.saveProduct(this.productSheet).subscribe(
    //   res => {
    //
    //   }
    // );
  }

}
