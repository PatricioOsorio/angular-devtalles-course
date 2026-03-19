import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type INavItem = {
  label: string;
  path: string;
  exact: boolean;
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
    { label: 'Inicio', path: '/', exact: true },
    {
      label: 'Buscar',
      path: '/search',
      exact: false,
    },
  ];
}
