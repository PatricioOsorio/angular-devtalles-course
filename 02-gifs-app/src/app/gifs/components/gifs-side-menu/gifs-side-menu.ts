import { Component } from '@angular/core';
import { LayoutPanelTop, LucideAngularModule } from 'lucide-angular';

import { GifsSideMenuHeader } from '@app/gifs/components/gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideMenuOptions } from '@app/gifs/components/gifs-side-menu-options/gifs-side-menu-options';
import { IMenuItem } from '@app/gifs/interfaces/menu.interface';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions, LucideAngularModule],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu {
  readonly LayoutPanelTop = LayoutPanelTop;

  readonly menuItems: IMenuItem[] = [
    {
      label: 'Trending',
      description: 'See the trending gifs',
      icon: LayoutPanelTop,
      path: '/dashboard/trending',
    },
    {
      label: 'Search',
      description: 'Search for your favorite gifs',
      icon: LayoutPanelTop,
      path: '/dashboard/search',
    },
  ];
}
