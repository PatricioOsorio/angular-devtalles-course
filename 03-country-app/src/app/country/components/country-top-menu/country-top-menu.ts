import { Component } from '@angular/core';
import { ITopMenuItem } from '@app/country/interfaces/top-menu.interface';
import { MenuList } from '@app/shared/components/menu-list/menu-list';

@Component({
  selector: 'country-top-menu',
  imports: [MenuList],
  templateUrl: './country-top-menu.html',
  styleUrl: './country-top-menu.css',
})
export class TopMenu {
  readonly items: ITopMenuItem[] = [
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
