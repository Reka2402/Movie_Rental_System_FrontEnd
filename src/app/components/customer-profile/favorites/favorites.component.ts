import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: CustomerService) {}

  ngOnInit(): void {
   // this.loadFavorites();
  }

  // loadFavorites(): void {
  //   this.favorites = this.favoritesService.getFavorites(); // Get favorites from the service
  // }
}

