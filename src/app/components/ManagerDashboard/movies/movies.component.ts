import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie, Genre, Director, Movierequest } from '../../Models/model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  searchText: string = '';
  movieForm: FormGroup;
  isAddMoviePopupOpen = false;

  movies: Movie[] = [];
  genres: Genre[] = []; 
  directors: Director[] = []; 
  

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      movieName: ['', Validators.required],
      genreId: [null, Validators.required],
      directorId: [null, Validators.required],
      releaseDate: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      imageUrl: [null],
      totalCopies: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.loadGenres();
    this.loadDirectors();
    this.loadMovies();
  }


  loadGenres() {
    this.movieService.getGenres().subscribe((data: Genre[]) => {
      this.genres = data;
    });
  }

  
  loadDirectors() {
    this.movieService.getDirectors().subscribe((data: Director[]) => {
      this.directors = data;
    });
  }

 
  loadMovies() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
    });
  }

  onDelete(movieId: string) {
    this.movieService.deleteMovie(movieId).subscribe((data) => {
      alert('Movie deleted successfully.');
    });
  }

  onEdit(movieId: string) {
    this.router.navigate(['/add', movieId]);
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      this.movies.push(newMovie);
      this.movieForm.reset();
    }
  }

  cancel() {
    this.movieForm.reset();
    this.isAddMoviePopupOpen = false;
  }

  openAddMoviePopup() {
    this.isAddMoviePopupOpen = true;
  }
}
