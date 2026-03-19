import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type TopMenuItem = {
  label: string;
  routerLink: string;
  ariaLabel: string;
};

@Component({
  selector: 'country-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './country-top-menu.html',
  styleUrl: './country-top-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenu {
  readonly menuItems: TopMenuItem[] = [
    {
      label: 'Por capital',
      routerLink: '/search/by-capital',
      ariaLabel: 'Buscar paises por capital',
    },
    {
      label: 'Por país',
      routerLink: '/search/by-country',
      ariaLabel: 'Buscar paises por nombre',
    },
    {
      label: 'Por región',
      routerLink: '/search/by-region',
      ariaLabel: 'Buscar paises por región',
    },
  ];
}
