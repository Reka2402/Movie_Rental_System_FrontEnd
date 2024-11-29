import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-page',
  templateUrl: './rental-page.component.html',
  styleUrl: './rental-page.component.css'
})
export class RentalPageComponent  implements OnInit{
  movieName: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.movieName = this.route.snapshot.paramMap.get('movieName');
  }
}
