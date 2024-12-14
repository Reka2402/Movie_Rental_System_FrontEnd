import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../../services/movie.service';
import { Movierequest, Movie } from '../Models/model';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  selectedMovie: any;


  moviesadd: Movierequest[] = [];
  movies: Movie[] = [];
  movieForm: any;
  constructor( private fb:FormBuilder, private movieService: MovieService ,private toastr: ToastrService, private router : Router) {

  }
  ngOnInit(): void {
    this.loaddVD();
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;  
      console.log(this.movies);
      
    })
    
  }
  loaddVD() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      console.log(this.movies);
      
    })
  }
  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
  
  setSelectedMovie(movie: any): void {
    this.selectedMovie = movie;
  }

  @Output() movie = new EventEmitter();

  AddMovie(movie: any) {
    this.movie.emit(movie);
  }
}
  