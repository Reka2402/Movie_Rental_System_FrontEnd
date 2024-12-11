import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MovieService } from '../../../services/movie.service';
import { UserService } from '../../../services/user.service';
import { Movierequest, Movie, RentalRequestModel, Favourite } from '../../Models/model';
import { ToastrService } from 'ngx-toastr';
import { RentalService } from '../../../services/rental.service';
import { CustomerService } from '../../../services/customer.service';
import { AuthService } from '../../../services/auth.service';
declare var bootstrap: any;

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrl: './customerhome.component.css'
})
export class CustomerhomeComponent {
  
  rentalDays: number = 1;
  option1: boolean = false;
  option2: boolean = false;
  option3: boolean = false;
  totalPrice: number = 0;
  userId!: string
  
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
 
  rentButtonState: { [key: string]: { text: string, class: string } } = {};
 

  @ViewChild('profileModal') profileModal!: ElementRef;
  rentalHistory: any[] = [];
  @Output() movie = new EventEmitter<any>();

  constructor(
    private rout: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private userservice: UserService,
    private movieService: MovieService,
    private rentalservice: RentalService,
    private toster: ToastrService,
    private favoritesService: CustomerService,
  ) {
    this.UID = String(rout.snapshot.paramMap.get('Id'));
  }
  ngOnInit(): void {
   // this.userId = this.authService.getUserIdFromToken(); // Now it's safe to use the service
    this.loadMovies();
  }
 
  // movieId: string | null = null; 
  // onMovieSelect(movieId: string): void {
  //   this.movieId = movieId;
  // }

  // addToFavorites(): void {
  //   if (!this.userId || !this.movieId) {
  //     alert('User or movie ID is missing');
  //     return;
  //   }

  //   const favourite: Favourite = {
  //     userId: this.userId,
  //     movieId: this.movieId,
  //   };

  //   this.favoritesService.addFavourite(favourite).subscribe({
  //     next: () => {
  //       alert('Movie added to favourites!');
  //     },
  //     error: (err) => {
  //       console.error('Error adding to favourites:', err);
  //       alert('Failed to add movie to favourites');
  //     },
  //   });
  // }


  loadMovies() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      console.log(this.movies);
    });
  }

  openRentModal() {

    this.rentButtonState = {};
  
    const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
    rentModal.show();
  }

  rentMovie(dvd: Movie) {
    if (!this.isSignedIn) {
      this.toster.error('You must be logged in to rent a DVD.', 'Error');
      return;
    }

    if (dvd.copiesAvailable <= 0) {
      this.toster.error(
        `The DVD "${dvd.title}" is out of stock and cannot be rented.`,
        'Error'
      );
      return;
    }
  
    this.rentButtonState[dvd.id] = { text: 'Pending', class: 'btn-warning' };
  
    const rentalRequest: RentalRequestModel = {
      userId: String(this.customer.Id),
      movieId: String(dvd.id),
      requestedDate: new Date().toISOString(),
      approvedDate: new Date().toISOString(),
      rentalDate: new Date().toISOString(),
      returnDate: this.calculateReturnDate(this.rentalDays),
      rentalDays: this.rentalDays,
      totalAmount: this.totalPrice,
      isOverdue: false,
      status: 1,
      rentalquantity: 0
    };
  
    this.rentalservice.addrental(rentalRequest).subscribe({
      next: (response: any) => {
        this.toster.success('Rent Successful!', 'Success');
        const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
        rentModal.hide();
        this.rentButtonState[dvd.id] = { text: 'Rent Now', class: 'btn-danger' };
        this.router.navigate(['/customer/home']);
      },
      error: (error: any) => {
        console.error('Error during rental:', error);
        this.toster.error('Failed to rent DVD. Please try again.', 'Error');
        this.rentButtonState[dvd.id] = { text: 'Rent Now', class: 'btn-danger' };
      },
    });
  }

  calculateReturnDate(rentalDays: number): string {
    const today = new Date();
    today.setDate(today.getDate() + rentalDays);
    return today.toISOString();
  }

  setSelectedMovie(movie: Movie): void {
    this.selectedMovie = movie;
    this.calculatePrice();
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
    this.calculatePrice();
  }

  addToFavorites(movie: Movie): void {
    if (!this.isSignedIn) {
      this.toster.error('You must be logged in to add a movie to favorites.', 'Error');
      return;
    }
    
    const newFavorite: Favourite = {
      userId: this.customer.Id,
      movieId: movie.id,
    };

    this.favoritesService.addFavourite(newFavorite.userId , newFavorite.movieId).subscribe({
      next: () => {
        this.toster.success('Movie added to favorites!', 'Success');
      },
      error: (error) => {
        console.error(error);
        this.toster.info('This movie is already in your favorites.', 'Info');
      },
    });
  }
 

  }
  

