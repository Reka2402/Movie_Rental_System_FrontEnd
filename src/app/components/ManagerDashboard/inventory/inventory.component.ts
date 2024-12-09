import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent implements OnInit {
  

  inventory: any[] = [
    {
      dvdName: 'Inception',
      totalCopies: 10,
      availableCopies: 7,
      overdueDvds: 1,
      pendingDvds: 2,
      rentedDvds: 3,
      returnedDvds: 5,
    },
    {
      dvdName: 'The Dark Knight',
      totalCopies: 15,
      availableCopies: 5,
      overdueDvds: 2,
      pendingDvds: 3,
      rentedDvds: 7,
      returnedDvds: 8,
    },
    {
      dvdName: 'Interstellar',
      totalCopies: 8,
      availableCopies: 0,
      overdueDvds: 2,
      pendingDvds: 1,
      rentedDvds: 5,
      returnedDvds: 3,
    },
  ];

  newDvd = {
    dvdName: '',
    totalCopies: 0,
    availableCopies: 0,
    overdueDvds: 0,
  };

  searchText: string = '';
  isAddInventoryPopupOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openAddInventoryPopup(): void {
    this.isAddInventoryPopupOpen = true;
  }

  closeAddInventoryPopup(): void {
    this.isAddInventoryPopupOpen = false;
    this.resetNewDvdForm();
  }

  resetNewDvdForm(): void {
    this.newDvd = {
      dvdName: '',
      totalCopies: 0,
      availableCopies: 0,
      overdueDvds: 0,
    };
  }

  addInventory(): void {
    const newDvdCopy = { ...this.newDvd };
    this.inventory.push(newDvdCopy);
    this.closeAddInventoryPopup();
  }

  onEdit(dvdName: string): void {
    console.log('Edit DVD:', dvdName);
  }

  onView(dvdName: string): void {
    console.log('View DVD:', dvdName);
  }

  getBadgeClass(availableCopies: number): string {
    if (availableCopies === 0) {
      return 'badge bg-danger';
    } else if (availableCopies < 5) {
      return 'badge bg-warning text-dark';
    } else {
      return 'badge bg-success';
    }
  }
}




//   import { Component, OnInit } from '@angular/core';
// import { InventoryService } from './inventory.service';

// @Component({
//   selector: 'app-inventory',
//   templateUrl: './inventory.component.html',
//   styleUrls: ['./inventory.component.css'],
// })
// export class InventoryComponent implements OnInit {
//   inventory: any[] = [];
//   newDvd = {
//     dvdName: '',
//     totalCopies: 0,
//     availableCopies: 0,
//     overdueDvds: 0,
//   };
//   searchText: string = '';
//   isAddInventoryPopupOpen: boolean = false;
//   isFormValid: boolean = false;

//   constructor(private inventoryService: InventoryService) {}

//   ngOnInit(): void {
//     this.loadInventory();
//   }

//   loadInventory(): void {
//     this.inventoryService.getInventory().subscribe(
//       (data) => {
//         this.inventory = data;
//       },
//       (error) => {
//         console.error('Error loading inventory:', error);
//       }
//     );
//   }

//   openAddInventoryPopup(): void {
//     this.isAddInventoryPopupOpen = true;
//   }

//   closeAddInventoryPopup(): void {
//     this.isAddInventoryPopupOpen = false;
//     this.resetNewDvdForm();
//   }

//   resetNewDvdForm(): void {
//     this.newDvd = {
//       dvdName: '',
//       totalCopies: 0,
//       availableCopies: 0,
//       overdueDvds: 0,
//     };
//   }

//   addInventory(): void {
//     if (this.isFormValid) {
//       this.inventoryService.addDvd(this.newDvd).subscribe(
//         (response) => {
//           this.loadInventory();
//           this.closeAddInventoryPopup();
//         },
//         (error) => {
//           console.error('Error adding DVD:', error);
//         }
//       );
//     }
//   }

//   onEdit(dvdId: number): void {
//     console.log('Edit DVD:', dvdId);
//   }

//   onView(dvdId: number): void {
//     console.log('View DVD:', dvdId);
//   }

//   getBadgeClass(availableCopies: number): string {
//     if (availableCopies === 0) {
//       return 'badge bg-danger';
//     } else if (availableCopies < 5) {
//       return 'badge bg-warning text-dark';
//     } else {
//       return 'badge bg-success';
//     }
//   }
// }


