import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from "jwt-decode";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  UserURL: string = 'http://localhost:5273/api/User'
  UserSignUp(UserSignUp: SignUp) {
    return this.http.post(this.UserURL, UserSignUp,{
      responseType: 'text'
    })
  }
  UserSignIn(UserSignIn: SignIn) {
    return this.http.post(this.UserURL + '/login', UserSignIn, {
      responseType: 'text'
    });
  }

  isLoggedIn(): boolean {
    const token: string = localStorage.getItem("token")!;
  
    if (token) {
      return true;
    } else {
      return false
    }
  }
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.UserURL}/login`, credentials);
  }

  getUserIdFromToken(): string | null {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
      return decodedToken.userId; // Assuming userId is part of the payload
    }
    return null;
  }
}
export interface SignIn {
  email: string,
  password: string,
}
export interface SignUp {
  name: string,
  email: string,
  password: string,
  role: number
  nic:string,
  phone:string,
}

