import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'https://api.example.com/customers'; // Replace with actual API endpoint

  constructor(private http: HttpClient) {}

  getCustomerDetails(customerId: number): Observable<Customer> {
    return this.http.get<Customer> (`${this.apiUrl}/${customerId}`);
  }
}
export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  profilePicture: string;
  rentalHistory: { title: string; date: string }[];
}
