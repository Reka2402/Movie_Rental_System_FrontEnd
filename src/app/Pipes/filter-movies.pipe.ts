import { Pipe, PipeTransform } from '@angular/core';
import { Movie, Movierequest } from '../components/Models/model';

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

 
  transform(value: Movie[], ...args: string[]): Movie []{
    const searchText = args[0];
    return value.filter( a => a.movieName.toLowerCase().includes(searchText.toLowerCase())||a.genre.name.toLowerCase().includes(searchText.toLowerCase())||a.director.name.toLowerCase().includes(searchText.toLowerCase())
    ||a.releaseDate.toLowerCase().includes(searchText.toLowerCase()));
  }

}
