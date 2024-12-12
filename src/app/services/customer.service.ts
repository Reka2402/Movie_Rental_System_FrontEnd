import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs, Favourite, Movie, User } from '../components/Models/model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5273/api/ContactUs';
  private apiUrl2 = 'http://localhost:5273/api/Favourites/add'; 
  private apiUrl3='http://localhost:5273/api/Favourites/user';
  private apiUrl4='http://localhost:5273/api/Favourites/delete';
  UserURL: string = 'http://localhost:5273/api/User'
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
  getFavouritesByUserId(Id:string){
    return this.http.get(`${this.apiUrl3}/${Id}`);
  }
  removeFavourite(favouriteId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl4}/${favouriteId}`);
  }
  getCustomerById(userId: string): Observable<User> {
    return this.http.get<User>(`${this.UserURL}/${userId}`);
  }

}

