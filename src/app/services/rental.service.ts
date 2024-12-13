import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalRequestModel, RentalResponseModel } from '../components/Models/model';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private baseUrl = 'http://localhost:5273/api/Rental'; 
  private apiUrl = 'http://localhost:5273/api/Reservation';

  constructor(private http: HttpClient) {}

  addrental(rentalRequest:RentalRequestModel){
    return this.http.post(this.baseUrl+'/Add_Rental',rentalRequest)
  }
 

  getAllRentals(): Observable<RentalResponseModel[]> {
    return this.http.get<RentalResponseModel[]>(`${this.baseUrl}/Get_All_Rentals`);
  }

  getRentalById(id: string): Observable<RentalResponseModel> {
    return this.http.get<RentalResponseModel>(`${this.baseUrl}/Get_By_Id?Id=${id}`);
  }

  getRentalsByUserId(userId: string): Observable<RentalResponseModel> {
    return this.http.get<RentalResponseModel>(`${this.baseUrl}/Get_By_UserId?UserId=${userId}`);
  }

  updateRental(id: string, rental: RentalRequestModel): Observable<RentalResponseModel> {
    return this.http.put<RentalResponseModel>(`${this.baseUrl}/Update?Id=${id}`, rental);
  }
  reserveMovie(reservation: { userId: string; movieId: string; reservedDate: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, reservation);
  }
  

}
