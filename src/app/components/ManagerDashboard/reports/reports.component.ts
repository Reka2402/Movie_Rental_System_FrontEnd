import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  reportSelected: string | null = null;

  viewCustomerReport() {
    this.reportSelected = 'customer';
  }

  viewRentalReport() {
    this.reportSelected = 'rental';
  }

  viewInventoryReport() {
    this.reportSelected = 'inventory';
  }
}
