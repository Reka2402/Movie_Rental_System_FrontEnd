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
  selectedMovie: any = null;


  moviesadd: Movierequest[] = [];
  movies: Movie[] = [];
  movieForm: any;
  constructor( private fb:FormBuilder, private movieService: MovieService ,private toastr: ToastrService, private router : Router) {
    this.movieForm = this.fb.group({
      movieName: ['', Validators.required],
      genreId: [null, Validators.required],
      // genreName: ['', Validators.required],
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
  
  // categories = [
  //   {
  //     name: 'Movies',
  //     items: [
  //       {
  //         id: 3,
  //         name: 'Interstellar',
  //         genre: 'Adventure, Sci-Fi, Drama',
  //         releaseDate: '2014-11-07',
  //         review: 4.9,
  //         availableCopies: 40,
  //         description: 'A group of explorers travel through a wormhole in space to ensure humanity’s survival in a breathtaking journey across time and dimensions.',
  //         director: 'Christopher Nolan',
  //         rating: 4.9,
  //         price: 14.99,
  //         cast: [
  //           { id: 1, name: 'Matthew McConaughey' },
  //           { id: 2, name: 'Anne Hathaway' },
  //           { id: 3, name: 'Jessica Chastain' },
  //           { id: 4, name: 'Michael Caine' }
  //         ],
  //         images: ['/movies/movie 39.webp'],
  //       },
        // {
        //   id: 2,
        //   name: 'Uncharted',
        //   genre: 'Action, Adventure',
        //   releaseDate: '2022-02-18',
        //   review: 4.2,
        //   availableCopies: 40,
        //   description: 'A treasure-hunting adventure inspired by the video game series.',
        //   director: 'Ruben Fleischer',
        //   rating: 4.2,
        //   price: 14.99,
        //   cast: [{ id: 1, name: 'Tom Holland' }, { id: 2, name: 'Mark Wahlberg' }],
        //   images: ['/movies/movie 11.png'],
        // },
    //     {
          
    //       id: 2,
    //       name: 'How to Train Your Dragon',
    //       genre: 'Adventure, Fantasy, Drama',
    //       releaseDate: '2025-06-14',
    //       review: 4.7,
    //       availableCopies: 0,
    //       description: 'Experience the beloved tale of Hiccup and Toothless in a stunning live-action adaptation that explores the bonds of friendship and bravery.',
    //       director: 'Dean DeBlois',
    //       rating: 4.7,
    //       price: 24.99,
    //       cast: [
    //         { id: 1, name: 'Jay Baruchel' },
    //         { id: 2, name: 'America Ferrera' },
    //         { id: 3, name: 'Gerard Butler' }
    //       ],
    //       images: ['/movies/movie 34.jpg'],
        
    //   },
    //     {
    //       id: 4,
    //       name: 'Death on the Nile',
    //       genre: 'Mystery, Thriller',
    //       releaseDate: '2022-02-11',
    //       review: 4.2,
    //       availableCopies: 25,
    //       description: 'Hercule Poirot investigates a murder on a luxury cruise ship.',
    //       director: 'Kenneth Branagh',
    //       rating: 4.2,
    //       price: 16.99,
    //       cast: [{ id: 1, name: 'Gal Gadot' }, { id: 2, name: 'Kenneth Branagh' }],
    //       images: ['/movies/movie 12.png'],
    //     },
    //     {
    //       id: 2,
    //       name: 'Wanda',
    //       genre: 'Drama',
    //       releaseDate: '1970-02-10',
    //       review: 4.0,
    //       availableCopies: 15,
    //       description: 'A woman drifts through life in search of purpose.',
    //       director: 'Barbara Loden',
    //       rating: 4.0,
    //       price: 12.99,
    //       cast: [{ id: 1, name: 'Barbara Loden' }],
    //       images: ['/series/wanda.png'],
    //     },
    //     // {
    //     //   id: 5,
    //     //   name: 'Free Guy',
    //     //   genre: 'Action, Comedy, Sci-Fi',
    //     //   releaseDate: '2021-08-13',
    //     //   review: 4.5,
    //     //   availableCopies: 35,
    //     //   description: 'A bank teller discovers he is a background character in a video game.',
    //     //   director: 'Shawn Levy',
    //     //   rating: 4.5,
    //     //   price: 19.99,
    //     //   cast: [{ id: 1, name: 'Ryan Reynolds' }],
    //     //   images: ['/movies/freeguy.jpg'],
    //     // },
    //   ],
    // },
    // {
    //   name: 'Series',
    //   items: [
    //     {
    //       id: 1,
    //       name: 'The 100',
    //       genre: 'Drama, Sci-Fi, Adventure',
    //       releaseDate: '2014-03-19',
    //       review: 4.5,
    //       availableCopies: 30,
    //       description: '100 juvenile delinquents are sent to Earth to see if it is habitable.',
    //       director: 'Jason Rothenberg',
    //       rating: 4.5,
    //       price: 22.99,
    //       cast: [{ id: 1, name: 'Eliza Taylor' }],
    //       images: ['/series/the 100.jpg'],
    //     },
    //     {
    //       id: 2,
    //       name: 'Stranger Things',
    //       genre: 'Sci-Fi, Horror, Thriller',
    //       releaseDate: '2016-07-15',
    //       review: 4.5,
    //       availableCopies: 30,
    //       description: 'Supernatural occurrences in a small town. A group of kids discover the mysteries behind their town.',
    //       director: 'The Duffer Brothers',
    //       rating: 4.5,
    //       price: 15.99,
    //       cast: [
    //         { id: 1, name: 'Winona Ryder' },
    //         { id: 2, name: 'David Harbour' },
    //         { id: 3, name: 'Finn Wolfhard' },
    //       ],
    //       images: ['/series/stranger-thing.jpg'],
    //     },
    //     {
    //       id: 3,
    //       name: 'Money Heist',
    //       genre: 'Crime, Thriller',
    //       releaseDate: '2017-05-02',
    //       review: 4.7,
    //       availableCopies: 25,
    //       description: 'A criminal mastermind plans the biggest heist in recorded history.',
    //       director: 'Álex Pina',
    //       rating: 4.7,
    //       price: 16.99,
    //       cast: [{ id: 1, name: 'Álvaro Morte' }, { id: 2, name: 'Úrsula Corberó' }],
    //       images: ['/movies/movie 20.png'],
    //     },
    //     {
    //       id: 4,
    //       name: 'Hunger Games',
    //       genre: 'Action, Drama, Sci-Fi',
    //       releaseDate: '2012-03-23',
    //       review: 4.6,
    //       availableCopies: 25,
    //       description: 'Katniss Everdeen fights for survival in a deadly televised competition.',
    //       director: 'Gary Ross',
    //       rating: 4.6,
    //       price: 21.99,
    //       cast: [{ id: 1, name: 'Jennifer Lawrence' }],
    //       images: ['/series/Hungergames.jpg'],
    //     },
    //     // {
    //     //   id: 5,
    //     //   name: 'Wednesday',
    //     //   genre: 'Comedy, Horror',
    //     //   releaseDate: '2022-11-23',
    //     //   review: 4.8,
    //     //   availableCopies: 35,
    //     //   description: 'Wednesday Addams investigates mysteries at Nevermore Academy.',
    //     //   director: 'Tim Burton',
    //     //   rating: 4.8,
    //     //   price: 23.99,
    //     //   cast: [{ id: 1, name: 'Jenna Ortega' }],
    //     //   images: ['/series/wednesday.jpg'],
    //     // },
        
    //   ],
    // },
    // {
    //   name: 'Cartoons',
    //   items: [
    //     {
    //       id: 1,
    //       name: 'Frozen 2',
    //       genre: 'Animation, Adventure, Musical',
    //       releaseDate: '2019-11-22',
    //       review: 4.5,
    //       availableCopies: 35,
    //       description: 'Elsa and Anna venture into the unknown to uncover the source of Elsa’s powers and save their kingdom.',
    //       director: 'Chris Buck, Jennifer Lee',
    //       rating: 4.5,
    //       price: 16.99,
    //       cast: [
    //         { id: 1, name: 'Kristen Bell' },
    //         { id: 2, name: 'Idina Menzel' },
    //         { id: 3, name: 'Josh Gad' },
    //       ],
    //       images: ['/series/frozen 2.jpg'],
    //     },
    //     {
    //       id: 6,
    //       name: 'Moana 2',
    //       genre: 'Animation, Adventure, Comedy',
    //       releaseDate: '2024-11-15',
    //       review: 4.7,
    //       availableCopies: 0,
    //       description: 'Moana continues her journey of self-discovery, facing new challenges and exploring uncharted waters.',
    //       director: 'John Musker, Ron Clements',
    //       rating: 4.7,
    //       price: 18.99,
    //       cast: [
    //         { id: 1, name: 'Auliʻi Cravalho' },
    //         { id: 2, name: 'Dwayne Johnson' },
    //       ],
    //       images: ['/movies/movie 4.jpg'],
    //     },
    //     {
    //       id: 13,
    //       name: 'Coco',
    //       genre: 'Animation, Adventure, Family',
    //       releaseDate: '2017-11-22',
    //       review: 4.9,
    //       availableCopies: 35,
    //       description: 'A boy journeys to the Land of the Dead to find his great-great-grandfather.',
    //       director: 'Lee Unkrich, Adrian Molina',
    //       rating: 4.9,
    //       price: 16.99,
    //       cast: [{ id: 1, name: 'Anthony Gonzalez' }],
    //       images: ['/cartoons/coco.jpg'],
    //     },
    //     {
    //       id: 14,
    //       name: 'The Croods',
    //       genre: 'Animation, Adventure, Comedy',
    //       releaseDate: '2013-03-22',
    //       review: 4.5,
    //       availableCopies: 30,
    //       description: 'A prehistoric family embarks on a journey to find a new home.',
    //       director: 'Kirk DeMicco, Chris Sanders',
    //       rating: 4.5,
    //       price: 14.99,
    //       cast: [{ id: 1, name: 'Nicolas Cage' }],
    //       images: ['/cartoons/croods.jpg'],
    //     },
        // {
        //   id: 15,
        //   name: 'Tangled',
        //   genre: 'Animation, Adventure, Comedy',
        //   releaseDate: '2010-11-24',
        //   review: 4.7,
        //   availableCopies: 40,
        //   description: 'Rapunzel escapes her tower with the help of a charming thief.',
        //   director: 'Nathan Greno, Byron Howard',
        //   rating: 4.7,
        //   price: 15.99,
        //   cast: [{ id: 1, name: 'Mandy Moore' }],
        //   images: ['/cartoons/tangled.jpg'],
        // },
    //   ],
    // },
    // {

    //   name: 'Anime',
    //   items: [
    //     {
    //       id: 7,
    //       name: 'Demon Slayer',
    //       genre: 'Action, Fantasy, Anime',
    //       releaseDate: '2019-04-06',
    //       review: 4.9,
    //       availableCopies: 40,
    //       description: 'A young boy becomes a demon slayer to save his sister and avenge his family.',
    //       director: 'Haruo Sotozaki',
    //       rating: 4.9,
    //       price: 19.99,
    //       cast: [{ id: 1, name: 'Natsuki Hanae' }],
    //       images: ['/cartoons/demon-slayer.jpg'],
    //     },
    //     {
    //       id: 8,
    //       name: 'Naruto',
    //       genre: 'Action, Adventure, Anime',
    //       releaseDate: '2002-10-03',
    //       review: 4.8,
    //       availableCopies: 50,
    //       description: 'The story of Naruto Uzumaki, a young ninja striving to be the best and earn respect.',
    //       director: 'Masashi Kishimoto',
    //       rating: 4.8,
    //       price: 17.99,
    //       cast: [{ id: 1, name: 'Junko Takeuchi' }],
    //       images: ['/cartoons/naruto.jpeg'],
    //     },
    //     {
    //       id: 17,
    //       name: 'Over the Moon',
    //       genre: 'Animation, Family, Adventure',
    //       releaseDate: '2020-10-23',
    //       review: 4.6,
    //       availableCopies: 25,
    //       description: 'A girl builds a rocket to meet a mythical moon goddess.',
    //       director: 'Glen Keane',
    //       rating: 4.6,
    //       price: 13.99,
    //       cast: [{ id: 1, name: 'Cathy Ang' }],
    //       images: ['/cartoons/over-the-moon.jpg'],
    //     },
    //     {
    //       id: 18,
    //       name: 'Dragon Ball Z',
    //       genre: 'Action, Adventure, Anime',
    //       releaseDate: '1989-04-26',
    //       review: 4.8,
    //       availableCopies: 50,
    //       description: 'Goku and his friends defend the Earth from powerful foes.',
    //       director: 'Daisuke Nishio',
    //       rating: 4.8,
    //       price: 17.99,
    //       cast: [{ id: 1, name: 'Masako Nozawa' }],
    // //       images: ['/cartoons/dragon.jpg'],
    //     },
        // {
        //   id: 20,
        //   name: 'Attack on Titan',
        //   genre: 'Action, Fantasy, Anime',
        //   releaseDate: '2013-04-07',
        //   review: 4.9,
        //   availableCopies: 35,
        //   description: 'Humanity fights for survival against monstrous Titans.',
        //   director: 'Tetsurō Araki',
        //   rating: 4.9,
        //   price: 18.99,
        //   cast: [{ id: 1, name: 'Yūki Kaji' }],
        //   images: ['/anime/attackontitan.jpg'],
        // },
  //     ],
  //   },
  // ];
