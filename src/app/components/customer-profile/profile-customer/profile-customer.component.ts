import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../../../services/customer.service';
import { TokenService } from '../../../services/token.service';
import { User } from '../../Models/model';

@Component({
  selector: 'app-profile-customer',
  templateUrl: './profile-customer.component.html',
  styleUrl: './profile-customer.component.css'
})
export class ProfileCustomerComponent {
  customerDetails: User | null = null;
  errorMessage: string | null = null;

  constructor(
    private tokenService: TokenService,
    private customerService: CustomerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const userId = this.tokenService.getUserIdFromToken();
    if (userId) {
      this.getCustomerDetails(userId);
    } else {
      this.errorMessage = 'Unable to fetch user details. Please log in.';
    }
  }

  getCustomerDetails(userId: string): void {
    this.customerService.getCustomerById(userId).subscribe({
      next: (response: User) => {
        this.customerDetails = response;
      },
      error: () => {
        this.errorMessage = 'Error loading customer profile.';
        this.toastr.error('Failed to fetch customer details', '', {
          positionClass: 'toast-top-right',
          progressBar: true,
          timeOut: 4000
        });
      }
    });
  }
}
