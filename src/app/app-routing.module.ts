import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';

import { CollectionsComponent } from './components/collections/collections.component';

import { ManagerDashboardComponent } from './components/ManagerDashboard/manager-dashboard/manager-dashboard.component';
import { CustomersComponent } from './components/ManagerDashboard/customers/customers.component';
import { InventoryComponent } from './components/ManagerDashboard/inventory/inventory.component';
import { MoviesComponent } from './components/ManagerDashboard/movies/movies.component';
import { RentalsComponent } from './components/ManagerDashboard/rentals/rentals.component';
import { ReportsComponent } from './components/ManagerDashboard/reports/reports.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { SummaryViewComponent } from './components/ManagerDashboard/summary-view/summary-view.component';

import { RentalPageComponent } from './components/customer-profile/rental-page/rental-page.component';
import { RentalHistoryComponent } from './components/customer-profile/rental-history/rental-history.component';
import { NotificationsComponent } from './components/customer-profile/notifications/notifications.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerhomeComponent } from './components/customer-profile/customerhome/customerhome.component';
import { FavoritesComponent } from './components/customer-profile/favorites/favorites.component';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: CollectionsComponent },
  {
    path: 'Manager',
    component: ManagerDashboardComponent,
    children: [
      { path: 'home', component: SummaryViewComponent },
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
      { path: 'rentalhome', component:CustomerhomeComponent  },
      { path: 'rentalHistory', component: RentalHistoryComponent },
      { path: 'favs', component: FavoritesComponent},      
      { path: 'notifications', component: NotificationsComponent },
      { path: 'passwordchange', component: RentalPageComponent },
      { path: 'rent', component: RentalPageComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
