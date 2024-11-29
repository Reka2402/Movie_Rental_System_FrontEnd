import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Director, Genre, Movie, Movierequest } from '../components/Models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:5273/api/Movie';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/GetAllDvds`);
  }

  createMovie(movie: Movierequest): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseUrl}/AddDvd`, movie);
  }

  deleteMovie(movieId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteDvd/${movieId}`);
  }

  getMovie(movieId: string): Observable<Movierequest> {
    return this.http.get<Movierequest>(`${this.baseUrl}/GetDvd/${movieId}`);
  }

  updateMovie(movie: Movierequest): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseUrl}/UpdateDvd/${movie.id}`, movie);
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.baseUrl}/GetGenres`);
  }

  getDirectors(): Observable<Director[]> {
    return this.http.get<Director[]>(`${this.baseUrl}/GetDirectors`);
  }
}
