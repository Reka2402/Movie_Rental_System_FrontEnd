import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movies: Movie[] = [
    // Example movie data
    { movieName: 'Inception', genre: 'Sci-Fi', releaseDate: new Date('2010-07-16'), director: 'Christopher Nolan', description: 'A mind-bending thriller.', cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt', availableCopies: 5, isAvailable: true },
    { movieName: 'Titanic', genre: 'Romance', releaseDate: new Date('1997-12-19'), director: 'James Cameron', description: 'A romantic tragedy.', cast: 'Leonardo DiCaprio, Kate Winslet', availableCopies: 3, isAvailable: false }
  ];
  newMovie: Movie = new Movie();
}
export class Movie {
  movieName!: string;
  genre!: string;
  releaseDate!: Date;
  director!: string;
  description!: string;
  cast!: string;
  availableCopies!: number;
  isAvailable!: boolean;
}
