import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../../Models/model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favouriteMovies: Movie[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private favouritesService: CustomerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId'); 

    if (!userId) {
      this.errorMessage = 'User not logged in.';
      this.isLoading = false;
      return;
    }

    this.favouritesService.getFavouritesByUserId(userId).subscribe({
      next: (movies) => {
        this.favouriteMovies = movies;
        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Failed to load favourites. Please try again.';
        this.toastr.error(this.errorMessage, 'Error');
        this.isLoading = false;
      },
    });
  }
}

