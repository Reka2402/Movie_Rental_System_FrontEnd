import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { RegisterComponent } from './components/Auth/register/register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'register',component:RegisterComponent},
  { path: '',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
