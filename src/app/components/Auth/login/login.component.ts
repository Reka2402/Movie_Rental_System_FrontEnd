import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    emailAddress:'',
    password:'',
  }
  // onSubmit(loginForm:any){
  //   console.log(loginForm.value);
  // }
  onSubmit(form: NgForm) {
    if (form.valid) {
     
        alert('Form Submitted!');
    } else {
      
        form.control.markAllAsTouched();
    }
  }

}

