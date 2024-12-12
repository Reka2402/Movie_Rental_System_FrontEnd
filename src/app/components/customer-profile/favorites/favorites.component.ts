import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Movie } from '../../Models/model';
import { TokenService } from '../../../services/token.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'] // Fixed typo: 'styleUrl' to 'styleUrls'
})
export class FavoritesComponent implements OnInit {
  favouriteMovies: Movie[] = [];
  errorMessage: string | null = null;
  userId: string | null = null;
  favourites: any[] = []; // To hold favorite movies data

  constructor(
    private favouritesService: CustomerService,
    private tokenService: TokenService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userId = this.tokenService.getUserIdFromToken();
    if (this.userId) {
      this.loadFavourites();
      console.log(this.loadFavourites());
      
    }
  }

  loadFavourites(): void {
    this.favouritesService.getFavouritesByUserId(this.userId!).subscribe({
      next: (response: any) => {
        this.favourites = response;
        console.log(this.favourites);
      },
      error: (error: any) => {
        this.toastr.error('Failed to load favourites', '', {
          positionClass: 'toast-top-right',
          progressBar: true,
          timeOut: 4000
        });
      }
    });
  }

  removeFavourite(favouriteId: string): void {
    console.log(favouriteId);
    
    this.favouritesService.removeFavourite(favouriteId).subscribe(
      (response) => {
        this.toastr.success('', 'Success')
      },
      (error) => {
        console.error('error deleting dvd', error);

      }
    )

  }
}
