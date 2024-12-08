export interface Movie {
  copiesAvailable: number;
  title: any;
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
    role: number,
    nic:string,
    phone:string
  }
  export interface User {
   id:number;
    name: string,
    email: string,
    password: string,
    role: number,
    nic:string,
    phone:string
  } 

export interface Genre {
  id: number;
  name: string;
}

export interface Director {
  id: number;
  name: string;
}
export interface ContactUs {
  ContactId: number;
  FullName: string;
  EmailAddress: string;
  Message: string;
  SubmittedOn: string;
}


export interface RentalRequestModel {
  userId: string;
  movieId: string;
  requestedDate: string;
  approvedDate: string;
  rentalDate: string;
  returnDate: string;
  rentalDays: number;
  totalAmount: number;
  isOverdue: boolean;
  status: number;

}

export interface RentalResponseModel {
  id: string;
  userId: string;
  movieId: string;
  requestedDate: string;
  approvedDate: string;
  rentalDate: string;
  returnDate: string;
  rentalDays: number;
  totalAmount: number;
  isOverdue: boolean;
  status: string;
  initialPrice: number;
}


