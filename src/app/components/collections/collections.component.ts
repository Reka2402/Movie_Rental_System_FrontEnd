import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
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
    {
      id: 4,
      name: 'The Hunger Games',
      genre: 'Action, Adventure, Sci-Fi',
      releaseDate: '2012-03-23',
      review: 4.6,
      availableCopies: 28,
      description: 'Katniss Everdeen volunteers for a deadly televised competition to protect her sister and ends up inspiring a revolution.',
      director: 'Gary Ross',
      rating: 4.6,
      price: 14.99,
      cast: [
        { id: 1, name: 'Jennifer Lawrence' },
        { id: 2, name: 'Josh Hutcherson' },
        { id: 3, name: 'Liam Hemsworth' },
      ],
      images: [
        '/movies/hungergames.jpg',
      ],
    },
    {
      id: 5,
      name: 'Mufasa: The Lion King',
      genre: 'Animation, Adventure, Drama',
      releaseDate: '2024-07-05',
      review: 4.8,
      availableCopies: 50,
      description: 'The origin story of Mufasa, the beloved Lion King, revealing his rise to power and his profound legacy.',
      director: 'Barry Jenkins',
      rating: 4.8,
      price: 19.99,
      cast: [
        { id: 1, name: 'Aaron Pierre' },
        { id: 2, name: 'Kelvin Harrison Jr.' },
      ],
      images: [
        '/movies/mufasa.jpg',
      ],
    },
    {
      id: 6,
      name: 'Wednesday',
      genre: 'Comedy, Mystery, Supernatural',
      releaseDate: '2022-11-23',
      review: 4.6,
      availableCopies: 30,
      description: 'Wednesday Addams investigates supernatural mysteries and challenges dark secrets at Nevermore Academy.',
      director: 'Tim Burton',
      rating: 4.6,
      price: 14.99,
      cast: [
        { id: 1, name: 'Jenna Ortega' },
        { id: 2, name: 'Catherine Zeta-Jones' },
        { id: 3, name: 'Luis Guzmán' },
      ],
      images: [
        '/movies/wednesday.jpg',
      ],
    },
    // {
    //   id: 2,
    //   name: 'Moana 2',
    //   genre: 'Animation, Adventure, Comedy',
    //   releaseDate: '2023-11-22',
    //   review: 4.7,
    //   availableCopies: 50,
    //   description: ['Moana embarks on a new adventure in the Pacific Islands', 'A heartwarming story of courage and self-discovery'],
    //   director: 'Ron Clements, John Musker',
    //   rating: 4.7,
    //   cast: [
    //     { id: 1, name: 'Auli\'i Cravalho' },
    //     { id: 2, name: 'Dwayne Johnson' },
    //     { id: 3, name: 'Rachel House' },
    //   ],
    //   images: [
    //     'https://m.media-amazon.com/images/I/71I35Y7uI6L._SY679_.jpg',
    //     'https://cdn.vox-cdn.com/thumbor/4sdsdMB0Nwv50n24_VS6xuYXNxI=/0x0:1440x840/1200x675/filters:focal(720x420:721x421)/cdn.vox-cdn.com/uploads/chorus_asset/file/23332100/Disney_Moana_2_2.jpg',
    //   ],
    // },
    // {
    //   id: 3,
    //   name: 'Frozen 2',
    //   genre: 'Animation, Adventure, Fantasy',
    //   releaseDate: '2019-11-22',
    //   review: 4.6,
    //   availableCopies: 40,
    //   description: ['Elsa embarks on a journey to discover the origins of her powers', 'A magical story of family and self-realization'],
    //   director: 'Chris Buck, Jennifer Lee',
    //   rating: 4.6,
    //   cast: [
    //     { id: 1, name: 'Idina Menzel' },
    //     { id: 2, name: 'Kristen Bell' },
    //     { id: 3, name: 'Josh Gad' },
    //   ],
    //   images: [
    //     'https://m.media-amazon.com/images/I/71L07kcOq-L._SY679_.jpg',
    //     'https://www.filmfileeurope.com/wp-content/uploads/2019/11/frozen-2-poster.jpg',
    //   ],
    // },
    // {
    //   id: 4,
    //   name: 'The 100',
    //   genre: 'Sci-Fi, Drama, Mystery',
    //   releaseDate: '2014-03-19',
    //   review: 4.3,
    //   availableCopies: 35,
    //   description: ['A post-apocalyptic drama about humanity’s survival', 'A group of young adults are sent to Earth to check if it’s habitable'],
    //   director: 'Jason Rothenberg',
    //   rating: 4.3,
    //   cast: [
    //     { id: 1, name: 'Eliza Taylor' },
    //     { id: 2, name: 'Bob Morley' },
    //     { id: 3, name: 'Marie Avgeropoulos' },
    //   ],
    //   images: [
    //     'https://m.media-amazon.com/images/I/81s7hV1ekLL._SY679_.jpg',
    //     'https://static.tvmaze.com/uploads/images/medium_portrait/287/717436.jpg',
    //   ],
    // },
    // {
    //   id: 5,
    //   name: 'Hunger Games',
    //   genre: 'Action, Sci-Fi, Thriller',
    //   releaseDate: '2012-03-23',
    //   review: 4.7,
    //   availableCopies: 20,
    //   description: ['A dystopian future where teenagers must fight to the death in a televised game', 'A fight for survival in a brutal world'],
    //   director: 'Gary Ross',
    //   rating: 4.7,
    //   cast: [
    //     { id: 1, name: 'Jennifer Lawrence' },
    //     { id: 2, name: 'Josh Hutcherson' },
    //     { id: 3, name: 'Liam Hemsworth' },
    //   ],
    //   images: [
    //     'https://m.media-amazon.com/images/I/91mX9gfhduL._SY679_.jpg',
    //     'https://www.hollywoodreporter.com/wp-content/uploads/2018/11/hunger-games.jpg',
    //   ],
    // },
    // {
    //   id: 6,
    //   name: 'Game of Thrones',
    //   genre: 'Action, Adventure, Drama',
    //   releaseDate: '2011-04-17',
    //   review: 4.9,
    //   availableCopies: 25,
    //   description: ['A medieval fantasy epic about power struggles and family rivalries', 'A battle for the Iron Throne in the Seven Kingdoms'],
    //   director: 'David Benioff, D.B. Weiss',
    //   rating: 4.9,
    //   cast: [
    //     { id: 1, name: 'Emilia Clarke' },
    //     { id: 2, name: 'Kit Harington' },
    //     { id: 3, name: 'Peter Dinklage' },
    //   ],
    //   images: [
    //     'https://m.media-amazon.com/images/I/71dQwZT5MGL._SY679_.jpg',
    //     'https://www.hbo.com/content/dam/hbodata/series/game-of-thrones/got_s8_poster_b.jpg',
    //   ],
    // },
    // {
    //   id: 7,
    //   name: 'Mufasa',
    //   genre: 'Animation, Adventure, Family',
    //   releaseDate: '2024-07-19',
    //   review: 4.5,
    //   availableCopies: 15,
    //   description: ['The prequel to The Lion King, exploring Mufasa’s backstory', 'A journey of bravery and legacy in the animal kingdom'],
    //   director: 'Barry Jenkins',
    //   rating: 4.5,
    //   cast: [
    //     { id: 1, name: 'Aaron Pierre' },
    //     { id: 2, name: 'John Kani' },
    //     { id: 3, name: 'James Earl Jones' },
    //   ],
    //   images: [
    //     'https://m.media-amazon.com/images/I/71YP9b1XN8L._SY679_.jpg',
    //     'https://www.cartoonbrew.com/wp-content/uploads/2023/02/mufasa-2024.jpg',
    //   ],
    // },
  ];
    
  public selectedMovie: any = null;
  
  @Output() movie = new EventEmitter();
  
  AddMovie(movie: any) {
    this.movie.emit(movie);
  }
  

}
