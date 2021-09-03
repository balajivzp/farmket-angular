import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  constructor(private authService : AuthService, private router: Router) { }

  ngOnInit(): void {
  }
onLogin(form: NgForm) {

  this.authService.login(form.value.username, form.value.password)
  .subscribe(response => {
    console.log(response);
  }, error => {
    this.errorMessage = "Error has occured";
  })
}

}
