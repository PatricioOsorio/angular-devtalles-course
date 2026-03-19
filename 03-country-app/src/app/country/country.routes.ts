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
