import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authManagerGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = new Router();

  if (authService.isLoggedIn()) {
    console.log("hello")
    const token: string = localStorage.getItem('token')!;
    const decode: any = jwtDecode(token);

    router.navigate(['/manager']);
    return true;
  }
  
  router.navigate(['/login']);
  return false;
};