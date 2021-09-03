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
  getAuthenticatedUser() {
  return sessionStorage.getItem("USER")
}

getAuthenticatedToken() {
  if(this.getAuthenticatedUser())
    return sessionStorage.getItem("TOKEN")
}

  isUserLoggedIn() {
    let user = localStorage.getItem("USER")
    return !(user === null)
  }

  logout(){
    localStorage.removeItem("USER")
    localStorage.removeItem("ROLE")
    localStorage.removeItem("TOKEN")
}



}