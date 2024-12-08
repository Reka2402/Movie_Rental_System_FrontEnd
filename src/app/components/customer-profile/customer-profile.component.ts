import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { jwtDecode } from 'jwt-decode';
import { Movie, Movierequest, RentalRequestModel } from '../Models/model';
import { MovieService } from '../../services/movie.service';
import { RentalService } from '../../services/rental.service';
import { ToastrService } from 'ngx-toastr';

declare var bootstrap: any;
@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent {
  rentalDays: number = 1;
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  totalPrice: number = 0;
  
  selectedMovie: any = null;
  showHistory = false;
  isSignedIn = true;
  UID: string;
  token: string = localStorage.getItem('token')!;
  customer: any = jwtDecode(this.token);

  moviesadd: Movierequest[] = [];
  movies: Movie[] = [];
  movieForm: any;
  
  option1Price: number = 2;
  option2Price: number = 3;
  option3Price: number = 4;
  
  quantity: number = 1;
  rentButtonText: string = 'Rent Now';
  rentButtonClass: string = 'btn-danger';
  isPending: boolean = false;
  customerservice: any;
  
// Initialize a map to track the button state for each movie by movie ID
rentButtonState: { [key: string]: { text: string, class: string } } = {};



  @ViewChild('profileModal') profileModal!: ElementRef;
  rentalHistory: any[] = [];
  @Output() movie = new EventEmitter<any>();

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private movieService: MovieService,
    private rentalservice: RentalService,
    private toster:ToastrService
  ) {
    this.UID = String(rout.snapshot.paramMap.get('Id'));
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(this.movies);
    });
  }

  openRentModal() {
    // Reset the button state before showing the modal
    this.rentButtonState = {};
  
    const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
    rentModal.show();
  }
  
  
  rentMovie(dvd: Movie) {
    // Check if the user is signed in
    if (!this.isSignedIn) {
      this.toster.error('You must be logged in to rent a DVD.', 'Error');
      return;
    }
  
    // Check if the movie is in stock
    if (dvd.copiesAvailable <= 0) {
      this.toster.error(
        `The DVD "${dvd.title}" is out of stock and cannot be rented.`,
        'Error'
      );
      return;
    }
  
    // Update the button state to "Pending" for the selected movie
    this.rentButtonState[dvd.id] = { text: 'Pending', class: 'btn-warning' };
  
    // Create the rental request object
    const rentalRequest: RentalRequestModel = {
      userId: String(this.customer.Id), // User ID as a string
      movieId: String(dvd.id), // Movie ID as a string
      requestedDate: new Date().toISOString(), // Current date in ISO format
      approvedDate: new Date().toISOString(), // Initially empty or could be filled if applicable
      rentalDate: new Date().toISOString(), // Current date as rental date
      returnDate: this.calculateReturnDate(this.rentalDays), // Calculate return date
      rentalDays: this.rentalDays,
      totalAmount: this.totalPrice, // The calculated total price
      isOverdue: false, // Initially false, you can update based on return date
      status: 1, // Initial status can be "Pending", "Approved", etc.
    };
  
    // Send the rental request to the backend
    this.rentalservice.addrental(rentalRequest).subscribe({
      next: (response: any) => {
        console.log('Rental successful:', response);
        this.toster.success('Rent Successful!', 'Success');
  
        // Hide the modal after the rental is successful
        const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
        rentModal.hide(); // Hide the modal
  
        // Set the button state back to default after the rental is successful
        this.rentButtonState[dvd.id] = { text: 'Rent Now', class: 'btn-danger' };
  
        // Navigate away or refresh page after rental success
        this.router.navigate(['/customer/home']);
      },
      error: (error: any) => {
        console.error('Error during rental:', error);
        this.toster.error('Failed to rent DVD. Please try again.', 'Error');
  
        // Reset the button state if rental fails
        this.rentButtonState[dvd.id] = { text: 'Rent Now', class: 'btn-danger' };
      },
    });
  }
  
  
  

  // Helper function to calculate the return date
  calculateReturnDate(rentalDays: number): string {
    const today = new Date();
    today.setDate(today.getDate() + rentalDays);
    return today.toISOString(); // Return the date after adding rental days
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
    this.calculatePrice(); // Recalculate price when a movie is selected
  }

  showRentalHistory() {
    this.showHistory = true;
    console.log('Rental History:', this.rentalHistory);
  }

  openProfileModal(): void {
    const modalElement = this.profileModal.nativeElement;
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();
  }

  AddMovie(movie: any) {
    this.movie.emit(movie);
  }

  calculatePrice() {
    if (!this.selectedMovie) return;

    let basePrice = this.selectedMovie.price;
    let rentalPrice = basePrice * this.rentalDays;    
    let additionalPrice = 0;

    if (this.option1) additionalPrice += this.option1Price;
    if (this.option2) additionalPrice += this.option2Price;
    if (this.option3) additionalPrice += this.option3Price;

    this.totalPrice = rentalPrice + additionalPrice;
  }

  toggleOption(option: number) {
    switch (option) {
      case 1:
        this.option1 = !this.option1;
        break;
      case 2:
        this.option2 = !this.option2;
        break;
      case 3:
        this.option3 = !this.option3;
        break;
    }
    this.calculatePrice(); // Recalculate the price whenever an option is toggled
  }
  // fetchCustomerDetails() {
  //   const getcustomer = localStorage.getItem('customer'); // Retrieve the customer from localStorage
  //   if (getcustomer) {
  //     try {
  //       const customer = JSON.parse(getcustomer);
  //       console.log(customer.Id); // Parse the JSON string to an object
  //       if (customer.Id) {
  //         this.customerid = +customer.Id; // Assign the ID to cusId
  //         console.log(this.customerid);
  //       }
  //     } catch (error) {
  //       console.error('Error parsing customer data from localStorage:', error);
  //       this.toastr.error('Failed to retrieve customer history.', 'Error');
  //       return;
  //     }
  //   }
  //   this.customerservice.getsinglecus(this.customerid).subscribe(data=>{
  //     this.editProfile.patchValue(data)
  //     console.log(data)
  //   })
  //   }

  // rentalhistory() {
  //   const getcustomer = localStorage.getItem('customer'); // Retrieve the customer from localStorage
  //   if (getcustomer) {
  //     try {
  //       const customer = JSON.parse(getcustomer);
  //       console.log(customer.Id); // Parse the JSON string to an object
  //       if (customer.Id) {
  //         this.customerid = +customer.Id; // Assign the ID to cusId
  //         console.log(this.customerid);
  //       }
  //     } catch (error) {
  //       console.error('Error parsing customer data from localStorage:', error);
  //       this.toastr.error('Failed to retrieve customer history.', 'Error');
  //       return;
  //     }
  //   }
  //   this.customerservice.getrentalbycus(this.customerid).subscribe(data=>{
  //     this.rentals=data
  //   })
  // }





  // getStars(rating: number): number[] {
  //   return Array(Math.round(rating)).fill(0);
  // }
  

  // rentNow(movieName: string) {
  //   this.router.navigate(['/customer/rent', movieName]);
  // }


}
