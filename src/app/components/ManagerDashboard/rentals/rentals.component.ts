import { Component } from '@angular/core';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {
 
  searchText: string = '';
  isAddRentalPopupOpen: boolean = false;

  rentals = [
    { id: 1, customerName: 'John Doe', nic: '12345-6789012-3', rentedDvd: 'The Shawshank Redemption', rentalStatus: 'Returned' },
    { id: 2, customerName: 'Jane Smith', nic: '23456-7890123-4', rentedDvd: 'Inception', rentalStatus: 'Overdue' },
    { id: 3, customerName: 'Alice Brown', nic: '34567-8901234-5', rentedDvd: 'Interstellar', rentalStatus: 'Pending' },
    { id: 4, customerName: 'Bob Green', nic: '45678-9012345-6', rentedDvd: 'The Dark Knight', rentalStatus: 'Returned' }
  ];

  newRental = {
    customerName: '',
    nic: '',
    rentedDvd: '',
    rentalStatus: 'Pending'
  };

  openAddRentalPopup() {
    this.isAddRentalPopupOpen = true;
  }

  closeAddRentalPopup() {
    this.isAddRentalPopupOpen = false;
  }

  addRental() {
    if (this.newRental.customerName && this.newRental.nic && this.newRental.rentedDvd) {
      const newId = this.rentals.length ? this.rentals[this.rentals.length - 1].id + 1 : 1;
      this.rentals.push({ id: newId, ...this.newRental });
      this.closeAddRentalPopup();
      this.newRental = { customerName: '', nic: '', rentedDvd: '', rentalStatus: 'Pending' };
    } else {
      alert('Please fill in all required fields!');
    }
  }

  onEdit(id: number) {
    console.log('Edit rental with ID:', id);
  }

  onDelete(id: number) {
    this.rentals = this.rentals.filter(rental => rental.id !== id);
  }

  onView(id: number) {
    console.log('View rental details for ID:', id);
  }
  }
  