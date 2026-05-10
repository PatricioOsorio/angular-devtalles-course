import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Pipes',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'custom',
    title: 'Custom Pipes',
    loadComponent: () => import('./pages/custom-page/custom-page'),
  },
  {
    path: 'numbers',
    title: 'Number Pipes',
    loadComponent: () => import('./pages/numbers-page/numbers-page'),
  },
  {
    path: 'uncommon-page',
    title: 'Uncommon Pipes',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: "**",
    redirectTo: "basic",
  }
];
