import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string;
  role: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.name = "balaji";
    this.role = "FARMER";
    // this.authService.getUserRole(sessionStorage.getItem('USER')).subscribe(
    //   res => {
    //     sessionStorage.setItem("ROLE", res);
    //     this.role = res;
    //   }
    // )
    //   this.name = this.authService.getAuthenticatedUser();
  }
isFarmer() {
  return this.role === 'FARMER';
}
}
