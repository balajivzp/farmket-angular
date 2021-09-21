import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User} from '../model/User';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

onSignup(form: NgForm) {
  console.log(form.value);
  this.user = form.value;
  this.authService.signup(this.user.username, this.user.password,this.user.city, this.user.email, this.user.phone, this.user.name, this.user.businessType).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['']);
       }
  )
     
  
}

}
