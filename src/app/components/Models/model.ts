export interface Movie {
  id: string; // Guid in C# is typically represented as a string in JavaScript
  genreId: number;
  directorId: number;
  movieName: string;
  releaseDate: string; // DateTime in C# is usually handled as a string in JavaScript (ISO 8601 format)
  price: number;
  description: string;
  imageUrl?: string; // Nullable string (optional in Angular)
  genre?: Genre; // Assuming Genre is another interface
  director?: Director; // Assuming Director is another interface
  totalCopies: number;
}
export interface Movierequest {
  movieName: string;
  genreId: number | null; 
  genreName: string | null; 
  directorId: number | null; 
  directorName: string | null; 
  releaseDate: string; 
  price: number;
  description: string;
  imageUrl: string | null; // ImageUrl can be null in the backend
  totalcopies: number;
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
  export interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    profilePicture: string;
    rentalHistory: { title: string; date: string }[];
  }
  

export interface Genre {
  id: number;
  name: string;
}

export interface Director {
  id: number;
  name: string;
}