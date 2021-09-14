import { Component, OnInit } from '@angular/core';
import { AuthService} from '../service/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string;
  user: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.name = "balaji";
    this.user = "FARMER";
    //   this.name = this.authService.getAuthenticatedUser();
  }
isFarmer() {
  return this.user === 'FARMER';
}
}
