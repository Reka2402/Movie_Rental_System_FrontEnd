import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css',
 
})
export class ManagerDashboardComponent  {

  isSidebarExpanded = true;

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('Role');
  }

}
