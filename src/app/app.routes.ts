import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { authGuard } from './auth/auth-guard';
import { Footer } from './components/footer/footer';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'fattureform', loadComponent: () => import('./features/fatture-form/fatture-form').then(c => c.FattureForm), canActivate: [authGuard]},
    {path:'login', component: Login},
    {path:'signup', component: Signup},
    {path:'clienti', loadComponent: () => import('./features/clienti/clienti').then(c => c.Clienti)},
    {path:'users', loadComponent: () => import('./auth/users/users').then(c => c.Users), canActivate: [authGuard]},
    {path:'**', component: Home}
];
