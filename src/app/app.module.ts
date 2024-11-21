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
import { RouterOutlet, RouterModule } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';

import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CollectionsComponent,
    ManagerDashboardComponent,
    CustomerDashboardComponent
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  
   
    
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
   
    
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
