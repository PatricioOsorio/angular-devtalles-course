import { Routes } from '@angular/router';

const countryRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('@app/country/pages/by-capital-page/by-capital-page'),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default countryRoutes;
