import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type TopMenuItem = {
  label: string;
  routerLink: string;
  ariaLabel: string;
};

@Component({
  selector: 'app-top-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopMenu {
  readonly menuItems: TopMenuItem[] = [
    {
      label: 'Por capital',
      routerLink: '/country/by-capital',
      ariaLabel: 'Buscar paises por capital',
    },
    {
      label: 'Por país',
      routerLink: '/country/by-name',
      ariaLabel: 'Buscar paises por nombre',
    },
    {
      label: 'Por región',
      routerLink: '/country/by-region',
      ariaLabel: 'Buscar paises por región',
    },
  ];
}
