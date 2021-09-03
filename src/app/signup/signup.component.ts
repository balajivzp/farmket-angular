import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User} from '../model/User';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

onSignup(form: NgForm) {
  console.log(form.value);
  this.user = form.value;
  if(this.authService.signup(this.user)) {
      console.log(this.user);
  }
}

}
