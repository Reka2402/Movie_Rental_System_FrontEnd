import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactUs } from '../components/Models/model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:5273/api/ContactUs';

  constructor(private http: HttpClient) {}

  addMessage(message: ContactUs): Observable<any> {
    return this.http.post(this.apiUrl, message);
  }
  getMessages(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(this.apiUrl);
  }

}

