import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';

import { ManagerDashboardComponent } from './components/ManagerDashboard/manager-dashboard/manager-dashboard.component';
import { CustomersComponent } from './components/ManagerDashboard/customers/customers.component';
import { InventoryComponent } from './components/ManagerDashboard/inventory/inventory.component';
import { MoviesComponent } from './components/ManagerDashboard/movies/movies.component';
import { RentalsComponent } from './components/ManagerDashboard/rentals/rentals.component';
import { ReportsComponent } from './components/ManagerDashboard/reports/reports.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { SummaryViewComponent } from './components/ManagerDashboard/summary-view/summary-view.component';
import { authManagerGuard } from './Guard/auth-manager.guard';
import { RentalPageComponent } from './components/customer-profile/rental-page/rental-page.component';
import { RentalHistoryComponent } from './components/customer-profile/rental-history/rental-history.component';
import { NotificationsComponent } from './components/customer-profile/notifications/notifications.component';
import { authCustomerGuard } from './Guard/auth-customer.guard';



const routes: Routes = [
{ path: 'login' , component: LoginComponent,
//:[authCustomerGuard]
},
  { path: 'register',component:RegisterComponent},

  {path:'movies',component:CollectionsComponent},
  {path:'customer',component:CustomerProfileComponent},
  {path:'customer/:id',component:CustomerProfileComponent},


  {  
    path: 'manager', 
   // canActivate:[authManagerGuard],
    component: ManagerDashboardComponent,
    children: [
      { path: 'home', component:SummaryViewComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'movies', component: MoviesComponent },
      { path: 'rentals', component: RentalsComponent },
      { path: 'inventory', component: InventoryComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },
  {
    path: 'customer', 
    component: CustomerProfileComponent,
    children: [
      { path: 'home', component:HomeComponent },
      { path: 'rentalHistory', component: RentalHistoryComponent},
 
      { path: 'notifications', component: NotificationsComponent },
      { path: 'rent/:movieName', component: RentalPageComponent },
    ],
  },
  {path: '',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
