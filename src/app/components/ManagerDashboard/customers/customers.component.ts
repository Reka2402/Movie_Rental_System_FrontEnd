import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  searchText: string = '';
  isAddUserPopupOpen = false;
  newUser: User = { id: '', name: '', email: '', password: '', role: '' };

  users: User[] = [
    { id: '1', name: 'John Doe', email: 'john.doe@example.com', password: 'password123', role: 'Admin' },
    { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', password: 'password123', role: 'User' },
    { id: '3', name: 'Mike Johnson', email: 'mike.johnson@example.com', password: 'password123', role: 'Editor' },
    { id: '4', name: 'Emily Davis', email: 'emily.davis@example.com', password: 'password123', role: 'Moderator' },
    { id: '5', name: 'Sarah Brown', email: 'sarah.brown@example.com', password: 'password123', role: 'User' },
  ];

  constructor(private toastr: ToastrService, private router: Router) {}

  onDelete(userId: string) {
    if (confirm('Do you want to delete?')) {
      this.users = this.users.filter(user => user.id !== userId);
      this.toastr.success('User is deleted', 'Deleted', {
        timeOut: 10000,
        closeButton: true,
      });
    }
  }

  onEdit(userId: string) {
    this.router.navigate(['/user-edit', userId]);
  }

  openAddUserPopup() {
    this.isAddUserPopupOpen = true;
  }

  closeAddUserPopup() {
    this.isAddUserPopupOpen = false;
    this.newUser = { id: '', name: '', email: '', password: '', role: '' };
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.password && this.newUser.role) {
      this.newUser.id = (this.users.length + 1).toString();
      this.users.push({ ...this.newUser });
      this.toastr.success('New user added successfully', 'Success');
      this.closeAddUserPopup();
    } else {
      this.toastr.error('Please fill all fields', 'Error');
    }
  }
}
