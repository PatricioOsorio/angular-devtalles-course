import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { changeTheme } from '@styleguide/core/utils';

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

  changeTheme() {
    changeTheme('dracula');
  }

  readonly themes = [
    { label: 'Light', value: 'light' },
    { label: 'Night', value: 'night' },
    { label: 'Dark', value: 'dark' },
    { label: 'Cupcake', value: 'cupcake' },
    { label: 'Bumblebee', value: 'bumblebee' },
    { label: 'Emerald', value: 'emerald' },
    { label: 'Corporate', value: 'corporate' },
    { label: 'Synthwave', value: 'synthwave' },
    { label: 'Retro', value: 'retro' },
    { label: 'Cyberpunk', value: 'cyberpunk' },
    { label: 'Valentine', value: 'valentine' },
    { label: 'Halloween', value: 'halloween' },
    { label: 'Garden', value: 'garden' },
    { label: 'Forest', value: 'forest' },
    { label: 'Aqua', value: 'aqua' },
    { label: 'Lofi', value: 'lofi' },
    { label: 'Pastel', value: 'pastel' },
    { label: 'Fantasy', value: 'fantasy' },
    { label: 'Wireframe', value: 'wireframe' },
    { label: 'Black', value: 'black' },
    { label: 'Luxury', value: 'luxury' },
    { label: 'Dracula', value: 'dracula' },
    { label: 'Cmyk', value: 'cmyk' },
    { label: 'Autumn', value: 'autumn' },
    { label: 'Business', value: 'business' },
    { label: 'Acid', value: 'acid' },
    { label: 'Lemonade', value: 'lemonade' },
    { label: 'Coffee', value: 'coffee' },
    { label: 'Winter', value: 'winter' },
    { label: 'Dim', value: 'dim' },
    { label: 'Nord', value: 'nord' },
    { label: 'Sunset', value: 'sunset' },
    { label: 'Caramellatte', value: 'caramellatte' },
    { label: 'Abyss', value: 'abyss' },
    { label: 'Silk', value: 'silk' },
  ];
}
