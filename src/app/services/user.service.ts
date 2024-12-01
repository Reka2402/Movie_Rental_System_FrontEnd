import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/Models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:5273/api/User';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  createUser(user: User) {
    return this.http.post(this.url, user);
  }

  deleteUser(userId: string) {
    return this.http.delete(this.url + "/" + userId);
  }

  getUser(userId: string) {
    return this.http.get<User>(this.url + "/" + userId);
  }

  updateUser(user: User) {
    return this.http.put(this.url + "/" + user.id, user);
  }

}



