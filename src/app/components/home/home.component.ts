import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { ContactUs } from '../Models/model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contactForm!: FormGroup;
 
  constructor(private fb: FormBuilder, private contactUsService: CustomerService, private toastr: ToastrService,)  {}


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      FullName: ['', [Validators.required, Validators.minLength(3)]],
      EmailAddress: ['', [Validators.required, Validators.email]],
      Message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      const message: ContactUs = {
        ContactId: 0,
        FullName: this.contactForm.value.FullName,
        EmailAddress: this.contactForm.value.EmailAddress,
        Message: this.contactForm.value.Message,
        SubmittedOn: new Date().toISOString(),
      };

      this.contactUsService.addMessage(message).subscribe({
        next: (response) => {
          this.toastr.success('Message submitted successfully!', 'Success');
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Error submitting message:', error);
          this.toastr.error('An error occurred. Please try again.', 'Error');
        },
      });
    }
  }
  scrollToContact() {
    const element = document.getElementById('contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  
  }
  

