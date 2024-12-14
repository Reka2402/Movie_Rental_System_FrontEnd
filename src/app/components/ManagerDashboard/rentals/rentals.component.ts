import { Component } from '@angular/core';
import { RentalService } from '../../../services/rental.service';
import { Movie, Movierequest, RentalRequestModel, RentalResponseModel, User } from '../../Models/model';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrl: './rentals.component.css'
})
export class RentalsComponent {
  rentals: RentalResponseModel[] = [];
  users : User[]=[];
  movies:Movierequest[]=[];
  id!:string;
  

  isLoading: boolean = true;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadRentals();
  }

  loadRentals(): void {
    this.rentalService.getAllRentals().subscribe(
      (data) => {
        this.rentals = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching rental data:', error);
        this.isLoading = false;
      } 
    );
  }

  accept(id:string){
    this.rentalService.ApproveRental(id).subscribe((data)=>{

    })
       
  }
  // searchText: string = '';
  // isAddRentalPopupOpen: boolean = false;

  // rentals = [
  //   { id: 1, customerName: 'John Doe', nic: '12345-6789012-3', rentedDvd: 'The Shawshank Redemption', rentalStatus: 'Returned' },
  //   { id: 2, customerName: 'Jane Smith', nic: '23456-7890123-4', rentedDvd: 'Inception', rentalStatus: 'Overdue' },
  //   { id: 3, customerName: 'Alice Brown', nic: '34567-8901234-5', rentedDvd: 'Interstellar', rentalStatus: 'Pending' },
  //   { id: 4, customerName: 'Bob Green', nic: '45678-9012345-6', rentedDvd: 'The Dark Knight', rentalStatus: 'Returned' }
  // ];

  // returnRental(rentalId: number) {
  //   this.adminservice.returnRental(rentalId).subscribe(
  //       (response) => {
  //           console.log('Rental returned successfully', response);
  //           this.toastr.success('DVD returned successfully');
  //           this.router.navigate(['/admin'])
  //       },
  //       (error) => {
  //           console.error('Error returning rental', error);
  //           this.toastr.error('Failed to return DVD');
  //       }
  //   );
  // }
  //   rejectAction(id: number) {
  //     this.adminservice.rejectrental(id).subscribe(
  //       (response: any) => {
  //         // Handle JSON response
  //         this.toastr.success(response.message, 'Success');
  //         this.getrentals();
  //       },
  //       (error) => {
  //         // Handle JSON error response
  //         const errorMessage =
  //           error.error?.message || 'An unexpected error occurred.';
  //         this.toastr.error(errorMessage, 'Error');
  //       }
  //     );
  //   }
  
  //   acceptAction(id: number): void {
  //     this.adminservice.acceptRental(id).subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         // Assuming `data` contains rental information, including the DVD title
  //         const movieName = data;
  //         this.toastr.success(`Rental accepted successfully"!`, 'Success');
  //         this.getrentals();
  //       },
  //       error: (err) => {
  //         console.error('Error accepting rental:', err);
  //         this.toastr.error(
  //           'Failed to accept the rental. Please try again.',
  //           'Error'
  //         );
  //       },
  //     });
  //   }
  //   loadAcceptedRentalsCount() {
  //     this.adminservice.getAcceptedRentalsCount().subscribe(
  //       (response: { count: number }) => {
  //         this.acceptedRentalsCount = response.count;
  //       },
  //       (error) => {
  //         console.error('Failed to fetch accepted rentals count:', error);
  //       }
  //     );
  //   }
  //   loadReturnedRentalsCount() {
  //     this.adminservice.getReturnedRentalsCount().subscribe(
  //       (response: { count: number }) => {
  //         this.returnedRentalsCount = response.count;
  //       },
  //       (error) => {
  //         console.error('Failed to fetch returned rentals count:', error);
  //       }
  //     );
  //   }
  
  //   loadRejectedRentalsCount() {
  //     this.adminservice.getRejectedRentalsCount().subscribe(
  //       (response: { count: number }) => {
  //         this.rejectedRentalsCount = response.count;
  //       },
  //       (error) => {
  //         console.error('Failed to fetch rejected rentals count:', error);
  //       }
  //     );
  //   }
  
  //     // Fetch rentals for a specific customer
  //     fetchRentals() {
  //       this.adminservice.getRentalsByCustomer(this.customerId).subscribe({
  //         next: (data) => {
  //           this.rentals = data;
  //           this.showTable = true;
  //         },
  //         error: (err) => {
  //           this.toastr.error(err.error.message || 'rentalid is invalid');
  //           this.showTable = false;
  //         },
  //       });
  //     }

  // newRental = {
  //   customerName: '',
  //   nic: '',
  //   rentedDvd: '',
  //   rentalStatus: 'Pending'
  // };

  // openAddRentalPopup() {
  //   this.isAddRentalPopupOpen = true;
  // }

  // closeAddRentalPopup() {
  //   this.isAddRentalPopupOpen = false;
  // }

  // addRental() {
  //   if (this.newRental.customerName && this.newRental.nic && this.newRental.rentedDvd) {
  //     const newId = this.rentals.length ? this.rentals[this.rentals.length - 1].id + 1 : 1;
  //     this.rentals.push({ id: newId, ...this.newRental });
  //     this.closeAddRentalPopup();
  //     this.newRental = { customerName: '', nic: '', rentedDvd: '', rentalStatus: 'Pending' };
  //   } else {
  //     alert('Please fill in all required fields!');
  //   }
  // }

  // onEdit(id: number) {
  //   console.log('Edit rental with ID:', id);
  // }

  // onDelete(id: number) {
  //   this.rentals = this.rentals.filter(rental => rental.id !== id);
  // }

  // onView(id: number) {
  //   console.log('View rental details for ID:', id);
  // }
  
  }
  