import { Component } from '@angular/core';
import { Search, TrendingUp, LucideAngularModule } from 'lucide-angular';

import { GifsSideMenuHeader } from '@app/gifs/components/gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideMenuOptions } from '@app/gifs/components/gifs-side-menu-options/gifs-side-menu-options';
import { IMenuItem } from '@app/gifs/interfaces/menu.interface';

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions, LucideAngularModule],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu {
  readonly Search = Search;
  readonly TrendingUp = TrendingUp;

  readonly menuItems: IMenuItem[] = [
    {
      label: 'Trending',
      description: 'See the trending gifs',
      icon: TrendingUp,
      path: '/dashboard/trending',
    },
    {
      label: 'Search',
      description: 'Search for your favorite gifs',
      icon: Search,
      path: '/dashboard/search',
    },
  ];
}
