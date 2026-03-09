import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LayoutPanelTop, LucideAngularModule, LucideIconNode } from 'lucide-angular';

interface IMenuItem {
  label: string;
  description: string;
  icon: readonly LucideIconNode[];
  path: string;
}

@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, LucideAngularModule, RouterLink, RouterLinkActive],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {
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
