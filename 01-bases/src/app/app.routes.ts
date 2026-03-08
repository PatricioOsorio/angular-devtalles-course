import { Routes } from '@angular/router';
import { CounterPage } from '@app/pages/counter-page/counter-page';
import { DragonballPage } from '@app/pages/dragonball-page/dragonball-page';
import { HeroPage } from '@app/pages/hero-page/hero-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
