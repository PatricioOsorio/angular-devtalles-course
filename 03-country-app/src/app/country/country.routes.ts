import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/country-layout/country-layout';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        loadComponent: () => import('@app/country/pages/by-capital-page/by-capital-page'),
      },
      {
        path: 'by-country',
        loadComponent: () => import('@app/country/pages/by-country-page/by-country-page'),
      },
      {
        path: 'by-region',
        loadComponent: () => import('@app/country/pages/by-region-page/by-region-page'),
      },
      {
        path:"by/:code",
        loadComponent: () => import('@app/country/pages/country-page/country-page'),
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default countryRoutes;
