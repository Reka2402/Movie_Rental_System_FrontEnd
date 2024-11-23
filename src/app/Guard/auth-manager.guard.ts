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

};