import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('@app/gifs/pages/dashboard-page/dashboard-page'),
  },
  {
    path: 'trending',
    loadComponent: () => import('@app/gifs/pages/trending-page/trending-page'),
  },
  {
    path: 'search',
    loadComponent: () => import('@app/gifs/pages/search-page/search-page'),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
