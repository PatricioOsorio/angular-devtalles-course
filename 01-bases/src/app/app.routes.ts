import { Routes } from '@angular/router';
import { Counter } from '@app/pages/counter/counter';
import { Hero } from '@app/pages/hero/hero';

export const routes: Routes = [
  {
    path: '',
    component: Counter,
  },
  {
    path: 'hero',
    component: Hero,
  },
];
