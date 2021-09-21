import { Injectable } from '@angular/core';
import { API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User} from '../model/User'
import { Options } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(
      `${API_URL}/users/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem("USER", username);
            sessionStorage.setItem("TOKEN", `Bearer ${data.token}`);
            this.getUserRole(this.getAuthenticatedUser());
            return data;
          }
        )
      );
  }

  signup(username:string, password:string,city:string, email:string, phone:string, name:string, businessTitle:string) {
    return this.http.post<any>(
      `${API_URL}/users/register`,{
       username,
       password,
       city,
       phone,
       email,
       name,
       businessTitle
     });
  }
  getUserId(username:string) {
    return 1;
    // return this.http.get<any>(
    //   `${API_URL}/getId/`+username
    // );
  }
  getMarketName(id) {
    return " A1 Markets"
    // return this.http.get<string>(
    //   `${API_URL}/getMarketname/${id}`
    // )
  }

  getCurrUserId() {
    let username = this.getAuthenticatedUser();
    return this.getUserId(username);
  }
  getUserRole(username) {
     this.http.get<any>(
      `${API_URL}/users/getUserRole/${username}`
    ).subscribe( res => {
      console.log(res);
      sessionStorage.setItem("ROLE", res.role);
    })
  }

  getAuthenticatedUser() {
  return sessionStorage.getItem("USER")
}

getAuthenticatedToken() {
  if(this.getAuthenticatedUser())
    return sessionStorage.getItem("TOKEN")
}
getAuthenticatedUserRole() {
  return sessionStorage.getItem("ROLE");
}

  isUserLoggedIn() {
    let user = sessionStorage.getItem("USER")
    return !(user === null)
  }


  logout(){
    sessionStorage.removeItem("USER")
    sessionStorage.removeItem("ROLE")
    sessionStorage.removeItem("TOKEN")
}



}
