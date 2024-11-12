import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    fullname: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
    role: '',
    agreed: '',

  };
  onRegister(RegisterForm: any) {
    console.log(RegisterForm.value)
  }
  passwordsMatch = true;

  checkPasswords() {
    this.passwordsMatch = this.user.password === this.user.confirmPassword;
  }
  // onRegister(form: NgForm) {
  //   if (form.invalid) {
  //       form.control.markAllAsTouched();
  //       return;
  //   }
  


}

