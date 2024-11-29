import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authCustomerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);  // Inject the router correctly

  
    // If user is logged in, redirect to the respective page (manager or customer)
    if (authService.isLoggedIn()) {
      const role = localStorage.getItem('Role');
      
      if (role === 'Admin') {
        // Redirect to manager dashboard if the user is an admin
        router.navigate(['/manager']);
      } else if (role === 'Customer') {
        // Redirect to customer dashboard if the user is a customer
        router.navigate(['/customer']);
      }

      return false;  // Block access to login page
    }

    // If the user is not logged in, allow access to the login page
    return true;
  
};
