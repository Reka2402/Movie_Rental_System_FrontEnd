import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
    slides = [
      {
        title: 'Stranger Things',
        description: 'Experience the thrills of Hawkins, where supernatural forces collide. Join the adventure and uncover the mysteries of the Upside Down!',
        badge: '9.5',
        details: '4 Seasons | HD | 16+',
        imageUrl: '/Sliders/slider 10.jpg'
      },
      {
        title: 'Frozen 2',
        description: 'Join Elsa, Anna, and friends on a magical journey beyond Arendelle to uncover the secrets of their past and save their kingdom.',
        badge: '9.5',
        details: '140 mins | HD | 16+',
        imageUrl: '/Sliders/Slider 1.jpg'
      },
      {
        title: 'WandaVision',
        description: 'Step into the surreal world of Wanda and Vision as they navigate mysterious realities, blending classic sitcom charm with Marvel\'s thrilling twists.',
        badge: '9.5',
        details: '120 mins | HD | 16+',
        imageUrl: '/Sliders/slider 11.jpg'
      },
      {
        title: 'Moana 2',
        description: 'Set sail once more with Moana as she embarks on a new ocean adventure.',
        badge: '9.5',
        details: '200 mins | HD | 16+',
        imageUrl: '/Sliders/slider 5.jpeg'
      }
    ];
  }
  

