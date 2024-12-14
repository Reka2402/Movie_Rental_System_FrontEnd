import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  searchText: string = '';
  isAddInventoryPopupOpen: boolean = false;

  // Hardcoded Inventory Data (Converted from SQL)
  inventory = [
    {
      id: '1',
      dvdName: 'The 100',
      totalCopies: 10,
      availableCopies: 10,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '2',
      dvdName: 'Stranger Things',
      totalCopies: 15,
      availableCopies: 14,
      overdueDvds: 0,
      pendingDvds: 1,
      rentedDvds: 1,
      returnedDvds: 0
    },
    {
      id: '3',
      dvdName: 'Hunger Games',
      totalCopies: 20,
      availableCopies: 18,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '4',
      dvdName: 'Frozen 2',
      totalCopies: 25,
      availableCopies: 23,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '5',
      dvdName: 'Money Heist',
      totalCopies: 30,
      availableCopies: 28,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '6',
      dvdName: 'How to Train Your Dragon',
      totalCopies: 18,
      availableCopies: 17,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '7',
      dvdName: 'Moana 2',
      totalCopies: 12,
      availableCopies: 11,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '8',
      dvdName: 'Wanda',
      totalCopies: 22,
      availableCopies: 20,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '9',
      dvdName: 'Avatar',
      totalCopies: 30,
      availableCopies: 28,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    },
    {
      id: '10',
      dvdName: 'Mufasa',
      totalCopies: 17,
      availableCopies: 15,
      overdueDvds: 0,
      pendingDvds: 0,
      rentedDvds: 0,
      returnedDvds: 0
    }
  ];

  newDvd = {
    dvdName: '',
    totalCopies: 0,
    availableCopies: 0,
    overdueDvds: 0
  };

  openAddInventoryPopup() {
    this.isAddInventoryPopupOpen = true;
  }

  closeAddInventoryPopup() {
    this.isAddInventoryPopupOpen = false;
  }

  addInventory() {
    this.inventory.push({ ...this.newDvd, id: (this.inventory.length + 1).toString(), rentedDvds: 0, returnedDvds: 0, pendingDvds: 0 });
    this.newDvd = { dvdName: '', totalCopies: 0, availableCopies: 0, overdueDvds: 0 };
    this.closeAddInventoryPopup();
  }

  getBadgeClass(availableCopies: number): string {
    return availableCopies > 5 ? 'badge bg-success' : 'badge bg-danger';
  }

  onEdit(id: string) {
    console.log(`Edit DVD with ID: ${id}`);
  }

  onView(id: string) {
    console.log(`View DVD with ID: ${id}`);
  }
}
