import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}
  UserURL:string = 'http://localhost:5273/api/User'
  UserSignUp(UserSignUp:SignUp){
    return this.http.post(this.UserURL , UserSignUp)
  }
  UserSignIn(UserSignIn:SignIn){
    return this.http.post(this.UserURL+'/login', UserSignIn ,{
      responseType:'text'
    });
  }

  isLoggedIn():boolean{
    console.log("hello")
    const token:string = localStorage.getItem("token")!;
    const decode:any = jwtDecode(token)
    console.log(decode)
    return true
    // if(decode.Role == "Admin"){  
    //   console.log("Hello")
    //   return true
    // }
    // if(decode.Role == "Customer"){
    //   return false
    // }
    // else{
    //   return false
    // }
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

