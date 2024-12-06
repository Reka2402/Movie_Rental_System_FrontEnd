import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createRentalsChart();
    this.createGenresChart();
  }

  createRentalsChart(): void {
    const ctx = document.getElementById('rentalsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Rentals',
            data: [10, 20, 15, 30, 40, 35, 50],
            borderColor: '#1ABC9C',
            borderWidth: 2,
            backgroundColor: 'rgba(26, 188, 156, 0.1)',
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  createGenresChart(): void {
    const ctx = document.getElementById('genresChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Action', 'Drama', 'Comedy', 'Horror'],
        datasets: [
          {
            label: 'Top Genres',
            data: [30, 25, 20, 25],
            backgroundColor: ['#34495E', '#1ABC9C', '#F39C12', '#E74C3C']
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: { size: 12 } // Reduce font size for smaller chart
            }
          }
        },
        layout: {
          padding: 10 // Add padding around the chart
        }
      }
    });
  }
  
}
