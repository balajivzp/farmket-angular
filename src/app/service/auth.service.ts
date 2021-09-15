import { Injectable } from '@angular/core';
import { API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { User} from '../model/User'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem("USER", username);
            sessionStorage.setItem("TOKEN", `Bearer ${data.token}`);
            return data;
          }
        )
      );
  }

  signup(user: User) {
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
       user
     });
  }
  getUserId(username:string) {
    return 1;
    // return this.http.get<any>(
    //   `${API_URL}/getId/`+username
    // );
  }
  getCurrUserId() {
    let username = this.getAuthenticatedUser();
    return this.getUserId(username);
  }

  getAuthenticatedUser() {
  return sessionStorage.getItem("USER")
}

getAuthenticatedToken() {
  if(this.getAuthenticatedUser())
    return sessionStorage.getItem("TOKEN")
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
