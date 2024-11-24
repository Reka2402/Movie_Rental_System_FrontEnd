import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import{Movie, MovieService} from '../../../services/movie.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  [x: string]: any;
  searchText: string = '';

  movies: Movie[] = [];
  constructor(private movieService: MovieService ,private toastr: ToastrService, private router : Router) {

  }
  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
  
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
}