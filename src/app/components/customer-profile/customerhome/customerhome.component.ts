import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MovieService } from '../../../services/movie.service';
import { UserService } from '../../../services/user.service';
import { Movierequest, Movie } from '../../Models/model';
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

  constructor(private rout: ActivatedRoute,private router: Router,private userservice:UserService,private movieService: MovieService) {
    this.UID = String(rout.snapshot.paramMap.get('Id'))
  }

  
  @ViewChild('profileModal') profileModal!: ElementRef;
  rentalHistory: any[] = [];

 
  openRentModal() {
    const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
    rentModal.show();
  }
  rentMovie() {
  
    console.log('Renting movie:', this.selectedMovie.movieName);
    console.log('Rental Days:', this.rentalDays);  
    this.rentButtonText = 'Pending';
    this.rentButtonClass = 'btn-warning';
    const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
    rentModal.hide();
  }
  ngOnInit(): void {
    this.loaddVD();
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;  
      console.log(this.movies);
      
    })
    
  }
  loaddVD() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      
    })
  }
 
  setSelectedMovie(movie: any): void {
    this.selectedMovie = movie;
  }
  viewRentalHistory(): void {
 
    console.log('Rental History:', this.rentalHistory);
  }
  showRentalHistory() {
    this.showHistory = true;
  }
  rentNow(movieName: string) {
    this.router.navigate(['/customer/rent', movieName]);
  }

  openProfileModal(): void {
    const modalElement = this.profileModal.nativeElement;
    const bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.show();
  }
  @Output() movie = new EventEmitter();

  AddMovie(movie: any) {
    this.movie.emit(movie);
  }
  calculatePrice() {
    let basePrice = this.selectedMovie.price; 
    let rentalPrice = basePrice * this.rentalDays;    
    let additionalPrice = 0;
    if (this.option1) additionalPrice += this.option1Price;
    if (this.option2) additionalPrice += this.option2Price;
    if (this.option3) additionalPrice += this.option3Price;
    this.totalPrice = rentalPrice + additionalPrice;
  }
  

}
