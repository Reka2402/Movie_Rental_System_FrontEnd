import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { LoginComponent } from './components/Auth/login/login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr'
import { RouterOutlet, RouterModule } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { ManagerDashboardComponent } from './components/ManagerDashboard/manager-dashboard/manager-dashboard.component';
import { CustomersComponent } from './components/ManagerDashboard/customers/customers.component';
import { MoviesComponent } from './components/ManagerDashboard/movies/movies.component';
import { RentalsComponent } from './components/ManagerDashboard/rentals/rentals.component';
import { ReportsComponent } from './components/ManagerDashboard/reports/reports.component';
import { InventoryComponent } from './components/ManagerDashboard/inventory/inventory.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { SummaryViewComponent } from './components/ManagerDashboard/summary-view/summary-view.component';
import { RentalHistoryComponent } from './components/customer-profile/rental-history/rental-history.component';
import { NotificationsComponent } from './components/customer-profile/notifications/notifications.component';
import { RentalPageComponent } from './components/customer-profile/rental-page/rental-page.component';
import { CustomerhomeComponent } from './components/customer-profile/customerhome/customerhome.component';

import { FavoritesComponent } from './components/customer-profile/favorites/favorites.component';
import { FilterMoviesPipe } from './Pipes/filter-movies.pipe';
import { FilterUsersPipe } from './Pipes/filter-users.pipe';
import { ProfileCustomerComponent } from './components/customer-profile/profile-customer/profile-customer.component';
import { PasswordUpdateComponent } from './components/customer-profile/password-update/password-update.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CollectionsComponent,
    ManagerDashboardComponent,
    CustomersComponent,
    MoviesComponent,
    RentalsComponent,
    ReportsComponent,
    InventoryComponent,
    CustomerProfileComponent,
    SummaryViewComponent,
    RentalHistoryComponent,
    NotificationsComponent,
    RentalPageComponent,
    CustomerhomeComponent,
    FavoritesComponent,
      FilterMoviesPipe,
      FilterUsersPipe,
      ProfileCustomerComponent,
      PasswordUpdateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
   // AngularFontAwesomeModule

    
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
