import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  customers = [
    {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      nic: '123456789V',
      mobileNumber: '1234567890',
      address: '123 Street, City',
      isActive: true,
    },
    {
      fullName: 'Jane Smith',
      email: 'jane.smith@example.com',
      nic: '987654321V',
      mobileNumber: '9876543210',
      address: '456 Avenue, City',
      isActive: false,
    },
  ];

  newCustomer = {
    fullName: '',
    email: '',
    nic: '',
    mobileNumber: '',
    address: '',
    isActive: true,
  };

  // openAddCustomerModal() {
  //   const modal = new bootstrap.Modal(document.getElementById('addCustomerModal'));
  //   modal.show();
  // }

  // addCustomer() {
  //   this.customers.push({ ...this.newCustomer });
  //   this.newCustomer = { fullName: '', email: '', nic: '', mobileNumber: '', address: '', isActive: true };
  //   const modal = bootstrap.Modal.getInstance(document.getElementById('addCustomerModal'));
  //   modal.hide();
  // }
}
