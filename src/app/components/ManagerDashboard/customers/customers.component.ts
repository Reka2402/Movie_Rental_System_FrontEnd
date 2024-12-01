import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { User } from '../../Models/model';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  searchText: string = '';
  isAddUserPopupOpen = false;
  hoverBtn: boolean = false; 
  users: User[] = [];

  constructor( private userservice:UserService, private toastr: ToastrService, private router: Router) {}
  ngOnInit(): void {
    this.loadUser();
  }

 
  // onDelete(userId: number) {
  //   if(confirm('Do you want to delete?')) {
  //     this.userservice.deleteUser(userId).subscribe(data => {
  //       this.toastr.success('User is deleted', "Deleted", {
  //         timeOut: 10000,
  //         closeButton: true
  //       });
  //       this.loadUser();
  //     });
  //   }
  // }
  loadUser() {
    this.userservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  onEdit(userId: number) {
    this.router.navigate(['/user-edit', userId])
  }

  openAddUserPopup() {
    this.isAddUserPopupOpen = true;
  }

  closeAddUserPopup() {
    this.isAddUserPopupOpen = false;
   
  }


}
