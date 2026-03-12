import { Component, computed, inject } from '@angular/core';
import { Search, TrendingUp, LucideAngularModule, History } from 'lucide-angular';

import { GifsSideMenuHeader } from '@app/gifs/components/gifs-side-menu-header/gifs-side-menu-header';
import { GifsSideMenuOptions } from '@app/gifs/components/gifs-side-menu-options/gifs-side-menu-options';
import { IMenuItem } from '@app/gifs/interfaces/menu.interface';
import { GifsService } from '@app/gifs/services/gifs/gifs.service';

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions, LucideAngularModule],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu {
  readonly gifsService = inject(GifsService);

  readonly IconSearch = Search;
  readonly IconTrendingUp = TrendingUp;
  readonly IconHistory = History;

  readonly menuItems: IMenuItem[] = [
    {
      label: 'Trending',
      description: 'See the trending gifs',
      icon: this.IconTrendingUp,
      path: '/dashboard/trending',
    },
    {
      label: 'Search',
      description: 'Search for your favorite gifs',
      icon: this.IconSearch,
      path: '/dashboard/search',
    },
  ];

  readonly searchHistory = computed(() => {
    return this.gifsService
      .searchHistory()
      .filter((query): query is string => !!query)
      .map((query) => ({
        label: query,
        description: `Search for ${query}`,
        icon: this.IconHistory,
        path: `/dashboard/history/${query}`,
      }));
  });
}
