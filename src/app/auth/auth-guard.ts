import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../servicies/auth-service';

export const authGuard: CanActivateFn = () => {

  let authService = inject(AuthService)

  return authService.isLoggedIn()
};
