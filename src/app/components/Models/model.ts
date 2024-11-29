export interface Movie {
  id: string;
  genreId: number;
  directorId: number;
  movieName: string;
  releaseDate: string;
  price: number;
  description: string;
  imageUrl?: string;
  genre: Genre;
  director: Director;
  totalCopies: number;
}

export interface Movierequest {
  id: string;
  movieName: string;
  genreId: number | null;
  directorId: number | null;
  releaseDate: string;
  price: number;
  description: string;
  imageUrl: string | null;
  totalCopies: number;
}
  export interface SignIn {
    email: string,
    password: string,
  }
  export interface SignUp {
    name: string,
    email: string,
    password: string,
    role: number
  }
  // export interface Customer {
  //   id: number;
  //   name: string;
  //   email: string;
  //   phone: string;
  //   address: string;
  //   profilePicture: string;
  
  // }
  

export interface Genre {
  id: number;
  name: string;
}

export interface Director {
  id: number;
  name: string;
}