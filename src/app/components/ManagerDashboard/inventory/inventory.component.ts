import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  searchText: string = '';
  isAddInventoryPopupOpen: boolean = false;

  inventory = [
    { id: 1, dvdName: 'The Shawshank Redemption', totalCopies: 20, availableCopies: 12, overdueDvds: 2, pendingDvds: 3, rentedDvds: 5, returnedDvds: 10 },
    { id: 2, dvdName: 'Inception', totalCopies: 15, availableCopies: 9, overdueDvds: 1, pendingDvds: 2, rentedDvds: 6, returnedDvds: 8 },
    { id: 3, dvdName: 'Interstellar', totalCopies: 10, availableCopies: 4, overdueDvds: 3, pendingDvds: 1, rentedDvds: 5, returnedDvds: 5 },
  ];

  newDvd = {
    dvdName: '',
    totalCopies: 0,
    availableCopies: 0,
    overdueDvds: 0,
    pendingDvds: 0,
    rentedDvds: 0,
    returnedDvds: 0
  };

  openAddInventoryPopup() {
    this.isAddInventoryPopupOpen = true;
  }

  closeAddInventoryPopup() {
    this.isAddInventoryPopupOpen = false;
  }

  addInventory() {
    if (this.newDvd.dvdName && this.newDvd.totalCopies) {
      const newId = this.inventory.length ? this.inventory[this.inventory.length - 1].id + 1 : 1;
      this.inventory.push({ id: newId, ...this.newDvd });
      this.closeAddInventoryPopup();
      this.newDvd = { dvdName: '', totalCopies: 0, availableCopies: 0, overdueDvds: 0, pendingDvds: 0, rentedDvds: 0, returnedDvds: 0 };
    } else {
      alert('Please fill in all required fields!');
    }
  }

  getBadgeClass(value: number): string {
    if (value > 10) return 'badge bg-success';
    if (value > 5) return 'badge bg-warning text-dark';
    return 'badge bg-danger';
  }

  onEdit(id: number) {
    console.log('Edit inventory with ID:', id);
  }

  onView(id: number) {
    console.log('View inventory details for ID:', id);
  }
}
