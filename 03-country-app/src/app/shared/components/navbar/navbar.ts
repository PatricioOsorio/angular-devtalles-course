import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type INavItem = {
  label: string;
  path: string;
  ariaLabel: string;
};

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  readonly navItems: INavItem[] = [
    { label: 'Inicio', path: '/', ariaLabel: 'Ir al inicio' },
    {
      label: 'Buscar',
      path: '/country/by-capital',
      ariaLabel: 'Ir a buscar paises por capital',
    },
  ];
}
