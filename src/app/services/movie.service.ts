import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMovies() {
    return this.http.get<Movie[]>('http://localhost:5057/api/Dvd');
  }
  createMovie(movie:Movie){
    return this.http.post('http://localhost:5057/api/Dvd' , movie);
  }
  deleteMovie(movieId:number){
    return this.http.delete('http://localhost:5057/api/Dvd' + movieId)
  }
  getMovie(movieId:number){
    return this.http.get<Movie>('http://localhost:5057/api/Dvd' + movieId)
  }
  updateMovie(movie: Movie) {
    return this.http.put('http://localhost:5057/api/Dvd' + movie.id, movie);
    
  }

}
export interface Movie{
  id:number;
  title:string;
  genre:string;
  releaseDate:string;
  quantity: number;

}
