import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, Movierequest } from '../components/Models/model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  
  getMovies() {
    return this.http.get<Movie[]>('http://localhost:5273/api/Movie/GetAllDvds');
  }
  createMovie(movie:Movierequest){
    return this.http.post('http://localhost:5273/api/Movie/AddDvd' , movie);
  }
  deleteMovie(movieId:string){
    return this.http.delete('http://localhost:5057/api/Dvd' + movieId)
  }
  getMovie(movieId:string

  ){
    return this.http.get<Movierequest>('http://localhost:5057/api/Dvd' + movieId)
  }
  updateMovie(movie: Movierequest) {
    return this.http.put('http://localhost:5057/api/Dvd' + movie.id, movie);
    
  }

}


