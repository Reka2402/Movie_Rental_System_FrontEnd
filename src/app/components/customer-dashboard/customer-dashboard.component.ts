import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent {
  movieItems: any[] = [
    {
      id: 1,
      name: 'Stranger Things',
      genre: 'Sci-Fi, Horror, Thriller',
      releaseDate: '2016-07-15',
      review: 4.5,
      availableCopies: 30,
      description: 'Supernatural occurrences in a small town. A group of kids discover the mysteries behind their town.',
      director: 'The Duffer Brothers',
      rating: 4.5,
      price: 15.99, 
      cast: [
        { id: 1, name: 'Winona Ryder' },
        { id: 2, name: 'David Harbour' },
        { id: 3, name: 'Finn Wolfhard' },
      ],
      images: [
        '\movies\movie 1.jpg',  
      ],
    },
    {
      id: 1,
      name: 'The 100',
      genre: 'Sci-Fi, Drama, Post-Apocalyptic',
      releaseDate: '2014-03-19',
      review: 4.3,
      availableCopies: 25,
      description: 'A group of juvenile delinquents sent back to Earth after a nuclear apocalypse uncover the secrets of survival.',
      director: 'Jason Rothenberg',
      rating: 4.3,
      price: 12.99,
      cast: [
        { id: 1, name: 'Eliza Taylor' },
        { id: 2, name: 'Bob Morley' },
        { id: 3, name: 'Marie Avgeropoulos' },
      ],
      images: [
        '/movies/the100.jpg',
      ],
    },
    {
      id: 2,
      name: 'Moana 2',
      genre: 'Animation, Adventure, Comedy',
      releaseDate: '2024-11-15',
      review: 4.7,
      availableCopies: 0,
      description: 'Moana continues her journey of self-discovery, facing new challenges and exploring uncharted waters.',
      director: 'John Musker, Ron Clements',
      rating: 4.7,
      price: 18.99,
      cast: [
        { id: 1, name: 'Auliʻi Cravalho' },
        { id: 2, name: 'Dwayne Johnson' },
      ],
      images: [
        '/movies/moana2.jpg',
      ],
    },
    {
      id: 3,
      name: 'Frozen 2',
      genre: 'Animation, Adventure, Musical',
      releaseDate: '2019-11-22',
      review: 4.5,
      availableCopies: 35,
      description: 'Elsa and Anna venture into the unknown to uncover the source of Elsa’s powers and save their kingdom.',
      director: 'Chris Buck, Jennifer Lee',
      rating: 4.5,
      price: 16.99,
      cast: [
        { id: 1, name: 'Kristen Bell' },
        { id: 2, name: 'Idina Menzel' },
        { id: 3, name: 'Josh Gad' },
      ],
      images: [
        '/movies/frozen2.jpg',
      ],
    },


  ];
    
  public selectedMovie: any = null;
  
  @Output() movie = new EventEmitter();
  
  AddMovie(movie: any) {
    this.movie.emit(movie);
  }
  
}