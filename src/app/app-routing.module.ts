import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'register',component:RegisterComponent},
  { path: '',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'movies',component:CollectionsComponent},
  {path:'customer',component:CustomerDashboardComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
