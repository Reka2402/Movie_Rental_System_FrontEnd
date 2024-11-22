import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signInService: AuthService,
    private toastr: ToastrService,
    private rout:Router
  ) {
      this.signinForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          rememberMe:['']
      });
  }
  onSubmit() {
    this.signInService.UserSignIn(this.signinForm.value).subscribe({
      next:(response:any) => {
        localStorage.setItem("token" , response)
        this.toastr.success("User Login Successfully.." , "" , {
          positionClass:"toast-top-right",
          progressBar:true,
          timeOut:4000
        })
      },complete:()=>{
        // this.rout.navigate(['/customer'])
      },error:(error:any)=>{
        this.toastr.warning( error.error, "" , {
          positionClass:"toast-top-right",
          progressBar:true,
          timeOut:4000
        })
      }
    })
  }





















 

}

