import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authCustomerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);  

  
   
    if (authService.isLoggedIn()) {
      const role = localStorage.getItem('Role');
      
      if (role === 'Admin') {
        
        router.navigate(['/manager']);
      } else if (role === 'Customer') {
      
        router.navigate(['/customer']);
      }

      return false;  
    }

    return true;
  
};
