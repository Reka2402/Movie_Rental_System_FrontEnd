import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  UserURL:string = 'http://localhost:5273/api/User'
  UserSignUp(UserSignUp:SignUp){
    return this.http.post(this.UserURL + '/add-user' , UserSignUp)
  }
  UserSignIn(UserSignIn:SignIn){
    return this.http.post(this.UserURL + '/login', UserSignIn ,{
      responseType:'text'
    });
  }
  isLoggedIn():boolean{
    const token:string = localStorage.getItem("token")!;
    const decode:any = jwtDecode(token)
    if(decode.Role == "Admin"){  
      return true
    }else{
      return false
    }
  }
}
export interface SignIn{
  email:string,
  password:string,
}
export interface SignUp{
 name:string,
  email:string,
  password:string,
  role:number
}
