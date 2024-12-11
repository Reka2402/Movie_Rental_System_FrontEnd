import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs, Favourite, Movie } from '../components/Models/model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5273/api/ContactUs';
  private apiUrl2 = 'http://localhost:5273/api/Favourites/add'; 
  private apiUrl3='http://localhost:5273/api/Favourites/user/06b6e1b9-8f32-4988-34f8-08dd19b9fb00';
  constructor(private http: HttpClient) {}

  addMessage(message: ContactUs): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
  getMessages(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(this.apiUrl);
  }


  addFavourite(userId:string,movieId:string) {
    return this.http.get(`${this.apiUrl2}/${userId}/${movieId}`);
  }


  getFavouritesByUserId(userId: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl3}/user/${userId}`);
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

