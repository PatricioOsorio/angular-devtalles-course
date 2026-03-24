import { Routes } from '@angular/router';
import { HomePage } from '@app/shared/pages/home-page/home-page';
import { NotFound } from './shared/components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'search',
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: '**',
    // redirectTo: '',
    component: NotFound,
  },
];
