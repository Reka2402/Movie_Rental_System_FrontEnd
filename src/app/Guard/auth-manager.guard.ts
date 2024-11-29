import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authManagerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = new Router();

  if (authService.isLoggedIn()) {
    
    const role = localStorage.getItem("Role");
    if(role == "Admin") {
      return true;
    } else if(role == "Customer") {
      return false;
    }
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  // const authService = inject(AuthService);
  // const router = inject(Router);  // Inject the router correctly

  // if (authService.isLoggedIn()) {
  //   const role = localStorage.getItem("Role");

  //   // Check the user's role and redirect them to the appropriate page
  //   if (role === "Admin") {
  //     return true;  // Allow admin to access
  //   } else if (role === "Customer") {
  //     return true;  // Allow customer to access
  //   }
  // }

  // router.navigate(['/login']);
  // return false; // If not logged in, navigate to login page
};

