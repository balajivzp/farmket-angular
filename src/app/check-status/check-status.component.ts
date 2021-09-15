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

  constructor(private authService: AuthService, private productService: ProductService) { }

  ngOnInit(): void {
    
  }

}
