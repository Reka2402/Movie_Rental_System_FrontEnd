import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import{ MovieService} from '../../../services/movie.service'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Movie } from '../../Models/model';


@Component({
  selector: 'app-movies',

  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  [x: string]: any;
  searchText: string = '';
  movieForm:FormGroup;
  isAddMoviePopupOpen = false;
  

  movies: Movie[] = [];
  constructor( private fb:FormBuilder, private movieService: MovieService ,private toastr: ToastrService, private router : Router) {
    this.movieForm = this.fb.group({
      movieName: ['', Validators.required],
      genreId: [null, Validators.required],
      genreName: ['', Validators.required],
      directorId: [null, Validators.required],
      directorName: ['', Validators.required],
      releaseDate: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      imageUrl: [null],
      totalCopies: [0, [Validators.required, Validators.min(1)]]
    });
  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;  
      console.log(this.movies);
      
    })
  }
  onDelete(movieId: number) {
    this.movieService.deleteMovie(movieId).subscribe(data => {
      alert("Movie deleted successfully.");
    })
  }
  loadTasks() {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
    })

  }
  onEdit(movieId: number) {
    this.router.navigate(['/edit',movieId])
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      this.movies.push(newMovie); 

      this.movieForm.reset(); 
    }
  }
  cancel(){
    this.movieForm.reset();
    this.isAddMoviePopupOpen = false;
  }
  
  openAddMoviePopup() {
    this.isAddMoviePopupOpen = true;
  }
  

  

}