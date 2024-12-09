import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs, Favourite, Movie } from '../components/Models/model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5273/api/ContactUs';
  private apiUrl2 = 'http://localhost:5273/api/Favourites'; 
  constructor(private http: HttpClient) {}

  addMessage(message: ContactUs): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
  getMessages(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(this.apiUrl);
  }

  // Add a movie to the user's favourites
  addFavourite(favourite: Favourite): Observable<void> {
    return this.http.post<void>(this.apiUrl2, favourite);
  }

  // Get favourites by user ID
  getFavouritesByUserId(userId: string): Observable<Favourite[]> {
    return this.http.get<Favourite[]>(`${this.apiUrl2}/user/${userId}`);
  }
 
  // addToFavorites(movie: any): void {
  //   let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  //   const alreadyInFavorites = favorites.some((fav: any) => fav.id === movie.id);

  //   if (!alreadyInFavorites) {
  //     favorites.push(movie);
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  //   }
  // }

  // getFavorites(): any[] {
  //   return JSON.parse(localStorage.getItem('favorites') || '[]');
  // }

}

